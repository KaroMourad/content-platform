import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  imageContainer: {
    borderRadius: "var(--border-radius-md, 0.5rem)",
    position: "relative",
    overflow: "hidden",
    height: "100%",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 0 1em var(--primary-hover, #007bff)",
      "& $imageTitle": {
        opacity: 1,
        display: "block",
      },
      "& $image": {
        transform: "scale(1.05)",
      },
    },
    "&:active": {
      boxShadow: "0 0 0 1em var(--primary-active, #6c757d)",
    },
  },
  image: {
    transition: "transform 0.2s ease-in-out",
    "& img": {
      objectFit: "cover",
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
