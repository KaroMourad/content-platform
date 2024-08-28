import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  item: (style: React.CSSProperties) => ({
    position: "absolute",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    color: "black",
    overflow: "hidden",
    willChange: "transform",
    transition: "transform 0.2s ease-out",
    ...style,
  }),
});

export default useStyles;


