import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.2s, color 0.2s, transform 0.1s",
    "&:focus-visible": {
      outline: "none",
      boxShadow:
        "0 0 0 2px var(--ring-color), 0 0 0 4px var(--ring-offset-color)",
    },
    "&:disabled": {
      pointerEvents: "none",
      opacity: 0.5,
    },
    "&:active": {
      opacity: 0.7,
      transform: "scale(0.98)",
    },
  },
  default: {
    backgroundColor: "var(--primary, #007bff)",
    color: "var(--primary-foreground, #fff)",
    "&:hover": {
      backgroundColor: "var(--primary-hover, #0056b3)",
    },
    "&:active": {
      backgroundColor: "var(--primary-active, #004085)",
    },
  },
  destructive: {
    backgroundColor: "var(--destructive, #dc3545)",
    color: "var(--destructive-foreground, #fff)",
    "&:hover": {
      backgroundColor: "var(--destructive-hover, #c82333)",
    },
    "&:active": {
      backgroundColor: "var(--destructive-active, #bd2130)",
    },
  },
  outline: {
    border: "1px solid var(--input-border, #ccc)",
    backgroundColor: "var(--background, #fff)",
    "&:hover": {
      backgroundColor: "var(--accent, #f8f9fa)",
      color: "var(--accent-foreground, #333)",
    },
    "&:active": {
      backgroundColor: "var(--background-active, #e9ecef)",
    },
  },
  secondary: {
    backgroundColor: "var(--secondary, #6c757d)",
    color: "var(--secondary-foreground, #fff)",
    "&:hover": {
      backgroundColor: "var(--secondary-hover, #5a6268)",
    },
    "&:active": {
      backgroundColor: "var(--secondary-active, #43464b)",
    },
  },
  ghost: {
    "&:hover": {
      backgroundColor: "var(--accent, #f8f9fa)",
      color: "var(--accent-foreground, #333)",
    },
    "&:active": {
      backgroundColor: "var(--ghost-active, #e2e6ea)",
    },
  },
  link: {
    color: "var(--primary, #007bff)",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "none",
    },
    "&:active": {
      color: "var(--primary-active, #0056b3)",
    },
  },
  defaultSize: {
    height: "2.5rem",
    padding: "0 1rem",
  },
  smSize: {
    height: "2.25rem",
    padding: "0 0.75rem",
    borderRadius: "0.375rem",
  },
  lgSize: {
    height: "2.75rem",
    padding: "0 1.5rem",
    borderRadius: "0.375rem",
  },
  iconSize: {
    height: "2.5rem",
    width: "2.5rem",
  },
});

export default useStyles;
