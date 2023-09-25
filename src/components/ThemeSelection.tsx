import { THEME_LISTINGS } from "$/constants/themeListings";
import { themeAtom } from "$/stores";
import { from, type Component, type JSX } from "solid-js";
import * as styles from "./ThemeSelection.css";

const ThemeSelection: Component = () => {
  const currentTheme = from(themeAtom);

  const onSelectChange: JSX.ChangeEventHandlerUnion<
    HTMLSelectElement,
    Event
  > = (e) => {
    const correspondingThemeListing = THEME_LISTINGS.find(
      (listing) => listing.id === e.currentTarget.value,
    );

    themeAtom.set(correspondingThemeListing);
  };

  return (
    <select id="theme-select" class={styles.select} onChange={onSelectChange}>
      <option selected={!currentTheme()} value="">
        Auto
      </option>
      {THEME_LISTINGS.map((theme) => (
        <option selected={currentTheme()?.id === theme.id} value={theme.id}>
          {theme.label}
        </option>
      ))}
    </select>
  );
};

export default ThemeSelection;
