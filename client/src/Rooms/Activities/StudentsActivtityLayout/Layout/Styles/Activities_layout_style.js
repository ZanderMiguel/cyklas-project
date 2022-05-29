import { useTheme } from "@mui/material/styles";

function useStyle() {
  const theme = useTheme();
  const designs = {
    Activity_Tiles: {
      marginBottom: "0.6em",
      "&: hover": {
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      },
    },
    // Lesson: {
    //   backgroundColor: '#F3F3F3',
    //   width: '100%',
    //   height: 'auto',
    //   borderBottom: '1px solid #D4D4D4',
    //   boxShadow: '#f3f3f3',
    // },
    // Lesson_Typography: {
    //   textTransform: 'Uppercase',
    //   color: '#3F3D56',
    //   fontSize: '18px',
    //   padding: '15px 45px',
    //   fontWeight: '600',
    // },
    Accordion_Style: {
      width: "100%",
      backgroundColor: "white",
      border: "1px solid #DBDBDB",
      boxShadow: "none",
    },
    AccordionSummary_Style: {
      padding: "0em 1em 0em 1.5em",
      [theme.breakpoints.down("sm")]: {
        padding: "0em 1em 0em 0.8em",
      },
    },
    Activity_Icon_Activity_Type: {
      display: "flex",
      height: "relative",
      width: "100%",
    },
    Activity_Information_Style: {
      display: "flex",
      width: "100%",
    },
    Activity_Typography: {
      width: "5em",
      display: "flex",
      flexGrow: 1,
      fontSize: "15px",
      textTransform: "Uppercase",
      fontWeight: "600",
      color: "#3F3D56",
      paddingTop: "7px",
    },
    Type_Typography: {
      width: "8em",
      color: "#3F3D56",
      fontWeight: "500",
      fontSize: "13px",
      paddingTop: "7px",
      marginRight: "0.5em",
      textAlign: "left",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    Due_Date: {
      color: "#3F3D56",
      fontSize: "13px",
      fontWeight: "bold",
      paddingTop: "7px",
      marginLeft: "0.5em",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    Date: {
      width: "150px",
      color: "#3F3D56",
      fontSize: "13px",
      textAlign: "center",
      fontWeight: "bold",
      paddingTop: "7px",
      marginLeft: "0.5em",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    Seperator: {
      width: "2px",
      height: "12px",
      backgroundColor: "#C9C9C9",
      marginTop: "11px",
      marginLeft: "0.5em",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    Time: {
      width: "60px",
      color: "#3F3D56",
      fontSize: "13px",
      fontWeight: "bold",
      textTransform: "Uppercase",
      paddingTop: "7px",
      marginLeft: "0.5em",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    Status: {
      width: "10em",
      color: "#007FFF",
      fontSize: "13px",
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "Uppercase",
      paddingTop: "7px",
      marginLeft: "0.5em",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    StatusIcon_Style: {
      fontSize: "0.7em",
      color: "#007FFF",
      margin: "1em 0em 0em 1em",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
      [theme.breakpoints.down("sm")]: {
        display: "initial",
      },
    },
    Button_Container_Style: {
      display: "flex",
      width: "90%",
      margin: "5px 45px",
      [theme.breakpoints.down("sm")]: {
        margin: "5px 15px",
      },
    },
    Button_FlexGrow: {
      flexGrow: 1,
    },
    Button_Container_Sub: {
      width: "max-content",
      display: "flex",
      gap: "5px",
    },
    Accordion_Details_Style: {
      padding: "0.8em 1.5em",
    },
    Activity_Details_Style: {
      width: "relative",
      marginBottom: "0.5em",
    },
    Type_Due_Date_Style: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    Type_Responsive_Typography: {
      width: "auto",
      color: "#3F3D56",
      fontWeight: "500",
      fontSize: "13px",
      padding: "0.8em 0em 0em 0em",
    },
    DueDate_Responsive: {
      display: "flex",
      flexWrap: "wrap",
    },
    DueDate_Responsive_Typography: {
      width: "max-content",
      color: "#3F3D56",
      fontWeight: "500",
      fontSize: "13px",
      marginRight: "15px",
    },
    Date_Responsive_Typography: {
      width: "150px",
      color: "#3F3D56",
      fontWeight: "600",
      fontSize: "13px",
      marginRight: "15px",
    },
    SeperatorV: {
      width: "2px",
      height: "12px",
      backgroundColor: "#C9C9C9",
      marginTop: "3px",
      marginRight: "15px",
    },
    Responsive_Time: {
      width: "70px",
      textTransform: "Uppercase",
      color: "#3F3D56",
      fontWeight: "600",
      fontSize: "13px",
    },
    Empty_Box_FlexGrow: {
      flexGrow: 1,
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    Empty_Box_FlexGrow2: {
      flexGrow: 1,
      [theme.breakpoints.up("md")]: {
        display: "initial",
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    Points_Postedby_Style: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "5px",
      },
      [theme.breakpoints.up("sm")]: {
        marginTop: "5px",
      },
    },
    Points: {
      display: "flex",
      gap: "15px",
    },
    Points_Typography: {
      color: "#3F3D56",
      fontSize: "13px",
      width: "max-content",
      marginBottom: "5px",
    },
    Points_Value_Typography: {
      color: "#3F3D56",
      fontSize: "13px",
      fontWeight: "600",
      width: "max-content",
      marginBottom: "5px",
    },
    Postedby_Style: {
      width: "relative",
    },
    Postedby_Typography: {
      color: "#3F3D56",
      fontSize: "13px",
      textTransform: "Capitalize",
      fontWeight: "bold",
    },
    Date_Posted_Typography: {
      color: "#716F87",
      fontSize: "13px",
    },
    Divider1: {
      width: "relative",
      margin: "0px 20px",
      [theme.breakpoints.down("sm")]: {
        margin: "0px 5px 0px 5px",
      },
    },
    Activity_Details2_Style: {
      width: "relative",
    },
    Instructions_Typography: {
      color: "#3F3D56",
      fontSize: "13px",
      fontWeight: "bold",
      textTransform: "Uppercase",
      width: "auto",
    },
    Instructions2_Typography: {
      color: "#3F3D56",
      fontSize: "13px",
      width: "auto",
      padding: "0px 0px 0px 25px",
      margin: "0px 30px 4px 30px",
      [theme.breakpoints.down("sm")]: {
        margin: "0px 0px 4px 0px",
        padding: "0px 0px 0px 8px",
      },
    },
    Attach_File_Style: {
      width: "40%",
      margin: "10px 0px 0px 50px",
      padding: "10px 20px",
      display: "flex",
      gap: "15px",
      borderRadius: "10em",
      border: "2px solid #D4D4D4",
      [theme.breakpoints.down("md")]: {
        width: "45%",
        margin: "10px 0px 0px 50px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "70%",
        margin: "10px 0px 0px 5px",
      },
    },
    Activity_FileName_Typography: {
      color: "#3F3D56",
      fontSize: "13px",
      fontWeight: "bold",
      width: "auto",
    },
    DocumentFile_Typography: {
      color: "#3F3D56",
      fontSize: "12px",
      width: "auto",
    },
    Divider2: {
      width: "relative",
      margin: "0px 20px 10px 20px",
      [theme.breakpoints.down("sm")]: {
        margin: "0px 5px 10px 5px",
      },
    },
    ViewHomework_Button_Style: {
      color: "#0069D3",
      fontWeight: "600",
      textTransform: "Capitalize",
      padding: "0.5em 0em",
      width: "100%",
      "&: hover": {
        backgroundColor: "#F9F9F9",
      },
    },
  };
  return { designs };
}

export default useStyle;
