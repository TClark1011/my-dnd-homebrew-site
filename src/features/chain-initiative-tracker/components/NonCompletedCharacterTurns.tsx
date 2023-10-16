import { charactersThatHaveNotMoved } from "~chain-initiative-tracker/chainInitiativeTrackerState";
import CharacterList from "~chain-initiative-tracker/components/CharacterList";
import { type Component } from "solid-js";
import * as dndStyles from "$/styles/dnd.css";

const NonCompletedCharacterTurns: Component<{ class?: string }> = ({
  class: className,
}) => {
  return (
    <div class={className}>
      <h3 class={dndStyles.dndH3}>Characters</h3>
      <CharacterList
        emptyMessage="all characters have completed their turn this round"
        characters={charactersThatHaveNotMoved()}
      />
    </div>
  );
};

export default NonCompletedCharacterTurns;
