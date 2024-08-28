import { Outlet } from "react-router-dom";

import useStyles from "./Layout.styles";
import { ErrorBoundary } from "../components";

const Layout: React.FC = () => {
  const classes = useStyles();
  return (
    <ErrorBoundary>
      <div className={classes.layout}>
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
