import { ImgHTMLAttributes } from "react";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  blurhash?: string;
  style?: React.CSSProperties;
  imageRef?: React.Ref<HTMLDivElement>;
  placeholder?: React.ReactNode;
}

export interface ImagePlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  blurhash?: string;
  height?: number | string | "auto";
  width?: number | string | "auto";
  punch?: number;
  resolutionX?: number;
  resolutionY?: number;
  style?: React.CSSProperties;
}

export interface ImageUseStylesArgs {
  loaded?: boolean;
  style?: React.CSSProperties;   
  height?: number | string;
  width?: number | string;
}
