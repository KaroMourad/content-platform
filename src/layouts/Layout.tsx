import { Outlet } from "react-router-dom";

import useStyles from "./Layout.styles";

const Layout: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Outlet />
    </div>
  );
};

export default Layout;
