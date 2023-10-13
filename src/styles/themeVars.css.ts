import {
  assignVars,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";
import type { StrictOmit } from "$/utilTypes";

const themeFields = {
  shadows: {
    base: "",
    sm: "",
    md: "",
    lg: "",
    xl: "",
    twoXl: "",
    inner: "",
    none: "",
  },
  colors: {
    background: "",
    surfaceAccent: "",
    surface: "",
    text: "",
    fadedText: "",
  },
  dnd: {
    colors: {
      blockBackground: "",
      headingText: "",
      tableRowBanding: "",
    },
    fonts: {
      body: "",
      headings: "",
      blocks: "",
      tables: "",
    },
    fontSizes: {
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      h5: "",
      h6: "",
    },
    spacing: {
      paragraphFirstLineIndent: "",
      paragraphLineHeight: "",
      paragraphGaps: "",
      blockPadding: "",
      headingsMarginBottom: "",
      spaceBetweenElements: "",
    },
  },
  radius: {
    sm: "",
  },
};

export const themeVars = createThemeContract(themeFields);

export type ThemeDefinition = typeof themeFields;

export type ThemeFieldsThatChange = StrictOmit<
  ThemeDefinition,
  "shadows" | "radius"
>;

const shadows: ThemeDefinition["shadows"] = {
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  twoXl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  none: "0 0 #0000;",
};

const radii: ThemeDefinition["radius"] = {
  sm: "4px",
};

// Shadows will not change between themes so we can just assign them here
export const createSiteTheme = (theme: ThemeFieldsThatChange, id: string) =>
  createTheme(
    themeVars,
    {
      shadows,
      radius: radii,
      ...theme,
    },
    id,
  );

export const assignSiteThemeVars = (theme: ThemeFieldsThatChange) =>
  assignVars(themeVars, {
    shadows,
    radius: radii,
    ...theme,
  });
