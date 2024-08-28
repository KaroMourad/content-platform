import { Blurhash } from "react-blurhash";

import PlaceholderImg from "../../../assets/image-placeholder.svg?react";

import { ImagePlaceholderProps } from "./Image.types";

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = (props) => {
  const { blurhash, width = "100%", height = "auto", ...restProps } = props;
  return blurhash ? (
    <Blurhash hash={blurhash} width={width} height={height} {...restProps} />
  ) : (
    <PlaceholderImg width={width} height={height} />
  );
};

export default ImagePlaceholder;
