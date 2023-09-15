export const elementIsTooWideForScreen = (
  element: Element,
  padding = 0,
): boolean => {
  // Get element's bounding
  const bounding = element.getBoundingClientRect();

  return bounding.width + padding * 2 > window.innerWidth;
};
