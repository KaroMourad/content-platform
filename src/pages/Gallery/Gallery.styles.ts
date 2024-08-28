import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  gallery: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  gridItemClass: {
    padding: "var(--spacing-xxxs, 0.125rem)",
    borderRadius: "var(--border-radius-lg, 0.625rem)",
  },
  loaderWrapper: {
    position: "fixed",
    bottom: 0,
    height: 100,
    backgroundColor: "transparent",
    width: "100%",
    boxShadow: "inset 0 -5em 1.25em 0 rgba(0, 0, 0, 0.6)",
  },
});

export default useStyles;
