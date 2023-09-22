import { fontFace } from "@vanilla-extract/css";

export const bookinsanity = fontFace([
  {
    src: 'url("/fonts/Bookinsanity/Bookinsanity.otf") format("opentype")',
    fontWeight: "normal",
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: 'url("/fonts/Bookinsanity/Bookinsanity Bold.otf") format("opentype")',
    fontWeight: "bold",
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: 'url("/fonts/Bookinsanity/Bookinsanity Italic.otf") format("opentype")',
    fontWeight: "normal",
    fontStyle: "italic",
    fontDisplay: "swap",
  },
  {
    src: 'url("/fonts/Bookinsanity/Bookinsanity Bold Italic.otf") format("opentype")',
    fontWeight: "bold",
    fontStyle: "italic",
    fontDisplay: "swap",
  },
]);

export const mrEaves = fontFace({
  src: "url('/fonts/Mr Eaves/Mr Eaves.otf') format('opentype')",
  fontWeight: "normal",
  fontStyle: "normal",
});

export const scalySans = fontFace([
  {
    src: "url('/fonts/Scaly Sans/Scaly Sans.otf') format('opentype')",
    fontWeight: "normal",
    fontStyle: "normal",
  },
  {
    src: "url('/fonts/Scaly Sans/Scaly Sans Bold.otf') format('opentype')",
    fontWeight: "bold",
    fontStyle: "normal",
  },
  {
    src: "url('/fonts/Scaly Sans/Scaly Sans Italic.otf') format('opentype')",
    fontWeight: "normal",
    fontStyle: "italic",
  },
  {
    src: "url('/fonts/Scaly Sans/Scaly Sans Bold Italic.otf') format('opentype')",
    fontWeight: "bold",
    fontStyle: "italic",
  },
]);
