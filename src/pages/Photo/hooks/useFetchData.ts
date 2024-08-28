import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../services/api/constants";
import { fetchPhoto } from "../../../services/api/Photos";
import { PATH } from "../../../routes";

const useFetchData = (photoId: string | undefined) => {
  const [hasFetchingError, setHasFetchingError] = useState(false);
  const navigate = useNavigate();

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

  const handleRetry = () => {
    setHasFetchingError(false);
    refetch();
  };

  const handleClose = () => {
    setHasFetchingError(false);
    navigate(PATH.BACK);
  };

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
