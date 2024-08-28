import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  photoDetailContainer: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
    marginTop: "var(--spacing-md, 1rem)",
    background: "var(--background-secondary)",
    borderRadius: "var(--border-radius-md, 0.5rem)",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
    },
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "var(--spacing-lg, 1.5rem)",
    overflow: "hidden",
    "@media (max-width: 1024px)": {
      flex: 1,
    },
  },
  image: ({ ratio }: { ratio: number }) => ({
    width: 700 * ratio,
    height: 700,
    overflow: "hidden",
    borderRadius: "var(--border-radius-xs, 0.25rem)",
    "& img": {
      objectFit: "contain",
    },
    "@media (max-width: 768px)": {
      width: 480 * ratio,
      height: 480,
    },
    "@media (max-width: 1024px)": {
      width: 540 * ratio,
      height: 540,
    },
  }),
  photoDetail: {
    minWidth: "min(280px, 100%)",
    width: "320px",
    maxWidth: "100%",
    padding: "var(--spacing-lg, 1.5rem)",
    boxShadow: "0 0 0 1px var(--background)",
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1024px)": {
      width: "100%",
      alignItems: "center",
      textAlign: 'center'
    },
  },
  photoTitle: {
    fontSize: "var(--font-size-lg, 1.5rem)",
    fontWeight: "bold",
    margin: "0",
    "@media (max-width: 1024px)": {
      fontSize: "var(--font-size-md, 1rem)",
    },
  },
  userInfo: {
    fontSize: "var(--font-size-sm, 0.875rem)",
    marginTop: "var(--spacing-xl, 2rem)",
    fontWeight: "bolder",
    display: "inline-flex",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      marginTop: "var(--spacing-md, 1rem)",
    },
  },
  photoCreated: {
    fontSize: "var(--font-size-sm, 0.875rem)",
    marginTop: "var(--spacing-md, 1rem)",
    color: "var(--secondary-foreground)",
    display: "inline-flex",
    alignItems: "center",
  },
  clockIcon: {
    marginRight: "var(--spacing-xs, 0.5rem)",
  },
  userImage: {
    borderRadius: "50%",
    marginRight: "var(--spacing-xs, 0.5rem)",
  },
});

export default useStyles;
