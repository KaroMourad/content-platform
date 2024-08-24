import React, { useRef } from "react";
import { GridContainer } from "./GridContainer";
import { Grid, GridItem } from "./Grid";
import {
  useColumnSettings,
  useHandleScroll,
  useCalculatePositions,
} from "./hooks";
import { VirtualizedMasonryGridProps } from "./types";
import { BREAKPOINTS, BUFFER, GAP } from "./configs";

const VirtualizedMasonryGrid: React.FC<VirtualizedMasonryGridProps> = ({
  items,
  gap = GAP,
  buffer = BUFFER,
  breakpoints = BREAKPOINTS,
  gridItemClass,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // Use custom hook for column settings
  const { columnWidth, columnCount } = useColumnSettings(
    containerRef,
    gap,
    breakpoints
  );

  // Use custom hook for item positions
  const positions = useCalculatePositions(
    containerRef,
    gridRef,
    items,
    columnWidth,
    columnCount,
    gap
  );

  // Use custom hook for handling scroll and determining visible items
  const visibleItems = useHandleScroll(containerRef, positions, items, buffer);

  return (
    <GridContainer containerRef={containerRef}>
      <Grid gridRef={gridRef}>
        {visibleItems.map((item) => {
          const pos = positions[item.key];
          return (
            <GridItem
              key={item.key}
              item={item}
              position={pos}
              className={gridItemClass}
            />
          );
        })}
      </Grid>
    </GridContainer>
  );
};

export default VirtualizedMasonryGrid;
