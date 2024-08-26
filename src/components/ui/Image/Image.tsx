import { useState, memo } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { createUseStyles } from "react-jss";

import { ImageProps, ImageUseStylesArgs } from "./types";

const Image: React.FC<ImageProps> = (props) => {
  const { src, alt, blurhash, loading, style, imageRef } = props;
  const [loaded, setLoaded] = useState(false);

  const classes = useStyles({ loaded, style });
  return (
    <div className={classes.imageContainer} ref={imageRef}>
      {!loaded && blurhash && (
        <ImagePlaceholder hash={blurhash} width="100%" height="100%" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={classes.image}
        loading={loading}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default memo(Image);

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
