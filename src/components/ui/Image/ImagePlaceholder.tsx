import { Blurhash } from "react-blurhash";

import { ImagePlaceholderProps } from "./types";

function ImagePlaceholder(props: ImagePlaceholderProps) {
  const { hash, loaded, ...restProps } = props;
  return loaded || !hash ? null : <Blurhash hash={hash} {...restProps} />;
}

export default ImagePlaceholder;
