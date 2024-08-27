import { useMemo } from "react";
import { VirtualizedMasonryGrid } from "../../sections/MasonryGrid";
import { Image, Loader } from "../../components/ui";
import { UnsplashPhotoData } from "../../services/api/Photos/Photos.types";
import { ErrorBoundary, ErrorFallback } from "../../components";
import useStyles from "./Gallery.styles";
import useFetchData from "./hooks/useFetchData";
import { Link } from "react-router-dom";
import { PATH } from "../../routes";

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
  } = useFetchData();

  const processedData = useMemo(() => {
    const flattenData = data.pages.reduce(
      (acc, page) => [...acc, ...page.data],
      [] as UnsplashPhotoData[]
    );

    return flattenData.map((photo, i) => ({
      key: `${photo.id}-${i}`,
      value: (
        <Link to={`${PATH.GALLERY.ROOT}/${photo.id}`}>
          <div className={classes.imageContainer}>
            <Image
              src={photo.urls.small}
              alt={photo.alt_description || photo.slug}
              blurhash={photo.blur_hash}
              className={classes.image}
              loading="lazy"
            />
            <p className={classes.imageTitle}>
              {photo.alt_description || photo.slug}
            </p>
          </div>
        </Link>
      ),
      originalWidth: photo.width,
      originalHeight: photo.height,
    }));
  }, [data]);

  return (
    <ErrorBoundary>
      <div className={classes.gallery}>
        <h1>Gallery</h1>
        {hasFetchingError && (
          <ErrorFallback
            errorMessage="Failed to load gallery. Please try again."
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
