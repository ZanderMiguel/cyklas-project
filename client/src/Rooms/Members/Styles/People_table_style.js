import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();
  const designs = {
      Total_Style: {
        height: "auto",
        width: "relative",
        padding: "0.3em 0em",
        display: "flex"
      },
      BoxFlexGrow_Style: {
        height: "relative"
      },
      TotalProf_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.7em",
        fontWeight: "500",
        textTransform: "uppercase"
      },
      Professor_Container_Style: {
        backgroundColor: "#F6F6F6"
      },
      Professor_Container_Sub_Style: {
        display: "flex",
        padding: "10px"
      },
      Professor_Typography_Style: { 
        marginLeft: 1.5, 
        fontWeight: 600, 
        fontSize: '1.1em',
        color: "#3F3D56",
        textTransform: "uppercase"  
      },
      TotalStud_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.7em",
        fontWeight: "500",
        textTransform: "uppercase"
      },
      Student_Container_Style: {
        backgroundColor: "#F6F6F6"
      },
      Student_Container_Sub_Style: {
        display: "flex",
        padding: "10px"
      },
      Students_Typography_Style: {
        marginLeft: 1.5, 
        fontWeight: 600, 
        fontSize: '1.1em',
        color: "#3F3D56",
        textTransform: "uppercase"  
      },
      Leave_Button_Style: {
        backgroundColor: "#F74747", 
        textTransform: "Capitalize", 
        fontSize: "0.8em", 
        fontWeight: "600", 
        padding: "0.2em 0em", 
        width: "15em",
        "&: hover": { 
            backgroundColor: "#F24545", 
            boxShadow: "none"
        }
      },
      RemoveAllStudents_Button_Style: {
        backgroundColor: "#F74747", 
        textTransform: "Capitalize", 
        fontSize: "0.8em", 
        fontWeight: "600", 
        padding: "0.2em 0em", 
        width: "15em",
        "&: hover": { 
            backgroundColor: "#F24545", 
            boxShadow: "none"
        }
      },
        List_Style: {
            padding: "0em"
        },
        ListItem_Style: { 
            padding: "0.4em 1.7em 0.4em 1.3em" 
        },
        Prof_Typography_Style: { 
            color: "#3F3D56", 
            fontSize: "0.9em", 
            fontWeight: "600" 
        },
        Student_Typography_Style: { 
            color: "#3F3D56", 
            fontSize: "0.9em", 
            fontWeight: "500" 
        }
  };
  return { designs };
}

export default useStyle;

