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

const ACTION_BUTTON_SIZE = 20;

const CharacterCard: Component<CharacterCardProps> = ({ characterId }) => {
  const [state] = chainInitiativeTrackerSignal;
  const fullCharacter = createMemo(() =>
    state().characters.find((character) => character.id === characterId),
  );

  const characterHasGoneThisRound = createMemo(() =>
    state().characterIdsMovedInCurrentRound.includes(characterId),
  );

  return (
    <div class={styles.card}>
      <div class={styles.left}>
        <div
          classList={{
            [styles.sideIndicator]: true,
            [styles.green]: fullCharacter()?.side === "good",
            [styles.red]: fullCharacter()?.side === "bad",
          }}
        />
        <div class={styles.characterLabel}>{fullCharacter()?.name}</div>
      </div>
      <div class={styles.actions}>
        <input
          type="number"
          class={styles.healthInput}
          value={fullCharacter()?.health ?? 0}
          onInput={(e) =>
            chainInitiativeActions.setHealthOfCharacter({
              characterId,
              health: e.target.valueAsNumber,
            })
          }
        />
        {characterHasGoneThisRound() && (
          <button
            class={styles.actionButton}
            aria-label="Mark as not moved"
            onClick={[
              chainInitiativeActions.markCharacterIdAsNotMoved,
              characterId,
            ]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-big-left-line-filled"
              width={ACTION_BUTTON_SIZE}
              height={ACTION_BUTTON_SIZE}
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h5a1 1 0 0 0 1 -1v-6l-.007 -.117a1 1 0 0 0 -.993 -.883l-5 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"
                stroke-width="0"
                fill="currentColor"
              />
              <path
                d="M4.415 12l6.585 -6.586v3.586l.007 .117a1 1 0 0 0 .993 .883l5 -.001v4l-5 .001a1 1 0 0 0 -1 1v3.586l-6.585 -6.586z"
                stroke-width="0"
                fill="currentColor"
              />
              <path
                d="M21 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                stroke-width="0"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
        <button
          class={styles.actionButton}
          aria-label="Copy"
          onClick={() =>
            chainInitiativeActions.copyCharacterWithId(characterId)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={ACTION_BUTTON_SIZE}
            height={ACTION_BUTTON_SIZE}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
            <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
          </svg>
        </button>
        <button
          aria-label="Delete"
          class={styles.actionButton}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-trash"
            width={ACTION_BUTTON_SIZE}
            height={ACTION_BUTTON_SIZE}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
        {!characterHasGoneThisRound() && (
          <button
            aria-label="Mark as moved"
            class={styles.actionButton}
            onClick={[
              chainInitiativeActions.markCharacterIdAsMoved,
              characterId,
            ]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-big-right-line-filled"
              width={ACTION_BUTTON_SIZE}
              height={ACTION_BUTTON_SIZE}
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-4.999a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l4.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
                stroke-width="0"
                fill="currentColor"
              />
              <path
                d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                stroke-width="0"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
