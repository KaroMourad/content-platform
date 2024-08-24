import { useState, useCallback, useEffect } from "react";
import { Position, GridItem } from "../Grid/types";
import debounce from "../../../utils/debounce";

const useCalculatePositions = (
  containerRef: React.RefObject<HTMLDivElement>,
  gridRef: React.RefObject<HTMLDivElement>,
  items: GridItem[],
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

  const debouncedCalculatePositions = useCallback(
    debounce(calculatePositions, 20),
    [calculatePositions]
  );

  useEffect(() => {
    debouncedCalculatePositions();
    window.addEventListener("resize", debouncedCalculatePositions);

    return () => {
      window.removeEventListener("resize", debouncedCalculatePositions);
    };
  }, [debouncedCalculatePositions]);

  return positions;
};

export default useCalculatePositions;
