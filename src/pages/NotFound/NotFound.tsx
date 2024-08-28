import { Link } from "react-router-dom";
import { PATH } from "../../routes";
import { ErrorBoundary } from "../../components";
import useStyles from "./NotFound.styles";
import ArrowBack from "../../assets/icons/arrow-back.svg?react";

const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <ErrorBoundary>
      <div className={classes.container}>
        <h1 className={classes.title}>Oops!</h1>
        <h2 className={classes.subtitle}>Page not found</h2>
        <Link to={PATH.HOME} className={classes.goBack}>
          <ArrowBack />
          Back to Gallery
        </Link>
      </div>
    </ErrorBoundary>
  );
};

NotFound.displayName = "NotFound";

export default NotFound;
