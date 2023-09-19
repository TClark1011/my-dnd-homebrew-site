import { themeAtom } from "$/stores";

themeAtom.listen((theme) => {
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
});
