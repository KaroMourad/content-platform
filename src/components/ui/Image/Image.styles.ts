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
    maxWidth: "100%",
    height: "100%",
    width: loaded ? "100%" : "0",
    visibility: loaded ? "visible" : "hidden",
  }),
});

export default useStyles;