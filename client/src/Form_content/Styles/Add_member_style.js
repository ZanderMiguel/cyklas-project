import { useTheme } from "@mui/material/styles";

function useStyle() {
  const theme = useTheme();
  const designs = {
    Stack_Style: {
      width: "relative",
      margin: "0em 2em 2em 1.5em",
      [theme.breakpoints.down("md")]: {
        margin: "0em 0em 0.8em 0em",
      },
    },
    TextFieldLabel_Style: {
      width: "50em",
      marginBottom: "0.5em",
      fontWeight: "500",
      color: "#3F3D56",
      fontSize: "0.8em",
    },
    TextFieldLabel2_Style: {
      width: "50em",
      marginBottom: "0.5em",
      fontWeight: "700",
      color: "#3F3D56",
      fontSize: "0.8em",
    },
    TextField_Style: {
      width: "relative",
      fontWeight: "500",
      color: "#3F3D56",
      fontSize: "0.5em",
    },
    TextField2_Style: {
      width: "100%",
      fontWeight: "500",
      color: "white",
      fontSize: "0.5em",
      backgroundColor: "#DBDBDB",
    },
    Send_IconButton_Style: {
      height: "35px",
      width: "35px",
      margin: "2px 0px",
    },
    SendIcon_Style: {
      color: "#3F3D56",
      fontSize: "20px",
    },
  };
  return { designs, theme };
}

export default useStyle;
