import { themeVars } from "$/styles/themeVars.css";
import { createVar, style } from "@vanilla-extract/css";

const transitionDuration = "0.3s";

const backdropOpacity = createVar("backdrop-opacity");

export const panelOverlay = style({
  vars: {
    [backdropOpacity]: "0",
  },
  position: "fixed",
  display: "flex",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",

  pointerEvents: "none",
  backgroundColor: `rgba(0, 0, 0, ${backdropOpacity})`,

  transition: `background-color ${transitionDuration} ease-in-out`,

  selectors: {
    [`.open&`]: {
      vars: {
        [backdropOpacity]: "0.6",
      },

      pointerEvents: "auto",
    },
  },
});

const panelBg = themeVars.colors.surface;

export const panel = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  maxWidth: "300px",
  height: "100%",

  transform: "translateX(-100%)",
  transition: `transform ${transitionDuration} ease-in-out`,

  backgroundColor: panelBg,

  selectors: {
    [`.open + &`]: {
      transform: "translateX(0)",
    },
  },
});

const buttonSize = "36px";

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "absolute",
  top: "120px",
  right: `-${buttonSize}`,
  zIndex: 100,

  height: buttonSize,
  width: buttonSize,
  padding: "4px",

  color: themeVars.colors.text,
  backgroundColor: panelBg,

  borderRadius: "0 4px 4px 0",

  "@media": {
    "only screen and (max-width: 800px)": {
      top: "64px",
    },
  },
});

