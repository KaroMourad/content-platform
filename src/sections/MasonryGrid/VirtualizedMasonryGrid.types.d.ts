import {
  InfiniteQueryObserverResult,
  InfiniteData,
  FetchNextPageOptions,
} from "@tanstack/react-query";
import { GridItemType } from "./GridItem/GridItem.types";
import { UnsplashPhotoData } from "../../services/api/Photos/Photos.types";
import { ResponseData } from "../../services/api/api.types";

export interface VirtualizedMasonryGridProps {
  items: GridItemType[];
  gap?: number;
  virtualizationBuffer?: number;
  breakpoints?: GridBreakpoint[];
  gridItemClass?: string;
  infiniteScrollProps?: InfiniteScrollProps;
}

export interface InfiniteScrollProps {
  next: (
    options?: FetchNextPageOptions
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<ResponseData<UnsplashPhotoData[]>, unknown>,
      Error
    >
  >;
  isFetching: boolean;
  buffer?: number;
  hasError?: boolean;
}

export interface GridBreakpoint {
  width: number;
  columns: number;
}
