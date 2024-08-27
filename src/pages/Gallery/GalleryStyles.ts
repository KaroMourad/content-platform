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
  imageContainer: {
    borderRadius: "var(--border-radius-md, 0.5rem)",
    position: "relative",
    overflow: "hidden",
    height: "100%",
    "&:hover $imageTitle": {
      opacity: 1,
      display: "block",
    },
  },
  imageTitle: {
    transition: "opacity 0.2s ease-in-out",
    opacity: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "var(--spacing-xs, 0.5rem) var(--spacing-md, 1rem)",
    boxShadow: "inset 0 -2em 1em 0 rgba(0, 0, 0, 0.6)",
    color: "#fff",
    fontSize: "var(--font-size-xs, 0.75rem)",
    textAlign: "center",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});

export default useStyles;
