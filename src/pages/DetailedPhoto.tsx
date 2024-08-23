import { Link, useParams } from "react-router-dom";
import { PATH } from "../routes";

function DetailedPhoto() {
  const { photoId } = useParams();
  return (
    <div>
      <h1>Photo Title</h1>
      <Link to={PATH.GALLERY.ROOT}>Back to Gallery</Link>
      <p>This is the detailed photo page for photo {photoId}.</p>
      <img src="https://via.placeholder.com/600" alt="Photo Title" />
    </div>
  );
}

export default DetailedPhoto;
