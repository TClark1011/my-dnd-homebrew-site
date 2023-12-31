import { assignSiteThemeVars, themeVars } from "$/styles/themeVars.css";
import {
  unearthedArcanaDarkThemeValues,
  unearthedArcanaLightThemeValues,
} from "$/styles/themes.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  fontFamily:
    "Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif",
});

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontWeight: "normal",
  fontStyle: "normal",
  background: "none",
  border: "none",
  color: themeVars.colors.text,

  "@media": {
    print: {
      vars: {
        [themeVars.colors.text]: "black",
        [themeVars.colors.background]: "white !important",
        [themeVars.colors.surface]: "#E5E5E5",
      },
    },
  },
});

globalStyle("html", {
  backgroundColor: themeVars.colors.background,
});

globalStyle("html[data-no-theme]", {
  vars: assignSiteThemeVars(unearthedArcanaLightThemeValues),
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignSiteThemeVars(unearthedArcanaDarkThemeValues),
    },
  },
});

globalStyle(":where(button, a)", {
  cursor: "pointer",
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
