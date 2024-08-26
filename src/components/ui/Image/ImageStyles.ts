import { createUseStyles } from "react-jss";
import { ImageUseStylesArgs } from "./ImageTypes";

const useStyles = createUseStyles({
  imageContainer: ({ style }: ImageUseStylesArgs) => ({
    height: "100%",
    width: "100%",
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
