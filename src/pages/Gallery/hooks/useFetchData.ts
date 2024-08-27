import { useState, useMemo, useEffect, useCallback } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchPhotos } from "../../../services/api/Photos";
import { QUERY_KEYS } from "../../../services/api/constants";
import { PHOTOS_PER_PAGE } from "../config";

const useFetchData = () => {
  const [hasFetchingError, setHasFetchingError] = useState(false);

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    isError,
    isLoadingError,
    isFetchNextPageError,
    isRefetchError,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_PHOTOS, PHOTOS_PER_PAGE],
    queryFn: ({ pageParam }) => fetchPhotos(pageParam, PHOTOS_PER_PAGE),
    initialPageParam: 1,
    initialData: { pages: [], pageParams: [] },
    getNextPageParam: (lastPage, pages) => {
      if (hasFetchingError) return undefined;
      const currentPage = pages.length;
      const lastPageNumber = lastPage.lastPageNumber;
      const hasMore = !!(lastPageNumber && currentPage < lastPageNumber);
      return hasMore ? currentPage + 1 : undefined;
    },
  });

  const infiniteScrollProps = useMemo(() => {
    return {
      hasError: hasFetchingError || isFetchNextPageError,
      next: fetchNextPage,
      isFetching: isFetchingNextPage,
    };
  }, [
    isFetchingNextPage,
    fetchNextPage,
    hasFetchingError,
    isFetchNextPageError,
  ]);

  useEffect(() => {
    setHasFetchingError(isError || isLoadingError || isRefetchError);
  }, [isError, isLoadingError, isRefetchError]);

  const handleRetry = useCallback(() => {
    setHasFetchingError(false);
    fetchNextPage();
  }, [fetchNextPage]);

  const handleClose = useCallback(() => {
    setHasFetchingError(false);
  }, []);

  return {
    isFetching,
    isFetchingNextPage,
    data,
    fetchNextPage,
    infiniteScrollProps,
    hasFetchingError,
    handleRetry,
    handleClose,
  };
};

export default useFetchData;
