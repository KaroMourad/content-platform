import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "var(--spacing-md, 1rem)",
    height: "100%",
  },
});

export default useStyles;
