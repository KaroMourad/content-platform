import { useState, useCallback, useEffect } from "react";
import { throttle } from "lodash-es";
import { GridItemType, Position } from "../GridItem/GridItem.types";

const useCalculatePositions = (
  containerRef: React.RefObject<HTMLDivElement>,
  gridRef: React.RefObject<HTMLDivElement>,
  items: GridItemType[],
  columnWidth: number,
  columnCount: number,
  gap: number
) => {
  const [positions, setPositions] = useState<Record<string, Position>>({});

  const calculatePositions = useCallback(() => {
    if (!containerRef.current || !gridRef.current || !columnWidth) return;
    const columnHeights = new Array(columnCount).fill(0);
    const newPositions: Record<string, Position> = {};

    for (let item of items) {
      const aspectRatio = item.originalWidth / item.originalHeight;
      const height = Number((columnWidth / aspectRatio).toFixed(2));
      const minColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      const x = Number((minColumnIndex * (columnWidth + gap)).toFixed(2));
      const y = Number(columnHeights[minColumnIndex].toFixed(2));
      columnHeights[minColumnIndex] += height + gap;

      newPositions[item.key] = {
        x,
        y,
        width: columnWidth,
        height: height,
      };
    }

    setPositions(newPositions);
    gridRef.current.style.height = `${Math.max(...columnHeights)}px`;
  }, [items, columnWidth, gap, containerRef, gridRef]);

  useEffect(() => {
    const throttledCalPositions = throttle(calculatePositions, 30);

    throttledCalPositions();
    window.addEventListener("resize", throttledCalPositions);

    return () => {
      window.removeEventListener("resize", throttledCalPositions);
    };
  }, [calculatePositions]);

  return positions;
};

export default useCalculatePositions;
