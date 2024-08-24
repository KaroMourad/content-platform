import { Blurhash } from "react-blurhash";

import { ImagePlaceholderProps } from "./types";

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = (props) => {
  const { hash, loaded, ...restProps } = props;
  return loaded || !hash ? null : <Blurhash hash={hash} {...restProps} />;
};

export default ImagePlaceholder;
