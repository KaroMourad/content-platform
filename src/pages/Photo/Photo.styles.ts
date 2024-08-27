import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  goBack: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& svg": {
      marginRight: "var(--spacing-xxs, 0.25rem)",
    },
    color: "var(--primary-foreground)",
    textDecoration: "none",
    "&:hover": {
      color: "var(--primary-foreground-hover)",
      textDecoration: "underline",
    },
    "&:active": {
      color: "var(--primary-foreground-active)",
      textDecoration: "underline",
    },
  },
  photoContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
});

export default useStyles;
