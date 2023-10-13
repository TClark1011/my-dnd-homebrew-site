import { themeVars } from "$/styles/themeVars.css";
import { mobileMediaQuery } from "$/styles/utils";
import { createVar, style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

const fieldsGridColumns = createVar();

export const fields = style({
  vars: {
    [fieldsGridColumns]: "3",
  },
  display: "grid",
  gridTemplateColumns: `repeat(${fieldsGridColumns}, minmax(200px, 1fr))`,
  gap: 16,
  "@media": {
    [`(${mobileMediaQuery})`]: {
      vars: {
        [fieldsGridColumns]: "1",
      },
    },
  },
});

export const fieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

export const fieldLabel = style({
  marginBottom: 2,
});

const fieldInputPlaceholderStyles = {
  color: themeVars.colors.fadedText,
};

export const fieldInput = style({
  height: 28,
  display: "flex",
  alignItems: "center",
  paddingLeft: 4,
  paddingRight: 4,
  borderRadius: 4,
  fontSize: "1rem",
  border: `1px solid ${themeVars.colors.text}`,
  marginTop: 2,
  marginBottom: 2,
  "::placeholder": {
    ...fieldInputPlaceholderStyles,
    padding: 4,
  },
});

export const fieldSelectPlaceholder = style(fieldInputPlaceholderStyles);

export const fieldError = style({
  color: "red",
  fontSize: "0.75rem",
});

export const submitButton = style({
  borderRadius: themeVars.radius.sm,
  padding: "8px 16px",
  backgroundColor: themeVars.colors.surface,
  ":active": {
    backgroundColor: themeVars.colors.surfaceAccent,
  },
});
