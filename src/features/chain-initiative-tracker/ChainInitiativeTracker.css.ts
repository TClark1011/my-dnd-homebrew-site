import { mobileMediaQuery } from "$/styles/utils";
import { createVar, style } from "@vanilla-extract/css";

export const root = style({
  padding: 16,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.1)",
});

const listsContainerColumns = createVar();

export const turnListsContainer = style({
  vars: {
    [listsContainerColumns]: "2",
  },
  display: "grid",
  gridTemplateColumns: `repeat(${listsContainerColumns}, minmax(0, 1fr))`,
  gap: 16,
  marginBottom: 64,
  "@media": {
    [`(${mobileMediaQuery})`]: {
      vars: {
        [listsContainerColumns]: "1",
      },
    },
  },
});

export const completedTurns = style({
  width: "100%",
});
