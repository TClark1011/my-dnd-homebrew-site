import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  maxWidth: 800,
  marginLeft: "auto",
  marginRight: "auto",
});

export const hideOnPrint = style({
  "@media": {
    print: {
      display: "none",
    },
  },
});
