import type {
  ChainInitiativeTrackerCharacter,
  ChainInitiativeTrackerSide,
} from "$/features/chain-initiative-tracker/types";
import { generateRandomId } from "$/utils";
import { createSignal } from "solid-js";

const composeCharacterNameRegex = (characterName: string) => {
  return new RegExp(`${characterName}(\s\(\d*\))?`);
};

const numberInBracketsRegex = /\((\d*)\)/;
const getNumberInBracketsFromString = (string: string) => {
  const match = string.match(numberInBracketsRegex);
  return match ? Number(match[1]) : null;
};

type ChainInitiativeTrackerState = {
  roundNumber: number;
  characterIdsMovedInCurrentRound: string[];
  characters: ChainInitiativeTrackerCharacter[];
};

export const chainInitiativeTrackerSignal =
  createSignal<ChainInitiativeTrackerState>({
    characterIdsMovedInCurrentRound: [],
    characters: [
      {
        id: "1",
        health: 16,
        maxHealth: 16,
        name: "Goblin",
        side: "bad",
      },
    ],
    roundNumber: 0,
  });

const [, setState] = chainInitiativeTrackerSignal;

type NewCharacterInput = {
  name: string;
  health: number;
  side: ChainInitiativeTrackerSide;
};

const deriveStateWithNewCharacter = (
  state: ChainInitiativeTrackerState,
  { name, health, side }: NewCharacterInput,
): ChainInitiativeTrackerState => {
  const newId = generateRandomId();

  return {
    ...state,
    characters: [
      ...state.characters,
      {
        maxHealth: health,
        health,
        id: newId,
        name,
        side,
      },
    ],
  };
};

const deriveCharacterHealthChange = (
  character: ChainInitiativeTrackerCharacter,
  newHealth: number,
): ChainInitiativeTrackerCharacter => ({
  ...character,
  health: newHealth,
  maxHealth: Math.max(character.maxHealth, newHealth),
});

export const chainInitiativeActions = {
  addCharacter: (input: NewCharacterInput) => {
    setState((currentState) =>
      deriveStateWithNewCharacter(currentState, input),
    );
  },
  copyCharacterWithId: (id: string) => {
    setState((currentState) => {
      const characterToCopy = currentState.characters.find(
        (character) => character.id === id,
      );

      if (!characterToCopy) {
        return currentState;
      }

      const characterNameRegex = composeCharacterNameRegex(
        characterToCopy.name,
      );
      const charactersWithSameName = currentState.characters.filter(
        (character) => characterNameRegex.test(character.name),
      );
      const highestNumberInBrackets: number = charactersWithSameName.reduce(
        (result: number, character) => {
          const numberInBrackets = getNumberInBracketsFromString(
            character.name,
          );

          if (!numberInBrackets) return result;
          if (!result) return numberInBrackets;
          return Math.max(result, numberInBrackets);
        },
        0,
      );

      const newCharacterName = `${characterToCopy.name} (${
        highestNumberInBrackets + 1
      })`;

      return deriveStateWithNewCharacter(currentState, {
        health: characterToCopy.maxHealth,
        name: newCharacterName,
        side: characterToCopy.side,
      });
    });
  },
  removeCharacterWithId: (id: string) => {
    setState((currentState) => ({
      ...currentState,
      characters: currentState.characters.filter(
        (character) => character.id !== id,
      ),
    }));
  },
  setHealthOfCharacter: ({
    health,
    characterId,
  }: {
    health: number;
    characterId: string;
  }) => {
    setState((currentState) => ({
      ...currentState,
      characters: currentState.characters.map((character) =>
        character.id === characterId
          ? deriveCharacterHealthChange(character, health)
          : character,
      ),
    }));
  },
  markCharacterIdAsMoved: (characterId: string) => {
    setState((currentState) => ({
      ...currentState,
      characterIdsMovedInCurrentRound: [
        ...currentState.characterIdsMovedInCurrentRound,
        characterId,
      ],
    }));
  },
  markCharacterIdAsNotMoved: (characterId: string) => {
    setState((currentState) => ({
      ...currentState,
      characterIdsMovedInCurrentRound:
        currentState.characterIdsMovedInCurrentRound.filter(
          (id) => id !== characterId,
        ),
    }));
  },
  renameCharacter: ({
    characterId,
    newName,
  }: {
    characterId: string;
    newName: string;
  }) => {
    setState((currentState) => ({
      ...currentState,
      characters: currentState.characters.map((character) =>
        character.id === characterId
          ? { ...character, name: newName }
          : character,
      ),
    }));
  },
};
