import {
  GridItemType,
  Position,
} from "../sections/MasonryGrid/GridItem/GridItem.types";

/**
 * Computes the positions of grid items in a masonry grid layout.
 * @param items - Array of grid items.
 * @param columnWidth - The width of each column.
 * @param columnCount - The number of columns.
 * @param gap - The gap between columns.
 */
const computeGridPositions = (
  items: GridItemType[],
  columnWidth: number,
  columnCount: number,
  gap: number
): { positions: Record<string, Position>; maxHeight: number } => {
  const columnHeights = new Array(columnCount).fill(0);
  const positions: Record<string, Position> = {};

  for (const item of items) {
    const aspectRatio = item.originalWidth / item.originalHeight;
    const height = Number((columnWidth / aspectRatio).toFixed(2));
    const minColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
    const x = Number((minColumnIndex * (columnWidth + gap)).toFixed(2));
    const y = Number(columnHeights[minColumnIndex].toFixed(2));

    positions[item.key] = {
      x,
      y,
      width: columnWidth,
      height: height,
    };

    columnHeights[minColumnIndex] += height + gap;
  }

  const maxHeight = Math.max(...columnHeights);
  return { positions, maxHeight };
};

export default computeGridPositions;
