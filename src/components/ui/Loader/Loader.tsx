import classNames from "classnames";

import useStyles from "./LoaderStyles";
import { LoaderProps } from "./LoaderTypes";

const Loader = ({
  withContainer = true,
  wrapperClassName,
  className,
}: LoaderProps) => {
  const classes = useStyles();
  if (withContainer) {
    return (
      <div className={classNames(classes.wrapper, wrapperClassName)}>
        <div className={classNames(classes.loader, className)} />
      </div>
    );
  }
  return <div className={classNames(classes.loader, className)} />;
};

Loader.displayName = "Loader";

export default Loader;
