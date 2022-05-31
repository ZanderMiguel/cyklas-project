import { useTheme } from "@mui/material/styles";

function useStyle() {
  const theme = useTheme();

  const designs = {
    RequestContainer_Style: {
      margin: "0em 0em 0.8em 0em",
      width: "relative",
      height: "30em",
      overflowY: "auto",
      padding: "0.8em 1em",
    },
    RequestContainer_Sub_Style: {
      width: "100%",
      display: "flex",
      gap: "0.8em",
      padding: "0.5em 0.5em 0.8em 0.5em",
      borderRadius: "0.3em",
      backgroundColor: "#F9F9F9",
    },
    RequestContainer_Sub2_Style: {},
    RequestDivider_Style: {
      margin: "0.5em 1em 0.5em 3.4em",
    },
    Divider_Style: {
      margin: "0.5em 0em 0.5em 1.5em",
    },
    GeneralContainer_Style: {
      margin: "0.8em 0em 0.8em 0em",
      width: "relative",
      height: "25em",
      overflowY: "auto",
      paddingLeft: "1em",
    },
    GeneralContainer_Sub_Style: {
      width: "100%",
      display: "flex",
      gap: "0.8em",
      "&: hover": {
        cursor: "pointer",
        textDecoration: "underline",
      },
    },
    GeneralContainer_Sub2_Style: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    GeneralContainer_Sub3_Style: {
      width: "100%",
      height: "20rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return { designs };
}

export default useStyle;
