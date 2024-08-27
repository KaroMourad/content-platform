import React from "react";
import useStyles from "./Grid.styles";
import { GridProps } from "./Grid.types";

const Grid: React.FC<GridProps> = ({ gridRef, children }) => {
  const classes = useStyles();

  return (
    <div ref={gridRef} className={classes.grid}>
      {children}
    </div>
  );
};

export default Grid;
