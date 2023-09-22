import { themeVars } from "$/styles/themeVars.css";
import {
  unearthedArcanaDarkThemeValues,
  unearthedArcanaLightThemeValues,
} from "$/styles/themes.css";
import { globalStyle, assignVars } from "@vanilla-extract/css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontWeight: "normal",
  fontStyle: "normal",
  background: "none",
  border: "none",

  color: themeVars.colors.text,
  fontFamily:
    "Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif",
});

globalStyle("html", {
  backgroundColor: themeVars.colors.background,
});

globalStyle("html[data-no-theme]", {
  vars: assignVars(themeVars, unearthedArcanaLightThemeValues),
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignVars(themeVars, unearthedArcanaDarkThemeValues),
    },
  },
});

globalStyle(":where(ul, ol)", {
  paddingLeft: "1rem",
});

globalStyle(":where(a)", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle(":where(a):hover", {
  textDecoration: "underline",
});

globalStyle(":where(strong, bold), :where(strong, bold) *", {
  fontWeight: "bold",
});

globalStyle(":where(em, i), :where(em, i) *", {
  fontStyle: "italic",
});
