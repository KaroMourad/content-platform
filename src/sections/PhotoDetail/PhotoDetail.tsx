import { memo } from "react";
import { PhotoDetailProps } from "./types";

const PhotoDetail: React.FC<PhotoDetailProps> = ({ data }) => {
  console.log(data);
  return <div>PhotoDetail</div>;
};

PhotoDetail.displayName = "PhotoDetail";

export default memo(PhotoDetail);
