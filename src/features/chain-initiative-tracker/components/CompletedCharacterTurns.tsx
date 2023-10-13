import { chainInitiativeTrackerSignal } from "$/features/chain-initiative-tracker/chainInitiativeTrackerState";
import { type Component, createMemo } from "solid-js";
import CharacterList from "$/features/chain-initiative-tracker/components/CharacterList";

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
      <h2>Completed Turns</h2>
      <CharacterList characters={charactersWhoHaveGoneThisRound()} />
    </div>
  );
};

export default CompletedCharacterTurns;
