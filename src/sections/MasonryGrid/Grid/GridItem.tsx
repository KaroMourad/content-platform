import React, { memo } from "react";
import classNames from "classnames";

import { createUseStyles } from "react-jss";
import { GridItemProps } from "./types";

const GridItem: React.FC<GridItemProps> = ({ item, position, className }) => {
  const classes = useStyles();

  return (
    <div
      key={item.key}
      className={classNames(classes.item, className)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: position.width,
        height: position.height,
      }}
    >
      {item.value}
    </div>
  );
};

export default memo(GridItem);

const useStyles = createUseStyles({
  item: (style: React.CSSProperties) => ({
    position: "absolute",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    color: "black",
    overflow: "hidden",
    willChange: "transform",
    transition: "transform 0.12s ease-out",
    ...style,
  }),
});
