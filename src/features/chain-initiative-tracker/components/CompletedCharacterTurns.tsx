import {
  chainInitiativeActions,
  chainInitiativeTrackerSignal,
} from "$/features/chain-initiative-tracker/chainInitiativeTrackerState";
import { type Component, createMemo } from "solid-js";
import CharacterList from "$/features/chain-initiative-tracker/components/CharacterList";
import * as styles from "./CompletedCharacterTurns.css";
import * as dndStyles from "$/styles/dnd.css";

type CharacterTurnsProps = {
  class?: string;
};

const CompletedCharacterTurns: Component<CharacterTurnsProps> = ({
  class: className,
}) => {
  const [state] = chainInitiativeTrackerSignal;

  const charactersWhoHaveGoneThisRound = createMemo(() =>
    state().characters.filter((character) =>
      state().characterIdsMovedInCurrentRound.includes(character.id),
    ),
  );

  return (
    <div class={className}>
      <div class={styles.topBar}>
        <h3 classList={{ [styles.header]: true, [dndStyles.dndH3]: true }}>
          Completed Turns
        </h3>
        <button
          onClick={chainInitiativeActions.markAllCharactersAsNotMoved}
          class={styles.resetButton}
        >
          Reset Turns
        </button>
      </div>
      <CharacterList
        emptyMessage="no characters have completed their turn yet"
        characters={charactersWhoHaveGoneThisRound()}
      />
    </div>
  );
};

export default CompletedCharacterTurns;
