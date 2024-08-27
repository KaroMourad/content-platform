import { useMemo } from "react";
import { VirtualizedMasonryGrid } from "../../sections/MasonryGrid";
import { Image, Loader } from "../../components/ui";
import { UnsplashImageData } from "../../services/api/Images/types";
import { ErrorBoundary, ErrorFallback } from "../../components";
import useStyles from "./GalleryStyles";
import useFetchData from "./useFetchData";

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

  const processedImages = useMemo(() => {
    const flattenImages = data.pages.reduce(
      (acc, page) => [...acc, ...page.data],
      [] as UnsplashImageData[]
    );

    return flattenImages.map((image, i) => ({
      key: `${image.id}-${i}`,
      value: (
        <div className={classes.imageContainer}>
          <Image
            src={image.urls.small}
            alt={image.alt_description || image.slug}
            blurhash={image.blur_hash}
            loading="lazy"
          />
          <p className={classes.imageTitle}>
            {image.alt_description || image.slug}
          </p>
        </div>
      ),
      originalWidth: image.width,
      originalHeight: image.height,
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
        {isFetching && processedImages.length === 0 ? (
          <Loader />
        ) : (
          <VirtualizedMasonryGrid
            items={processedImages}
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
