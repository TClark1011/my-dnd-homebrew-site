import { themeVars } from "$/styles/themeVars.css";
import { style } from "@vanilla-extract/css";

export const greenCard = style({
  backgroundColor: "rgba(0, 255, 0, 0.1)",
});

export const redCard = style({
  backgroundColor: "rgba(255, 0, 0, 0.1)",
});

export const wrapper = style({
  display: "flex",
  justifyContent: "space-between",
  border: `1px solid ${themeVars.colors.text}`,
  borderRadius: themeVars.radius.sm,
  padding: 8,
  width: "100%",
});

export const characterLabel = style({
  display: "flex",
  gap: 4,
});

export const actions = style({
  display: "flex",
  gap: 4,
});

export const instanceCount = style({
  color: themeVars.colors.text,
  opacity: 0.6,
});
