import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  gridItemClass: {
    padding: 4,
    borderRadius: 8,
  },
  loaderWrapper: {
    position: "fixed",
    bottom: 0,
    height: 100,
    backgroundColor: "transparent",
    width: "100%",
    boxShadow: "inset 0 -80px 20px 0px rgba(0, 0, 0, 0.4)",
  },
});

export default useStyles;
