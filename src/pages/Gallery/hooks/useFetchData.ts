import { useState, useMemo, useEffect } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchPhotos } from "../../../services/api/Photos";
import { QUERY_KEYS } from "../../../services/api/constants";
import { PHOTOS_PER_PAGE } from "../config";
import { UnsplashPhotoData } from "../../../services/api/Photos/Photos.types";

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
    error,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.PHOTOS.GET_PHOTOS, PHOTOS_PER_PAGE],
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

  const flattenData = useMemo(
    () =>
      data.pages.reduce(
        (acc, page) => [...acc, ...page.data],
        [] as UnsplashPhotoData[]
      ),
    [data]
  );

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

  const handleRetry = () => {
    setHasFetchingError(false);
    fetchNextPage();
  };

  const handleClose = () => {
    setHasFetchingError(false);
  };

  return {
    isFetching,
    isFetchingNextPage,
    data: flattenData,
    fetchNextPage,
    infiniteScrollProps,
    hasFetchingError,
    handleRetry,
    handleClose,
    error,
  };
};

export default useFetchData;
