import { type Component } from "solid-js";
import * as styles from "./CharacterList.css";
import CharacterCard from "$/features/chain-initiative-tracker/components/CharacterCard";
import type { ChainInitiativeTrackerCharacter } from "$/features/chain-initiative-tracker/types";
import { chainInitiativeTrackerSignal } from "~chain-initiative-tracker/chainInitiativeTrackerState";
import { Key as KeyedFor } from "@solid-primitives/keyed";

const CharacterList: Component<{
  characters: ChainInitiativeTrackerCharacter[];
  emptyMessage: string;
}> = (props) => {
  const [state] = chainInitiativeTrackerSignal;
  return (
    <div class={styles.list}>
      <KeyedFor each={props.characters} by="id">
        {(character) => <CharacterCard characterId={character().id} />}
      </KeyedFor>
      {props.characters.length === 0 && (
        <div class={styles.empty}>
          {state().characters.length === 0
            ? "no characters"
            : props.emptyMessage}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
