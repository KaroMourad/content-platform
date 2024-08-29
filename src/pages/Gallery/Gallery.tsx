import { useMemo } from "react";
import { VirtualizedMasonryGrid } from "../../sections/MasonryGrid";
import { Loader } from "../../components/ui";
import { ErrorBoundary, ErrorFallback } from "../../components";
import useStyles from "./Gallery.styles";
import useFetchData from "./hooks/useFetchData";
import { GridItemType } from "../../sections/MasonryGrid/GridItem/GridItem.types";
import GalleryPhoto from "./GalleryPhoto/GalleryPhoto";
import { ERROR_FAILED_TO_LOAD_PHOTOS } from "../../services/api/Photos/error-messages";

const Gallery: React.FC = () => {
  const classes = useStyles();

  const {
    data,
    isFetching,
    isFetchingNextPage,
    hasFetchingError,
    infiniteScrollProps,
    handleRetry,
    handleClose,
    error,
  } = useFetchData();

  const processedData: GridItemType[] = useMemo(
    () =>
      data.map((photo, i) => ({
        key: `${photo.id}-${i}`,
        value: <GalleryPhoto photo={photo} />,
        originalWidth: photo.width,
        originalHeight: photo.height,
      })),
    [data]
  );

  return (
    <ErrorBoundary>
      <div className={classes.gallery}>
        <h1>Gallery</h1>
        {hasFetchingError && (
          <ErrorFallback
            errorMessage={error?.message || ERROR_FAILED_TO_LOAD_PHOTOS}
            onRetry={handleRetry}
            onClose={handleClose}
          />
        )}
        {isFetching && processedData.length === 0 ? (
          <Loader />
        ) : (
          <VirtualizedMasonryGrid
            items={processedData}
            gridItemClass={classes.gridItemClass}
            infiniteScrollProps={infiniteScrollProps}
          />
        )}
        {isFetchingNextPage && (
          <Loader wrapperClassName={classes.loaderWrapper} />
        )}
      </div>
    </ErrorBoundary>
  );
};

Gallery.displayName = "Gallery";

export default Gallery;
