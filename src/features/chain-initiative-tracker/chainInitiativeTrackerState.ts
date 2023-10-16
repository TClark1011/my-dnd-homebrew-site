import type {
  ChainInitiativeTrackerCharacter,
  ChainInitiativeTrackerSide,
} from "$/features/chain-initiative-tracker/types";
import { generateRandomId } from "$/utils";
import { createMemo, createSignal } from "solid-js";
import { produce } from "immer";

const composeCharacterNameRegex = (characterName: string) => {
  return new RegExp(`${characterName}(\s\(\d*\))?`);
};

const numberInBracketsRegex = /\((\d*)\)$/;
const getNumberInBracketsFromString = (string: string) => {
  const match = string.match(numberInBracketsRegex);
  return match ? Number(match[1]) : null;
};

const removeNumberInBracketsFromEndOfString = (str: string) => {
  return str.replace(numberInBracketsRegex, "");
};

type ChainInitiativeTrackerState = {
  roundNumber: number;
  characterIdsMovedInCurrentRound: string[];
  characters: ChainInitiativeTrackerCharacter[];
};

export const chainInitiativeTrackerSignal =
  createSignal<ChainInitiativeTrackerState>({
    characterIdsMovedInCurrentRound: [],
    characters: [],
    roundNumber: 0,
  });

const [state, setState] = chainInitiativeTrackerSignal;

const sideToSortScore: Record<ChainInitiativeTrackerSide, number> = {
  bad: 1,
  good: -1,
};

const characterSorterAlphabetically = (
  a: ChainInitiativeTrackerCharacter,
  b: ChainInitiativeTrackerCharacter,
) => a.name.localeCompare(b.name);

const characterSorterBracketNumber = (
  a: ChainInitiativeTrackerCharacter,
  b: ChainInitiativeTrackerCharacter,
) => {
  const characterANumber = getNumberInBracketsFromString(a.name);
  const characterAWithoutNumber = removeNumberInBracketsFromEndOfString(
    a.name,
  ).trim();
  const characterBNumber = getNumberInBracketsFromString(b.name);
  const characterBWithoutNumber = removeNumberInBracketsFromEndOfString(
    b.name,
  ).trim();

  if (
    characterANumber === null ||
    characterBNumber === null ||
    characterAWithoutNumber !== characterBWithoutNumber
  )
    return 0;

  const result = characterANumber > characterBNumber ? 1 : -1;

  return result;
};

const characterSorterBySide = (
  a: ChainInitiativeTrackerCharacter,
  b: ChainInitiativeTrackerCharacter,
) =>
  a.side === b.side ? 0 : sideToSortScore[a.side] - sideToSortScore[b.side];

const sortCharacterList = (
  characters: ChainInitiativeTrackerCharacter[],
): ChainInitiativeTrackerCharacter[] =>
  [...characters]
    .sort(characterSorterAlphabetically)
    .sort(characterSorterBracketNumber)
    .sort(characterSorterBySide);

export const charactersThatHaveNotMoved = createMemo(() => {
  const theCharacters = state().characters.filter(
    (char) => !state().characterIdsMovedInCurrentRound.includes(char.id),
  );

  const sorted = sortCharacterList(theCharacters);
  return sorted;
});

export const charactersThatHaveMoved = createMemo(() => {
  const theCharacters = state().characters.filter((char) =>
    state().characterIdsMovedInCurrentRound.includes(char.id),
  );

  const sorted = sortCharacterList(theCharacters);
  return sorted;
});

const updateState = (updater: (state: ChainInitiativeTrackerState) => void) =>
  setState(produce(updater));

type NewCharacterInput = {
  name: string;
  health: number;
  side: ChainInitiativeTrackerSide;
};

const composeNewCharacter = ({
  name,
  health,
  side,
}: NewCharacterInput): ChainInitiativeTrackerCharacter => {
  const newId = generateRandomId();

  return {
    maxHealth: health,
    health,
    id: newId,
    name,
    side,
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
    updateState((draftState) => {
      const newCharacter = composeNewCharacter(input);
      draftState.characters.push(newCharacter);
    });
  },
  copyCharacterWithId: (id: string) => {
    updateState((draftState) => {
      const characterToCopy = draftState.characters.find(
        (character) => character.id === id,
      );

      if (!characterToCopy) throw new Error(`Character not found (id: ${id})`);

      const characterNameWithoutAnyCopyNumber =
        removeNumberInBracketsFromEndOfString(characterToCopy.name);

      const characterNameRegex = composeCharacterNameRegex(
        characterNameWithoutAnyCopyNumber,
      );
      const charactersWithSameName = draftState.characters.filter((character) =>
        characterNameRegex.test(character.name),
      );
      const highestCopyNumber: number | null = charactersWithSameName.reduce(
        (result: number | null, character) => {
          const numberInBrackets = getNumberInBracketsFromString(
            character.name,
          );

          if (!numberInBrackets) return result;
          if (!result) return numberInBrackets;
          return Math.max(result, numberInBrackets);
        },
        null,
      );

      const newCharacterName = `${characterNameWithoutAnyCopyNumber} (${
        (highestCopyNumber ?? 0) + 1
      })`;

      const newCharacter = composeNewCharacter({
        name: newCharacterName,
        health: characterToCopy.maxHealth,
        side: characterToCopy.side,
      });

      draftState.characters.push(newCharacter);
    });
  },
  removeCharacterWithId: (id: string) => {
    updateState((draftState) => {
      const charactersAfterRemoval = draftState.characters.filter(
        (character) => character.id !== id,
      );

      draftState.characters = charactersAfterRemoval;
    });
  },
  setHealthOfCharacter: ({
    health,
    characterId,
  }: {
    health: number;
    characterId: string;
  }) => {
    updateState((draftState) => {
      draftState.characters = draftState.characters.map((character) => {
        const isTargetCharacter = character.id === characterId;
        if (!isTargetCharacter) return character;

        return deriveCharacterHealthChange(character, health);
      });
    });
  },
  markCharacterIdAsMoved: (characterId: string) => {
    updateState((draftState) => {
      draftState.characterIdsMovedInCurrentRound.push(characterId);
    });
  },
  markCharacterIdAsNotMoved: (characterId: string) => {
    updateState((draftState) => {
      const updatedCharactersThatHaveMoved =
        draftState.characterIdsMovedInCurrentRound.filter(
          (id) => id !== characterId,
        );

      draftState.characterIdsMovedInCurrentRound =
        updatedCharactersThatHaveMoved;
    });
  },
  markAllCharactersAsMoved: () =>
    updateState((draftState) => {
      const allCharacterIds = draftState.characters.map(
        (character) => character.id,
      );
      draftState.characterIdsMovedInCurrentRound = allCharacterIds;
    }),
  markAllCharactersAsNotMoved: () =>
    updateState((draftState) => {
      draftState.characterIdsMovedInCurrentRound = [];
    }),
};
