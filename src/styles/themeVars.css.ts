import { createThemeContract } from "@vanilla-extract/css";
import type { Schema } from "type-fest";

export const themeVars = createThemeContract({
  colors: {
    background: "",
    surface: "",
    text: "",
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
});

export type ThemeDefinition = Schema<typeof themeVars, string>;
