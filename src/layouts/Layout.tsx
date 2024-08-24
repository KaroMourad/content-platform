import { Outlet } from "react-router-dom";
import { createUseStyles } from "react-jss";

const Layout: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Outlet />
    </div>
  );
};

export default Layout;

const useStyles = createUseStyles({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    height: "100%",
  },
});
