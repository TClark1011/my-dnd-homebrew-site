import { THEME_LISTINGS } from "$/constants/themeListings";
import { themeAtom } from "$/stores";

themeAtom.listen((newTheme) => {
  if (!newTheme) {
    document.documentElement.setAttribute("data-no-theme", "");
    return;
  }
  THEME_LISTINGS.forEach((themeListing) => {
    if (themeListing.id === newTheme.id) {
      document.documentElement.classList.add(themeListing.class);
    } else {
      document.documentElement.classList.remove(themeListing.class);
    }
  });
  document.documentElement.removeAttribute("data-no-theme");
});
