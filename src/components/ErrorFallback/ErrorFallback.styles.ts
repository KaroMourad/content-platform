import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "var(--spacing-md, 1rem)",
    textAlign: "center",
    position: "fixed",
    inset: 0,
    background: "var(--background-opacity)",
    backdropFilter: "blur(6px)",
    zIndex: 1,
  },
  message: {
    marginBottom: 'var(--spacing-md, 1rem)',
    color: 'var(--primary-foreground, #fff)',
    fontWeight: "var(--font-weight-medium, 500)",
  },
  button: {
    border: "none",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    background: "none",
    zIndex: 2,
    padding: '0 var(--spacing-xxs, 0.25rem)', 
  },
  closeIcon: {
    width: 24,
    height: 24,
    color: 'var(--primary, #dc3545)',
  },
});

export default useStyles;
