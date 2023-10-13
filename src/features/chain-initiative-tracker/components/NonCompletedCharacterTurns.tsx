import { chainInitiativeTrackerSignal } from "~chain-initiative-tracker/chainInitiativeTrackerState";
import CharacterList from "~chain-initiative-tracker/components/CharacterList";
import { createMemo, type Component } from "solid-js";

const NonCompletedCharacterTurns: Component<{ class?: string }> = ({
  class: className,
}) => {
  const [state] = chainInitiativeTrackerSignal;
  const charactersWhoHaveNotGoneYet = createMemo(() =>
    state().characters.filter(
      (character) =>
        !state().characterIdsMovedInCurrentRound.includes(character.id),
    ),
  );

  return (
    <div class={className}>
      <h3>Characters</h3>
      <CharacterList
        emptyMessage="all characters have completed their turn this round"
        characters={charactersWhoHaveNotGoneYet()}
      />
    </div>
  );
};

export default NonCompletedCharacterTurns;
