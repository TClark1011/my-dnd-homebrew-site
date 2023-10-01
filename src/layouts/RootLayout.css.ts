import { themeVars } from "$/styles/themeVars.css";
import { style } from "@vanilla-extract/css";

export const body = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const topBar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  height: "56px",
  width: "100%",
  padding: "1rem",
  backgroundColor: themeVars.colors.surface,

  "@media": {
    print: {
      display: "none",
    },
  },
});

export const content = style({
  width: "100%",
  flexGrow: 1,
});
