import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
  },
  title: {
    fontSize: "var(--font-size-xl, 2rem)",
    margin: "0",
  },
  subtitle: {
    fontSize: "var(--font-size-lg, 1.5rem)",
    marginTop: "var(--spacing-md, 1rem)",
  },
  goBack: {
    marginTop: "var(--spacing-xl, 2rem)",
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
});

export default useStyles;
