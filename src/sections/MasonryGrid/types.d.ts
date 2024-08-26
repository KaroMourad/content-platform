import { RefCallback } from "react";
import InfiniteScroll from "../../components/InfiniteScroll/InfiniteScroll";
import { GridItemType } from "./Grid/types";

export interface VirtualizedMasonryGridProps {
  items: GridItemType[];
  gap?: number;
  buffer?: number;
  breakpoints?: GridBreakpoint[];
  gridItemClass?: string;
  infiniteScrollProps?: {
    hasMore: boolean;
    next: Function;
    isFetching: boolean;
  };
}

export interface GridBreakpoint {
  width: number;
  columns: number;
}
