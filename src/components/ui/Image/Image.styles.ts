import { createUseStyles } from "react-jss";
import { ImageUseStylesArgs } from "./Image.types";

const useStyles = createUseStyles({
  container: ({ style, width = "100%", height = "100%" }: ImageUseStylesArgs) => ({
    height: height,
    width: width,
    maxWidth: "100%",
    maxHeight: "100%",
    display: "inline-flex",
    overflow: "hidden",
    ...style,
  }),
  image: ({ loaded }: ImageUseStylesArgs) => ({
    transition: "opacity 0.2s ease-in-out",
    willChange: "opacity",
    maxWidth: "100%",
    height: "100%",
    opacity: loaded ? 1 : 0.5,
    width: loaded ? "100%" : "0",
    visibility: loaded ? "visible" : "hidden",
  }),
});

export default useStyles;
