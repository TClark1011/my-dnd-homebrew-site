import {
  chainInitiativeActions,
  chainInitiativeTrackerSignal,
} from "$/features/chain-initiative-tracker/chainInitiativeTrackerState";
import { createMemo, type Component } from "solid-js";
import * as styles from "./CharacterCard.css";

type CharacterCardProps = {
  characterId: string;
};

const composeCharacterDeleteConfirmationMessage = (characterName: string) =>
  `Are you sure you want to delete "${characterName}"?`;

const CharacterCard: Component<CharacterCardProps> = ({ characterId }) => {
  const [state] = chainInitiativeTrackerSignal;
  const fullCharacter = createMemo(() =>
    state().characters.find((character) => character.id === characterId),
  );

  const characterHasGoneThisRound = createMemo(() =>
    state().characterIdsMovedInCurrentRound.includes(characterId),
  );

  return (
    <div
      classList={{
        [styles.wrapper]: true,
        [styles.greenCard]: fullCharacter()?.side === "good",
        [styles.redCard]: fullCharacter()?.side === "bad",
      }}
    >
      <div class={styles.characterLabel}>{fullCharacter()?.name}</div>
      <div class={styles.actions}>
        <button
          onClick={() =>
            chainInitiativeActions.copyCharacterWithId(characterId)
          }
        >
          🆕
        </button>
        <button
          onClick={() => {
            const message = composeCharacterDeleteConfirmationMessage(
              fullCharacter()?.name ?? "",
            );
            const confirmation = window.confirm(message);
            if (confirmation) {
              chainInitiativeActions.removeCharacterWithId(
                fullCharacter()?.id ?? "",
              );
            }
          }}
        >
          ❌
        </button>
        <button
          onClick={() => {
            if (characterHasGoneThisRound()) {
              chainInitiativeActions.markCharacterIdAsNotMoved(characterId);
            } else {
              chainInitiativeActions.markCharacterIdAsMoved(characterId);
            }
          }}
        >
          ➡️
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
