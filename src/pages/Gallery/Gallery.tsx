import { createUseStyles } from "react-jss";
import { useInfiniteQuery } from "@tanstack/react-query";

import { VirtualizedMasonryGrid } from "../../sections/MasonryGrid";

import { Image, Loader } from "../../components/ui";
import { useMemo } from "react";
import { fetchImages } from "../../services/api/Images/Images";
import { UnsplashImageData } from "../../services/api/Images/types";
import { QUERY_KEYS } from "../../config/queryKeys";

const Gallery: React.FC = () => {
  const IMAGES_PER_PAGE = 10;

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_PHOTOS],
    queryFn: ({ pageParam }) => fetchImages(pageParam, IMAGES_PER_PAGE),
    initialPageParam: 1,
    initialData: { pages: [], pageParams: [] },
    getNextPageParam: (lastPage, pages) => {
      const hasMore = lastPage.length === IMAGES_PER_PAGE;
      return hasMore ? pages.length + 1 : undefined;
    },
  });

  const processedImages = useMemo(() => {
    const flattenImages: UnsplashImageData[] = (data?.pages || []).flat();
    
    return flattenImages.map((image, i) => {
      return {
        key: `${image.id}-${i}`,
        value: (
          <Image
            src={image.urls.small}
            alt={image.alt_description || image.slug}
            blurhash={image.blur_hash}
            loading="lazy"
            style={{ borderRadius: 4 }}
          />
        ),
        aspectRatio: Number((image.width / image.height).toFixed(2)),
      };
    });
  }, [data]);

  const infiniteScrollProps = useMemo(
    () => ({
      hasMore: data.pages.at(-1)?.length === IMAGES_PER_PAGE,
      next: fetchNextPage,
      isFetching: isFetchingNextPage,
    }),
    [data.pages, isFetchingNextPage, fetchNextPage]
  );

  const classes = useStyles();
  return (
    <>
      <h1>Gallery</h1>
      <VirtualizedMasonryGrid
        items={processedImages}
        gridItemClass={classes.gridItemClass}
        infiniteScrollProps={infiniteScrollProps}
      />
      {isFetchingNextPage && (
        <Loader wrapperClassName={classes.loaderWrapper} />
      )}
    </>
  );
};

export default Gallery;

const useStyles = createUseStyles({
  gridItemClass: {
    padding: 4,
    borderRadius: 8,
  },
  loaderWrapper: {
    position: "fixed",
    bottom: 0,
    height: 100,
    backgroundColor: "transparent",
    width: "100%",
    backdropFilter: "blur(2px)",
    boxShadow: "inset 0 -80px 20px 0px rgba(0, 0, 0, 0.4)",
  },
});
