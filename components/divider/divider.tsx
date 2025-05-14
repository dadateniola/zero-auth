import React from "react";

// Types
import type { DividerColor, DividerProps } from "./types";

// Imports
import clsx from "clsx";
import { DIVIDER_COLORS } from "./data";

const Divider: React.FC<DividerProps> = ({
  color = "light",
  overlap,
  className,
  direction,
  thickness = 1,
}) => {
  const shouldOverlap = !!overlap;
  const width =
    direction === "vertical" ? (shouldOverlap ? 0 : thickness) : undefined;
  const height =
    direction === "horizontal" ? (shouldOverlap ? 0 : thickness) : undefined;
  const borderColor = DIVIDER_COLORS[color as DividerColor] || color;

  return (
    <div
      data-divider
      className={clsx(
        "flex",
        {
          "flex-col": direction === "vertical",
          "flex-row": direction === "horizontal",
        },
        className
      )}
      style={{ width, height, minWidth: width, minHeight: height }}
    >
      <div
        data-divider-line
        className={clsx("flex-1", {
          "border-r": direction === "vertical",
          "border-b": direction === "horizontal",
        })}
        style={{
          borderColor,
          borderRightWidth: direction === "vertical" ? thickness : undefined,
          borderBottomWidth: direction === "horizontal" ? thickness : undefined,
        }}
      ></div>
    </div>
  );
};

export default Divider;
