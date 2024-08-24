import { ImgHTMLAttributes } from "react";

export interface ImagePlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  hash?: string;
  /** CSS height, default: 128 */
  height?: number | string | "auto";
  /** CSS width, default: 128 */
  width?: number | string | "auto";
  punch?: number;
  resolutionX?: number;
  resolutionY?: number;
  style?: React.CSSProperties;
  loaded?: boolean;
}

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  blurhash?: string;
  style?: React.CSSProperties;
}

export interface ImageUseStylesArgs {
  loaded?: boolean;
  style?: React.CSSProperties;
}
