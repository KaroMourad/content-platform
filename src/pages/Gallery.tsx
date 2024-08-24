import { createUseStyles } from "react-jss";
import { VirtualizedMasonryGrid } from "../sections/MasonryGrid";

import { Image } from "../components/ui";
import { mockGrid } from "../mock/grid";

const items = mockGrid.map((image) => ({
  key: image.id,
  value: (
    <Image
      src={image.urls.small}
      alt={image.alt_description || image.slug}
      blurhash={image.blur_hash}
      loading="lazy"
      style={{ borderRadius: 4 }}
    />
  ),
  aspectRatio: image.width / image.height,
}));

const Gallery: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Gallery</h1>
      <VirtualizedMasonryGrid
        items={items}
        gridItemClass={classes.gridItemClass}
      />
    </>
  );
};

export default Gallery;

const useStyles = createUseStyles({
  gridItemClass: {
    padding: 4,
    borderRadius: 8,
  },
});
