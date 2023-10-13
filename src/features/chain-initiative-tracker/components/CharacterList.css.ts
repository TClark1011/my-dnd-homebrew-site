import { themeVars } from "$/styles/themeVars.css";
import { style } from "@vanilla-extract/css";

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginTop: 8,
});

export const empty = style({
  color: themeVars.colors.fadedText,
  textAlign: "center",
  width: "100%",
});
