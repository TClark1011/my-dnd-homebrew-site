import { themeVars } from "$/styles/themeVars.css";
import { style } from "@vanilla-extract/css";

export const card = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 8,
  border: `1px solid ${themeVars.colors.text}`,
  borderRadius: themeVars.radius.sm,
  padding: "0 8px",
  height: 48,
  width: "100%",
  overflow: "hidden",
});

export const left = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const sideIndicator = style({
  width: 8,
  height: 8,
  borderRadius: "100%",
  opacity: 0.6,
});

export const green = style({
  backgroundColor: "rgba(0, 255, 0)",
});

export const red = style({
  backgroundColor: "rgba(255, 0, 0)",
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
