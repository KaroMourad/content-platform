import { useState, useEffect, useCallback } from "react";
import { throttle } from "lodash-es";

import { GridBreakpoint } from "../VirtualizedMasonryGrid.types";

const useColumnSettings = (
  containerRef: React.RefObject<HTMLDivElement>,
  gap: number,
  breakpoints: GridBreakpoint[],
  delay: number = 50
) => {
  const [columnWidth, setColumnWidth] = useState<number>(0);
  const [columnCount, setColumnCount] = useState<number>(0);

  const calculateColumns = useCallback(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const breakpoint =
      breakpoints.find((bp) => containerWidth >= bp.width) ||
      breakpoints[breakpoints.length - 1];

    const newColumnCount = breakpoint.columns;
    const newColumnWidth =
      (containerWidth - (newColumnCount - 1) * gap) / newColumnCount;

    setColumnCount(newColumnCount);
    setColumnWidth(newColumnWidth);
  }, [gap, breakpoints, containerRef]);

  useEffect(() => {
    calculateColumns();
    const throttledCalculateColumns = throttle(calculateColumns, delay);

    window.addEventListener("resize", throttledCalculateColumns);

    return () => {
      window.removeEventListener("resize", throttledCalculateColumns);
    };
  }, [calculateColumns, delay]);

  return { columnWidth, columnCount };
};

export default useColumnSettings;
