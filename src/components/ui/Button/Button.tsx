// Button.tsx
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import useStyles from "./ButtonStyles";

import { ButtonProps } from "./ButtonTypes";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const classes = useStyles();
    const Comp = asChild ? Slot : "button";

    // Combine the variant and size styles
    const variantClass = classes[variant];
    const sizeClass = classes[`${size}Size`];
    const combinedClassName = `${classes.button} ${variantClass} ${sizeClass} ${
      className || ""
    }`;

    return <Comp className={combinedClassName} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export default Button;
