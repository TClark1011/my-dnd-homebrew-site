import {
  chainInitiativeActions,
  charactersThatHaveMoved,
} from "$/features/chain-initiative-tracker/chainInitiativeTrackerState";
import { type Component } from "solid-js";
import CharacterList from "$/features/chain-initiative-tracker/components/CharacterList";
import * as styles from "./CompletedCharacterTurns.css";
import * as dndStyles from "$/styles/dnd.css";

type CharacterTurnsProps = {
  class?: string;
};

const CompletedCharacterTurns: Component<CharacterTurnsProps> = ({
  class: className,
}) => {
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
        characters={charactersThatHaveMoved()}
      />
    </div>
  );
};

export default CompletedCharacterTurns;
