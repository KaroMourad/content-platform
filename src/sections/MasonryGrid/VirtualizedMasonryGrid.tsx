import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { isEqual } from "lodash-es";

import { GridContainer } from "./GridContainer";
import { Grid, GridItem } from "./Grid";
import { useColumnSettings, useCalculatePositions } from "./hooks";
import { VirtualizedMasonryGridProps } from "./types";
import { BREAKPOINTS, BUFFER, GAP } from "./configs";
import { GridItemType } from "./Grid/types";
import { computeScrollMetrics, useHandleScroll } from "../../utils";

const VirtualizedMasonryGrid: React.FC<VirtualizedMasonryGridProps> = ({
  items,
  gap = GAP,
  buffer = BUFFER,
  breakpoints = BREAKPOINTS,
  gridItemClass,
  infiniteScrollProps,
}) => {
  const containerElRef = useRef<HTMLDivElement | null>(null);
  const gridElRef = useRef<HTMLDivElement | null>(null);

  const [visibleItems, setVisibleItems] = useState<GridItemType[]>([]);

  // Use custom hook for column settings
  const { columnWidth, columnCount } = useColumnSettings(
    containerElRef,
    gap,
    breakpoints
  );

  // Use custom hook for item positions
  const positions = useCalculatePositions(
    containerElRef,
    gridElRef,
    items,
    columnWidth,
    columnCount,
    gap
  );

  const getVisibleItems = useCallback(() => {
    const { scrollTop, clientHeight, bufferHeight } = computeScrollMetrics(
      containerElRef,
      buffer
    );
    const viewportBottomWithBuffer = scrollTop + clientHeight + bufferHeight;

    return items.filter((item) => {
      const pos = positions[item.key];
      return (
        pos &&
        pos.y + pos.height > scrollTop - bufferHeight &&
        pos.y < viewportBottomWithBuffer
      );
    });
  }, [containerElRef, items, positions, buffer]);

  const fetchMoreItems = useCallback(() => {
    if (!infiniteScrollProps) return;

    const { scrollTop, clientHeight, bufferHeight, scrollHeight } =
      computeScrollMetrics(containerElRef, 0);
    const viewportBottomWithBuffer = scrollTop + clientHeight + bufferHeight;
    const isCloseToBottom =
      scrollHeight - scrollTop <= viewportBottomWithBuffer;

    if (
      infiniteScrollProps.hasMore &&
      !infiniteScrollProps.isFetching &&
      isCloseToBottom && 
      typeof infiniteScrollProps.next === "function"
    ) {
      infiniteScrollProps.next();
    }
  }, [infiniteScrollProps, buffer]);

  const updateVisibleItems = useCallback(() => {
    const items = getVisibleItems();
    setVisibleItems((prev) => (isEqual(items, prev) ? prev : items));
    fetchMoreItems();
  }, [getVisibleItems, fetchMoreItems]);

  const handleScroll = useCallback(() => {
    updateVisibleItems();
  }, [updateVisibleItems]);

  useEffect(() => {
    // Initial call to populate visible items
    updateVisibleItems();
  }, [updateVisibleItems]);

  useHandleScroll(containerElRef, handleScroll);

  return (
    <GridContainer containerRef={containerElRef}>
      <Grid gridRef={gridElRef}>
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

export default memo(VirtualizedMasonryGrid);
