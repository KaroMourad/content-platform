import { memo } from "react";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "../../../components";
import { PATH } from "../../../routes";
import { GalleryPhotoProps } from "./GalleryPhoto.types";
import useStyles from "./GalleryPhoto.styles";
import { Image } from "../../../components/ui";

const GalleryPhoto: React.FC<GalleryPhotoProps> = ({ photo }) => {
  const classes = useStyles();
  return (
    <ErrorBoundary>
      <Link to={`${PATH.GALLERY.ROOT}/${photo.id}`}>
        <div className={classes.imageContainer}>
          <Image
            src={photo.urls.small}
            alt={photo.alt_description || photo.slug}
            blurhash={photo.blur_hash}
            className={classes.image}
            loading="lazy"
          />
          <p className={classes.imageTitle}>
            {photo.alt_description || photo.slug}
          </p>
        </div>
      </Link>
    </ErrorBoundary>
  );
};

export default memo(GalleryPhoto);
