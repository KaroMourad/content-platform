import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

import useStyles from "./ImageStyles";
import { ImageProps } from "./ImageTypes";

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

Image.displayName = "Image";

export default Image;
