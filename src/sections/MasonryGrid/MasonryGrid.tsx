import { createUseStyles } from "react-jss";
import { MasnoryGridProps } from "./types";
import { useMemo } from "react";
import { Image } from "../../components/ui";

function MasonryGrid(props: MasnoryGridProps) {
  const { data } = props;
  const memoizedData = useMemo(() => data, [data]);

  const classes = useStyles();
  return (
    <div className={classes.masonryGrid}>
      {memoizedData.map((image) => (
        <div key={image.id} className={classes.gridItem}>
          <Image
            src={image.urls.small}
            alt={image.alt_description || image.slug}
            blurhash={image.blur_hash}
            width={image.width}
            height={image.height}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default MasonryGrid;

const useStyles = createUseStyles({
  masonryGrid: {
    columnCount: 4,
    columnGap: "10px",
    width: "90%",
    minHeight: "100vh",
  },
  gridItem: {
    margin: 0,
    minHeight: "100px",
    display: "grid",
    gridTemplateRows: "1fr auto",
    marginBottom: "10px",
    breakInside: "avoid",
    overflow: "hidden",
  },
});
