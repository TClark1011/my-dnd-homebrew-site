import { type Component, For } from "solid-js";
import * as styles from "./CharacterList.css";
import CharacterCard from "$/features/chain-initiative-tracker/components/CharacterCard";
import type { ChainInitiativeTrackerCharacter } from "$/features/chain-initiative-tracker/types";

const CharacterList: Component<{
  characters: ChainInitiativeTrackerCharacter[];
}> = (props) => {
  return (
    <div class={styles.list}>
      <For each={props.characters}>
        {(character) => <CharacterCard characterId={character.id} />}
      </For>
    </div>
  );
};

export default CharacterList;
