// Breakpoints for different screen sizes
export const BREAKPOINTS = [
  { width: 1920, columns: 6 },
  { width: 1200, columns: 5 },
  { width: 1024, columns: 4 },
  { width: 768, columns: 3 },
  { width: 320, columns: 2 },
  { width: 0, columns: 1 },
];

// Gap between columns and rows in pixels
export const GAP = 16;

// Percentage of the viewport height to use as a buffer for pre-loading items
export const VIRTUALIZATION_BUFFER = 10;


// Percentage of the viewport height to use as a buffer for pre-fetching items
export const INFINTE_SCROLL_BUFFER = 5;
