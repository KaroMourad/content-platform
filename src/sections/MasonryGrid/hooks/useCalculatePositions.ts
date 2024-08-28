import { useState, useCallback, useEffect } from "react";
import { GridItemType, Position } from "../GridItem/GridItem.types";
import { computeGridPositions, useWindowResize } from "../../../utils";

/**
 * Custom hook to calculate the positions of grid items in a masonry grid layout.
 * @param containerRef - Reference to the container element.
 * @param gridRef - Reference to the grid element.
 * @param items - Array of grid items.
 * @param columnWidth - The width of each column.
 * @param columnCount - The number of columns.
 * @param gap - The gap between columns.
 * @param delay - Throttle delay in milliseconds.
 */
const useCalculatePositions = (
  containerRef: React.RefObject<HTMLDivElement>,
  gridRef: React.RefObject<HTMLDivElement>,
  items: GridItemType[],
  columnWidth: number,
  columnCount: number,
  gap: number,
  delay: number = 50
) => {
  const [positions, setPositions] = useState<Record<string, Position>>({});

  const updatePositions = useCallback(() => {
    if (!containerRef.current || !gridRef.current || !columnWidth) return;
    const { positions: newPositions, maxHeight } = computeGridPositions(
      items,
      columnWidth,
      columnCount,
      gap
    );

    setPositions(newPositions);
    gridRef.current.style.height = `${maxHeight}px`;
  }, [items, columnWidth, columnCount, gap, containerRef, gridRef]);

  useEffect(() => {
    updatePositions();
  }, [updatePositions]);

  useWindowResize(updatePositions, delay);

  return positions;
};

export default useCalculatePositions;
