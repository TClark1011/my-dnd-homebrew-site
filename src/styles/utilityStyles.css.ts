import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  maxWidth: 800,
  paddingLeft: 16,
  paddingRight: 16,
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
