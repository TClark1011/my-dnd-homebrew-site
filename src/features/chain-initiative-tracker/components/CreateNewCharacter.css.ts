import { themeVars } from "$/styles/themeVars.css";
import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const fieldWrapper = style({
  display: "flex",
  flexDirection: "column",
});

export const fieldLabel = style({
  marginBottom: 2,
});

export const fieldInput = style({
  padding: 4,
  borderRadius: 4,
  fontSize: "1rem",
  border: `1px solid ${themeVars.colors.text}`,
});

export const submitButton = style({
  borderRadius: themeVars.radius.sm,
  padding: "8px 16px",
  backgroundColor: themeVars.colors.surface,
  ":active": {
    backgroundColor: themeVars.colors.surfaceAccent,
  },
});
