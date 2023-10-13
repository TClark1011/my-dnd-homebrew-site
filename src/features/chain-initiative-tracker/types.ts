import { z } from "zod";

export const chainInitiativeSideSchema = z.enum(["good", "bad"], {
  errorMap: (error) => ({
    message: error.code === "invalid_enum_value" ? "Select Side" : "",
  }),
});

export type ChainInitiativeTrackerSide = z.infer<
  typeof chainInitiativeSideSchema
>;

export type ChainInitiativeTrackerCharacter = {
  id: string;
  name: string;
  health: number;
  maxHealth: number;
  side: ChainInitiativeTrackerSide;
};
