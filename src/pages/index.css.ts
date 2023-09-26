import { themeVars } from "$/styles/themeVars.css";
import { createVar, style } from "@vanilla-extract/css";
import { boxShadowBorder } from "$/styles/utils";

export const varCardMaxWidth = createVar();
export const varCardMinWidth = createVar();
export const varCardImageHeight = createVar();

const varCardLinkDecoration = createVar();

export const grid = style({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(min(${varCardMinWidth}, ${varCardMaxWidth}), 1fr))`,
  gap: 8,
  padding: 16,
});

export const card = style({
  borderRadius: 8,
  backgroundColor: themeVars.colors.surface,
  overflow: "hidden",
  position: "relative",
  boxShadow: themeVars.shadows.md,
  selectors: {
    "&:hover, &:focus-within": {
      vars: {
        [varCardLinkDecoration]: "underline",
      },
      ...boxShadowBorder("1px", themeVars.colors.text),
    },
  },
});

export const cardImageDimensions = style({
  width: "100%",
  height: varCardImageHeight,
});

export const varCardImagePositionY = createVar();

export const cardImage = style([
  cardImageDimensions,
  {
    objectFit: "cover",
    objectPosition: `50% ${varCardImagePositionY}`,
  },
]);

export const cardBody = style({
  padding: "1rem",
});

export const cardLink = style({
  fontWeight: "bold",
  display: "block",
  width: "100%",
  height: "3rem",
  textDecoration: varCardLinkDecoration,
  ":focus": {
    outline: "none",
  },
  "::before": {
    // We use the `before` pseudo element to expand the hit area
    // of the link to cover the whole card
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});
