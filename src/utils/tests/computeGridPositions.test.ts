import { describe, it, expect } from 'vitest';
import computeGridPositions from '../computeGridPositions';
import { GridItemType, Position } from '../../sections/MasonryGrid/GridItem/GridItem.types';

describe('computeGridPositions', () => {
    it('should handle multiple items correctly', () => {
      const items: GridItemType[] = [
        { key: '1', originalWidth: 150, originalHeight: 200 }, // Aspect Ratio = 150 / 200 = 0.75
        { key: '2', originalWidth: 150, originalHeight: 300 }, // Aspect Ratio = 150 / 300 = 0.5
        { key: '3', originalWidth: 150, originalHeight: 200 }, // Aspect Ratio = 150 / 200 = 0.75
        { key: '4', originalWidth: 150, originalHeight: 200 }, // Aspect Ratio = 150 / 200 = 0.75
      ];
      const columnWidth = 150;
      const columnCount = 3;
      const gap = 15;
  
      const result = computeGridPositions(items, columnWidth, columnCount, gap);
  
      const expectedPositions: Record<string, Position> = {
        '1': { x: 0, y: 0, width: 150, height: 200 },
        '2': { x: 165, y: 0, width: 150, height: 300 },
        '3': { x: 330, y: 0, width: 150, height: 200 },
        '4': { x: 0, y: 215, width: 150, height: 200 }, 
      };
  
      // Calculate expected maxHeight
      const expectedMaxHeight = Math.max(
        200 + 15 + 215, // Height of first column (200 + gap + height of item 4)
        300 // Height of second column
      );
  
      expect(result.positions).toEqual(expectedPositions);
      expect(result.maxHeight).toBeCloseTo(expectedMaxHeight);
    });
  });