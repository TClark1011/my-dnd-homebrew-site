export type ChainInitiativeTrackerSide = "good" | "bad";

export type ChainInitiativeTrackerCharacter = {
  id: string;
  name: string;
  health: number;
  maxHealth: number;
  side: ChainInitiativeTrackerSide;
};
