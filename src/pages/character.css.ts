import { bookinsanity } from "$/styles/fonts.css";
import { themeVars } from "$/styles/themeVars.css";
import { container, hideOnPrint } from "$/styles/utilityStyles.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const content = style([
  container,
  {
    maxWidth: "21cm",
    "@media": {
      print: {
        vars: {
          [themeVars.colors.text]: "black",
        },
        maxWidth: "100%",
      },
    },
  },
]);

globalStyle(`.${content} *`, {
  fontFamily: bookinsanity,
});

export const pageTitle = style([
  {
    marginTop: 8,
    marginBottom: 8,
  },
  hideOnPrint,
]);

export const description = style([
  {
    marginBottom: 48,
  },
  hideOnPrint,
]);

export const questionWrapper = style({
  marginBottom: 32,
  pageBreakInside: "avoid",
});

export const questionHeading = style({
  paddingBottom: 8,
  borderBottom: "1px solid currentcolor",
  marginBottom: 16,
});

export const questionBoxStack = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  width: "100%",
});

export const questionInput = style({
  width: "100%",
  resize: "none",
  background: themeVars.colors.surface,
  padding: 8,
  fontSize: "1rem",
});
