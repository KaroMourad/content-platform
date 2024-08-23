import { createUseStyles } from "react-jss";
import { MasnoryGridProps } from "./types";
import { useMemo } from "react";

function MasonryGrid(props: MasnoryGridProps) {
  const { data } = props;
  const memoizedData = useMemo(() => data, [data]);

  const classes = useStyles();
  return <div className={classes.masonryGrid}>
    {memoizedData.map((image) => (
      <img key={image.id} src={image.urls.small} alt={image.alt_description || image.slug} />
    ))}
  </div>;
}

export default MasonryGrid;

const useStyles = createUseStyles({
  masonryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
});
