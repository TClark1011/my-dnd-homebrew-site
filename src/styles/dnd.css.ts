import { themeVars } from "$/styles/themeVars.css";
import {
  globalStyle,
  style,
  type ComplexStyleRule,
} from "@vanilla-extract/css";

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

export const dndHeaderStyles: ComplexStyleRule = {
  fontFamily: themeVars.dnd.fonts.headings,
  marginBottom: themeVars.dnd.spacing.headingsMarginBottom,
  color: themeVars.dnd.colors.headingText,
};

export const dndHeader = style(dndHeaderStyles);

globalStyle(`${dndContainer} :is(h1,h2,h3,h4,h5,h6)`, dndHeaderStyles);

globalStyle(`${dndContainer} hr`, {
  borderBottom: `1px solid ${themeVars.colors.text}`,
  margin: "16px 0",
});

const dndH1Styles: ComplexStyleRule = {
  fontSize: themeVars.dnd.fontSizes.h1,
};

export const dndH1 = style([dndHeader, dndH1Styles]);

globalStyle(`${dndContainer} h1`, dndH1Styles);

const dndH2Styles: ComplexStyleRule = {
  fontSize: themeVars.dnd.fontSizes.h2,
};

export const dndH2 = style([dndHeader, dndH2Styles]);

globalStyle(`${dndContainer} h2`, dndH2Styles);

const dndH3Styles: ComplexStyleRule = {
  fontSize: themeVars.dnd.fontSizes.h3,
};

export const dndH3 = style([dndHeader, dndH3Styles]);

globalStyle(`${dndContainer} h3`, dndH3Styles);

const dndH4Styles: ComplexStyleRule = {
  fontSize: themeVars.dnd.fontSizes.h4,
};

export const dndH4 = style([dndHeader, dndH4Styles]);

globalStyle(`${dndContainer} h4`, dndH4Styles);

const dndH5Styles: ComplexStyleRule = {
  fontSize: themeVars.dnd.fontSizes.h5,
};

export const dndH5 = style([dndHeader, dndH5Styles]);

globalStyle(`${dndContainer} h5`, dndH5Styles);

const dndH6Styles: ComplexStyleRule = {
  fontSize: themeVars.dnd.fontSizes.h6,
};

export const dndH6 = style([dndHeader, dndH6Styles]);

globalStyle(`${dndContainer} h6`, dndH6Styles);

globalStyle(`${dndContainer} table`, {
  width: "100%",
  borderCollapse: "collapse",
});

globalStyle(`${dndContainer} table *`, {
  fontFamily: themeVars.dnd.fonts.tables,
});

globalStyle(`${dndContainer} table :is(td,th)`, {
  padding: "0.2rem 0.6rem",
});

globalStyle(`${dndContainer} table tbody tr:nth-child(odd)`, {
  backgroundColor: themeVars.dnd.colors.tableRowBanding,
});

globalStyle(`${dndContainer} a`, {
  fontWeight: "bold",
  textDecoration: "underline",
  fontStyle: "italic",
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

// Hide hidden content
globalStyle(`${dndContainer} h1#hidden, h1#hidden ~ *`, {
  display: "none",
});
