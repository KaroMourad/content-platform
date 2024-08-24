import React from "react";
import { createUseStyles } from "react-jss";
import { GridProps } from "./types";

const Grid: React.FC<GridProps> = ({ gridRef, children }) => {
  const classes = useStyles();

  return (
    <div ref={gridRef} className={classes.grid}>
      {children}
    </div>
  );
};

export default Grid;

const useStyles = createUseStyles({
  grid: {
    width: "100%",
    minHeight: "100%",
    position: "relative",
  },
});
