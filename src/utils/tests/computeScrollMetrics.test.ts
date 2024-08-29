import { RefObject } from 'react';
import { describe, it, expect } from 'vitest';
import computeScrollMetrics from '../computeScrollMetrics';

describe('computeScrollMetrics', () => {
  it('should compute scroll metrics correctly', () => {
    // Create a mock HTMLDivElement
    const mockDiv = {
      scrollTop: 100,
      clientHeight: 400,
      scrollHeight: 1200,
    } as HTMLDivElement;

    // Create a mock ref object
    const ref = { current: mockDiv } as RefObject<HTMLDivElement>;

    // Define a buffer percentage
    const buffer = 10;

    // Call the function with the mock ref and buffer
    const result = computeScrollMetrics(ref, buffer);

    // Calculate expected bufferHeight
    const expectedBufferHeight = (buffer / 100) * mockDiv.clientHeight;

    // Define expected result
    const expectedResult = {
      scrollTop: mockDiv.scrollTop,
      clientHeight: mockDiv.clientHeight,
      bufferHeight: expectedBufferHeight,
      scrollHeight: mockDiv.scrollHeight,
    };

    // Assert the result
    expect(result).toEqual(expectedResult);
  });

  it('should return zero values if ref is not set', () => {
    // Create a ref with no current value
    const ref = { current: null } as RefObject<HTMLDivElement>;

    // Define a buffer percentage
    const buffer = 10;

    // Call the function with the mock ref and buffer
    const result = computeScrollMetrics(ref, buffer);

    // Define expected result
    const expectedResult = {
      scrollTop: 0,
      clientHeight: 0,
      bufferHeight: 0,
      scrollHeight: 0,
    };

    // Assert the result
    expect(result).toEqual(expectedResult);
  });
});
