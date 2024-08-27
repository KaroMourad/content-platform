import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../services/api/constants";
import { fetchPhoto } from "../../../services/api/Photos";
import { useCallback, useEffect, useState } from "react";

const useFetchData = (photoId: string | undefined) => {
  const [hasFetchingError, setHasFetchingError] = useState(false);

  const {
    data,
    isError,
    isFetching,
    isLoading,
    refetch,
    isRefetchError,
    isLoadingError,
  } = useQuery({
    queryKey: [QUERY_KEYS.GET_PHOTO, photoId],
    queryFn: async () => fetchPhoto(photoId),
  });

  useEffect(() => {
    setHasFetchingError(isError || isRefetchError || isLoadingError);
  }, [isError, isRefetchError, isLoadingError]);

  const handleRetry = useCallback(() => {
    setHasFetchingError(false);
    refetch();
  }, [refetch]);

  const handleClose = useCallback(() => {
    setHasFetchingError(false);
  }, []);

  return {
    data: data?.data,
    isError,
    isFetching,
    isLoading,
    hasFetchingError,
    handleClose,
    handleRetry,
  };
};

export default useFetchData;
