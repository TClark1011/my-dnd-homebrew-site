import { container } from "$/styles/utilityStyles.css";
import { createVar, globalStyle, style } from "@vanilla-extract/css";

export const slideOutPanel = style({
  padding: "16px",
});

export const tableOfContents = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const tocHeadingsCounter = "headings";
const tocNumberOffset = "8px";

const headingOffset = createVar("heading-offset");

export const tableOfContentsListItem = style({
  vars: {
    [headingOffset]: "0px",
  },
  display: "flex",
  marginLeft: `
		calc(
			calc(
				calc(
					var(--depth) - 1
				) * 8px
			) + ${headingOffset}
		)`,

  selectors: {
    ['[data-depth="1"]&']: {
      counterIncrement: tocHeadingsCounter,
      fontWeight: "bold",
      marginRight: tocNumberOffset,
    },
  },
});

globalStyle(`${tableOfContentsListItem} *`, {
  fontStyle: "italic",
});

globalStyle(`${tableOfContentsListItem}[data-depth="1"] *`, {
  fontStyle: "normal",
});
globalStyle(`${tableOfContentsListItem}[data-depth="1"]::before`, {
  content: `counter(${tocHeadingsCounter}) ". "`,
  marginRight: tocNumberOffset,
  fontWeight: "bold",
});

globalStyle(`${tableOfContentsListItem}:not([data-depth="1"])`, {
  vars: {
    [headingOffset]: `calc(${tocNumberOffset} + 1rem)`,
  },
});

export const varBannerYPosition = createVar("banner-y-position");

const tornPaperMask = `url("https://i.imgur.com/zWuWN8O.png")`;
const bigWhiteSquareMask = `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDRUPDw8VFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ0NFSsZFR0rKy0tKysrKystKy0tLSsrNy03KystLSsrKy0tKzctKy0tKy0rLS0rKy0rLS0rKysrK//AABEIAMQBAQMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAJRABAAIBAgUEAwAAAAAAAAAAAAHwETGhIUGRsdECUWHhcYHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAwDAQACEQMRAD8A7gAgl/KiACgCXVUugHRS8kuoF4gAAAF9wFLoX3LqAACAKAhdVBLqqXQAvAFAAAAAx8icAFAAAAAAABFAAABFARQAvJFAS2FAAABLot0AAAAAAAAAMgKACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7AAAAAAAABQAAAAAARQAAAAAAAAAAAAABAAAAAAUAAAAAAEUAQBUAAAAABRAUQBQAAAAAABAAAMgAAAAoAAACCoCoACoAAIAAACgAACgAAAAAAAAACAAAAoAAAAACKIAoAgqIAqAqKiioogigoAAAAAAACGQwFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQFRAEAAAAAAAAUAAAAAlAAAAUAAAAAAABAAAADAAAAAAAAoAAAAAACIKJkBRDIKIAoCgAAAAAIAAAAomFBBAFEBQAAEBRAFBAATKCiEAsjOVBRMqCiKoCAKIoCoAogIogCDWYBUAAELdgVC28gAJJkAygC5EMgAZBJORMHqQCJI1MAoQYUFymQFEAUIIvUALehbsCiW3mtt5AAAvEZ4e4It2S7AKs634QAL3L2QEX7RAVS9vIACALKABBOoAHqACVQBZEAWDwAI15QBYu5F2AQi7F2+wFW/wu+ABrACo/9k=")`;

export const bannerImage = style({
  WebkitMask: `${tornPaperMask}, ${bigWhiteSquareMask}`,
  WebkitMaskRepeat: "no-repeat, no-repeat",
  WebkitMaskSize: "max(100%, 1200px) 800px, 100vw 100vh;",
  WebkitMaskPosition: "0px 220px, 0px -70vh",
  width: "100%",
  height: 400,
  objectFit: "cover",
  objectPosition: `50% ${varBannerYPosition}`,
});

export const wrapper = style({
  display: "flex",
  justifyContent: "center",
});

export const content = style([
  container,
  {
    padding: "1rem",
    paddingTop: "3rem",
  },
]);

globalStyle(".scroll-h", {
  maxWidth: "100%",
  overflowX: "auto",
});
