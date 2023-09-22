import { persistentAtom } from "@nanostores/persistent";

export const themeAtom = persistentAtom<
  | {
      id: string;
      class: string;
    }
  | undefined
>("theme", undefined, {
  encode: JSON.stringify,
  decode: JSON.parse,
});
