import { useState, useCallback, useEffect } from "react";
import { throttle } from "lodash-es";

import { Position, GridItemType } from "../Grid/types";

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
    if (!containerRef.current || !gridRef.current) return;
    const columnHeights = new Array(columnCount).fill(0);
    const newPositions: Record<string, Position> = {};

    for (let item of items) {
      const height = columnWidth / item.aspectRatio;
      const minColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      const x = minColumnIndex * (columnWidth + gap);
      const y = columnHeights[minColumnIndex];
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
