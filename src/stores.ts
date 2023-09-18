import { persistentAtom } from "@nanostores/persistent";

export const themeAtom = persistentAtom<string | undefined>(
  "theme",
  undefined,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);
