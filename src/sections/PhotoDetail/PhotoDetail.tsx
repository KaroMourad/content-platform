import { memo } from "react";
import { PhotoDetailProps } from "./PhotoDetail.types";
import { ErrorBoundary } from "../../components";
import { Image } from "../../components/ui";
import useStyles from "./PhotoDetail.styles";
import AvatarPlaceholder from "../../assets/icons/avatar-placeholder.svg?react";
import Clock from "../../assets/icons/clock.svg?react";

const PhotoDetail: React.FC<PhotoDetailProps> = ({ data }) => {  
  const classes = useStyles({ ratio: data.width / data.height });

  return (
    <ErrorBoundary>
      <div className={classes.photoDetailContainer}>
        <div className={classes.imageContainer}>
          <Image
            src={data.urls.regular}
            alt={data.alt_description || data.slug}
            blurhash={data.blur_hash}
            className={classes.image}
            loading="lazy"
          />
        </div>
        <div className={classes.photoDetail}>
          <h2 className={classes.photoTitle}>
            {data.alt_description || data.slug}
          </h2>
          <div className={classes.userInfo}>
            <Image
              src={data.user.profile_image.medium}
              alt={data.user.name}
              width={24}
              height={24}
              className={classes.userImage}
              placeholder={<AvatarPlaceholder />}
            />
            {data.user.name}
          </div>
          <div className={classes.photoCreated}>
            <Clock width={16} height={16} className={classes.clockIcon} />
            {new Date(data.created_at).toLocaleString()}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

PhotoDetail.displayName = "PhotoDetail";

export default memo(PhotoDetail);
