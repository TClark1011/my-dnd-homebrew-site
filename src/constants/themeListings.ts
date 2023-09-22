import * as themes from "$/styles/themes.css";

export type ThemeListing = {
  id: string;
  label: string;
  class: string;
};

// export const THEMES: ThemeListing[] = [
//   {
//     id: "ua-light",
//     label: "Unearthed Arcana (Light)",
//   },
//   {
//     id: "ua-dark",
//     label: "Unearthed Arcana (Dark)",
//   },
//   {
//     id: "5e-tools-light",
//     label: "5eTools (Light)",
//   },
//   {
//     id: "5e-tools-dark",
//     label: "5eTools (Dark)",
//   },
// ];
export const THEME_LISTINGS: ThemeListing[] = [
  {
    id: "ua-light",
    label: "Unearthed Arcana",
    class: themes.unearthedArcanaLightTheme,
  },
  {
    id: "ua-dark",
    label: "Unearthed Arcana (Dark)",
    class: themes.unearthedArcanaDarkTheme,
  },
  {
    id: "5e-tools-dark",
    label: "5eTools",
    class: themes.fiveEToolsDarkTheme,
  },
  {
    id: "5e-tools-light",
    label: "5eTools (Light)",
    class: themes.fiveEToolsLightTheme,
  },
];
