import { style } from "@vanilla-extract/css";

export const topBar = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const header = style({
  marginBottom: "0 !important",
});

export const resetButton = style({
  border: "1px solid",
  padding: "4px 8px",
  height: "max-content",
  borderRadius: 4,
});
