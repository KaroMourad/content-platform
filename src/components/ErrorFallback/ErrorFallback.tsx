import React from "react";
import classNames from "classnames";
import useStyles from "./ErrorFallbackStyles";
import { ErrorFallbackProps } from "./ErrorFallbackTypes";
import { Button } from "../ui";

import CloseIcon from '../../assets/icons/close.svg?react';

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  errorMessage,
  onRetry,
  onClose,
  className,
}) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.container, className)}>
      <Button className={classes.closeButton} variant="outline" size="sm" onClick={onClose} aria-label="Close">
        <CloseIcon className={classes.closeIcon}/>
      </Button>
      <p className={classes.message}>{errorMessage}</p>
      <Button className={classes.button} onClick={onRetry}>
        Try Again
      </Button>
    </div>
  );
};

ErrorFallback.displayName = "ErrorFallback";

export default ErrorFallback;
