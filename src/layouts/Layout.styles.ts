import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "var(--spacing-lg, 1.5rem)",
    height: "100%",
  },
});

export default useStyles;
