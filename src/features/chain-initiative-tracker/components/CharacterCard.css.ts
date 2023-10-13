import { themeVars } from "$/styles/themeVars.css";
import { style } from "@vanilla-extract/css";

export const card = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  border: `1px solid ${themeVars.colors.text}`,
  borderRadius: themeVars.radius.sm,
  paddingLeft: 0,
  paddingRight: 8,
  height: 48,
  width: "100%",
  overflow: "hidden",
});

export const sideTab = style({
  width: 16,
  height: "100%",
});

export const green = style({
  backgroundColor: "rgba(0, 255, 0, 0.5)",
});

export const red = style({
  backgroundColor: "rgba(255, 0, 0, 0.5)",
});

export const content = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const characterLabel = style({
  display: "flex",
  gap: 4,
});

export const actions = style({
  display: "flex",
  gap: 16,
});

export const healthInput = style({
  borderBottom: "1px solid",
  width: 48,
});

export const actionButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const instanceCount = style({
  color: themeVars.colors.text,
  opacity: 0.6,
});
