import React, { memo } from "react";
import classNames from "classnames";

import useStyles from "./GridItem.styles";
import { GridItemProps } from "./GridItem.types";

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
