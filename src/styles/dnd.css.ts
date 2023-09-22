import { themeVars } from "$/styles/themeVars.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const dndContainer = style({});

globalStyle(`${dndContainer} *`, {
  fontFamily: themeVars.dnd.fonts.body,
});

globalStyle(`${dndContainer} :is(p,blockquote,ul,ol,dl,table)`, {
  marginBottom: themeVars.dnd.spacing.paragraphGaps,
});

// Make sure special elements that contain a single p tag to
// not get disfigured by the margin bottom on the p tag
globalStyle(`${dndContainer} :is(p,blockquote,ul,ol,dl,table) > p:only-child`, {
  marginBottom: 0,
});

globalStyle(`${dndContainer} :is(p,blockquote,li)`, {
  lineHeight: themeVars.dnd.spacing.paragraphLineHeight,
});

globalStyle(`${dndContainer} :is(h1,h2,h3,h4,h5,h6)`, {
  fontFamily: themeVars.dnd.fonts.headings,
  marginBottom: themeVars.dnd.spacing.headingsMarginBottom,
  color: themeVars.dnd.colors.headingText,
});

globalStyle(`${dndContainer} h1`, {
  fontSize: themeVars.dnd.fontSizes.h1,
});

globalStyle(`${dndContainer} h2`, {
  fontSize: themeVars.dnd.fontSizes.h2,
});

globalStyle(`${dndContainer} h3`, {
  fontSize: themeVars.dnd.fontSizes.h3,
});

globalStyle(`${dndContainer} h4`, {
  fontSize: themeVars.dnd.fontSizes.h4,
});

globalStyle(`${dndContainer} h5`, {
  fontSize: themeVars.dnd.fontSizes.h5,
});

globalStyle(`${dndContainer} h6`, {
  fontSize: themeVars.dnd.fontSizes.h6,
});

globalStyle(`${dndContainer} table`, {
  width: "100%",
  borderCollapse: "collapse",
});

globalStyle(`${dndContainer} table *`, {
  fontFamily: themeVars.dnd.fonts.tables,
});

globalStyle(`${dndContainer} table :is(td,th)`, {
  padding: "0.2rem",
});

globalStyle(`${dndContainer} table tbody tr:nth-child(odd)`, {
  backgroundColor: themeVars.dnd.colors.tableRowBanding,
});

globalStyle(`${dndContainer} blockquote`, {
  backgroundColor: themeVars.dnd.colors.blockBackground,
  padding: themeVars.dnd.spacing.blockPadding,
});

globalStyle(`${dndContainer} blockquote *`, {
  fontFamily: themeVars.dnd.fonts.blocks,
});

globalStyle(`${dndContainer} p + p`, {
  textIndent: themeVars.dnd.spacing.paragraphFirstLineIndent,
});

// If a paragraph would not normally have its first line indented, but
// it starts with bold text, we indent it anyway
globalStyle(`${dndContainer} *:not(p) + p > strong:first-child`, {
  marginLeft: themeVars.dnd.spacing.paragraphFirstLineIndent,
});

// Make sure links within the credits section stand out
globalStyle(`${dndContainer} #credits ~ * a`, {
  fontWeight: "bold",
  textDecoration: "underline",
  fontStyle: "italic",
});

// Hide hidden content
globalStyle(`${dndContainer} h1#hidden, h1#hidden ~ *`, {
  display: "none",
});
