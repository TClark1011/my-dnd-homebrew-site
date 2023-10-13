import CreateNewCharacter from "~chain-initiative-tracker/components/CreateNewCharacter";
import CompletedCharacterTurns from "~chain-initiative-tracker/components/CompletedCharacterTurns";
import type { Component } from "solid-js";
import * as styles from "./ChainInitiativeTracker.css";
import NonCompletedCharacterTurns from "~chain-initiative-tracker/components/NonCompletedCharacterTurns";

const ChainInitiativeTracker: Component = () => (
  <div>
    <div class={styles.turnListsContainer}>
      <NonCompletedCharacterTurns />
      <CompletedCharacterTurns class={styles.completedTurns} />
    </div>
    <CreateNewCharacter />
  </div>
);

export default ChainInitiativeTracker;
