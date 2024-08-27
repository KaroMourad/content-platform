import React from "react";
import { GridContainerProps } from "./GridContainer.types";
import useStyles from "./GridContainer.styles";

const GridContainer: React.FC<GridContainerProps> = ({
  containerRef,
  children,
}) => {
  const classes = useStyles();
  
  return (
    <div ref={containerRef} className={classes.container}>
      {children}
    </div>
  );
};

export default GridContainer;
