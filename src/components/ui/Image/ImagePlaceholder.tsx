import { Blurhash } from "react-blurhash";

import { ImagePlaceholderProps } from "./ImageTypes";

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = (props) => {
  const { hash, ...restProps } = props;
  return <Blurhash hash={hash} {...restProps} />;
};

export default ImagePlaceholder;
