// Imports
import { DIVIDER_COLORS } from "./data";

export type DividerColor = keyof typeof DIVIDER_COLORS;

export interface DividerProps {
  color?: DividerColor | ({} & string);
  overlap?: boolean;
  thickness?: number;
  className?: string;
  direction: "horizontal" | "vertical";
}
