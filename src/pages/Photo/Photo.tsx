import { Link, useParams } from "react-router-dom";
import { PATH } from "../../routes";
import { ErrorBoundary } from "../../components";

import useStyles from './Photo.styles';

const Photo: React.FC = () => {
  const { photoId } = useParams();
  const classes = useStyles();
  return (
    <ErrorBoundary>
      <div className={classes.photo}>
        <h1>Photo: {photoId}</h1>
        <Link to={PATH.GALLERY.ROOT}>Back to Gallery</Link>
      </div>
    </ErrorBoundary>
  );
};

Photo.displayName = "Photo";

export default Photo;
