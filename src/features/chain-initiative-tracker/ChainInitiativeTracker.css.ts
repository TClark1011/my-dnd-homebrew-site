import { style } from "@vanilla-extract/css";

export const lists = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 16,
});

export const completedTurns = style({
  width: "100%",
});
