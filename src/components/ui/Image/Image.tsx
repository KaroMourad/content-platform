import { useState, memo } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { createUseStyles } from "react-jss";

import { ImageProps, ImageUseStylesArgs } from "./types";

function Image(props: ImageProps) {
  const { src, alt, blurhash, width, height, loading } = props;
  const [loaded, setLoaded] = useState(false);

  const classes = useStyles({ loaded, width, height });
  return (
    <div className={classes.imageContainer}>
      <ImagePlaceholder
        hash={blurhash}
        width="100%"
        height="100%"
        loaded={loaded}
      />
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={classes.image}
        loading={loading}
      />
    </div>
  );
}

export default memo(Image);

const useStyles = createUseStyles({
  imageContainer: ({ width, height }: ImageUseStylesArgs) => ({
    maxWidth: "100%",
    display: 'inline-flex',
    aspectRatio: typeof width === 'number' && typeof height === 'number' ? width / height : "auto",
  }),
  image: ({ loaded }: ImageUseStylesArgs) => ({
    maxWidth: "100%",
    visibility: loaded ? "visible" : "hidden",
  }),
});
