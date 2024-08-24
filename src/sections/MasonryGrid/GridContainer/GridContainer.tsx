import React from "react";
import { createUseStyles } from "react-jss";
import { GridContainerProps } from "./types";

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

const useStyles = createUseStyles({
  container: {
    position: "relative",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
  },
});
