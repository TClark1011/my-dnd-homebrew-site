import {
  type ThemeDefinition,
  createSiteTheme,
  type ThemeFieldsThatChange,
} from "$/styles/themeVars.css";
import type { PartialDeep } from "type-fest";
import * as fonts from "$/styles/fonts.css";

const unearthedArcanaDndThemeBase = {
  fonts: {
    body: fonts.bookinsanity,
    headings: fonts.mrEaves,
    blocks: fonts.scalySans,
    tables: fonts.scalySans,
  },
  fontSizes: {
    h1: "30pt",
    h2: "22pt",
    h3: "18pt",
    h4: "15pt",
    h5: "12pt",
    h6: "1rem",
  },
  spacing: {
    paragraphFirstLineIndent: "1rem",
    paragraphLineHeight: "1.25rem",
    paragraphGaps: "0.65rem",
    blockPadding: "2px",
    headingsMarginBottom: "0.2em",
    spaceBetweenElements: "1rem",
  },
} satisfies PartialDeep<ThemeDefinition["dnd"]>;

export const unearthedArcanaLightThemeValues = {
  colors: {
    background: "white",
    surface: "#B3B3B3",
    surfaceAccent: "#F9F9F9",
    text: "black",
  },
  dnd: {
    ...unearthedArcanaDndThemeBase,
    colors: {
      blockBackground: "#d9d9d9",
      headingText: "black",
      tableRowBanding: "#f2f2f2",
    },
  },
} satisfies ThemeFieldsThatChange;

export const unearthedArcanaLightTheme = createSiteTheme(
  unearthedArcanaLightThemeValues,
  "ua-light",
);

export const unearthedArcanaDarkThemeValues = {
  colors: {
    background: "#313339",
    surface: "#202124",
    surfaceAccent: "#2F3035",
    text: "#d3d5d8",
  },
  dnd: {
    ...unearthedArcanaDndThemeBase,
    colors: {
      blockBackground: "#202124",
      headingText: "#d3d5d8",
      tableRowBanding: "#27292e",
    },
  },
} satisfies ThemeFieldsThatChange;

export const unearthedArcanaDarkTheme = createSiteTheme(
  unearthedArcanaDarkThemeValues,
  "ua-dark",
);

// const stockBodyFont =
//   "Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif";
const fiveEToolsDndBase = {
  fonts: {
    body: "",
    headings: fonts.mrEaves,
    blocks: "",
    tables: "",
  },
  fontSizes: unearthedArcanaDndThemeBase.fontSizes,
  spacing: {
    headingsMarginBottom: "0.6em",
    spaceBetweenElements: "1rem",
    paragraphFirstLineIndent: "0",
    blockPadding: "0.6rem",
    paragraphGaps: "0.65rem",
    paragraphLineHeight: "1.7",
  },
};

export const fiveEToolsLightTheme = createSiteTheme(
  {
    colors: {
      background: "white",
      surface: "#e6e6e6",
      surfaceAccent: "#C5C5C5",
      text: "#333",
    },
    dnd: {
      ...fiveEToolsDndBase,
      colors: {
        blockBackground: "#eef0f3",
        headingText: "#822000",
        tableRowBanding: "#cbbfaa80",
      },
    },
  },
  "5e-tools-light",
);

export const fiveEToolsDarkTheme = createSiteTheme(
  {
    colors: {
      background: "#222222",
      text: "#bbb",
      surface: "#333333",
      surfaceAccent: "#444444",
    },
    dnd: {
      ...fiveEToolsDndBase,
      colors: {
        blockBackground: "#29303a",
        headingText: "#d29a38",
        tableRowBanding: "#383838",
      },
    },
  },
  "5e-tools-dark",
);
