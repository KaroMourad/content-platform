import { RefCallback } from "react";
import InfiniteScroll from "../../components/InfiniteScroll/InfiniteScroll";
import { GridItemType } from "./GridItem/GridItem.types";

export interface VirtualizedMasonryGridProps {
  items: GridItemType[];
  gap?: number;
  virtualizationBuffer?: number;
  breakpoints?: GridBreakpoint[];
  gridItemClass?: string;
  infiniteScrollProps?: {
    next: Function;
    isFetching: boolean;
    buffer?: number;
    hasError?: boolean;
  };
}

export interface GridBreakpoint {
  width: number;
  columns: number;
}
