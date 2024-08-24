import { useState, useEffect, useCallback, RefObject } from "react";
import { Position, GridItem } from "../Grid/types";

const useHandleScroll = (
  containerRef: RefObject<HTMLDivElement>,
  positions: Record<string, Position>,
  items: GridItem[],
  buffer: number
) => {
  const [visibleItems, setVisibleItems] = useState<GridItem[]>([]);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const viewportHeight = containerRef.current.clientHeight;

    // Calculate bufferHeight as a percentage of the viewport height
    const bufferHeight = (buffer / 100) * viewportHeight;

    const newVisibleItems: GridItem[] = [];

    items.forEach((item) => {
      const pos = positions[item.key];
      if (
        pos &&
        pos.y + pos.height > scrollTop - bufferHeight &&
        pos.y < scrollTop + viewportHeight + bufferHeight
      ) {
        newVisibleItems.push(item);
      }
    });

    setVisibleItems(newVisibleItems);
  }, [containerRef, positions, items, buffer]);

  useEffect(() => {
    if (Object.keys(positions).length && containerRef.current) {
      handleScroll();

      const container = containerRef.current;
      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [positions, handleScroll, containerRef]);

  return visibleItems;
};

export default useHandleScroll;
