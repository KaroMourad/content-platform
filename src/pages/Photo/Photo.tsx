import { Link, useParams } from "react-router-dom";
import { PATH } from "../../routes";
import { ErrorBoundary, ErrorFallback } from "../../components";

import useStyles from "./Photo.styles";
import { Loader } from "../../components/ui";
import useFetchData from "./hooks/useFetchData";

import ArrowBack from "../../assets/icons/arrow-back.svg?react";
import { PhotoDetail } from "../../sections/PhotoDetail";
import { ERROR_FAILED_TO_LOAD_PHOTO } from "../../services/api/Photos/error-messages";

const Photo: React.FC = () => {
  const { photoId } = useParams();
  const classes = useStyles();

  const {
    data: photo,
    isFetching,
    handleRetry,
    handleClose,
    hasFetchingError,
    error,
  } = useFetchData(photoId);

  return (
    <ErrorBoundary>
      <div className={classes.photoContainer}>
        <Link to={PATH.GALLERY.ROOT} className={classes.goBack}>
          <ArrowBack />
          Back to Gallery
        </Link>
        {hasFetchingError && (
          <ErrorFallback
            errorMessage={error?.message || ERROR_FAILED_TO_LOAD_PHOTO}
            onRetry={handleRetry}
            onClose={handleClose}
          />
        )}
        {isFetching ? <Loader /> : photo && <PhotoDetail data={photo} />}
      </div>
    </ErrorBoundary>
  );
};

Photo.displayName = "Photo";

export default Photo;
