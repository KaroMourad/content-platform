import { Link } from "react-router-dom";
import { PATH } from "../routes";

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Page not found</h2>
      <Link to={PATH.HOME}>Back to Home page</Link>
    </div>
  );
};

export default NotFound;
