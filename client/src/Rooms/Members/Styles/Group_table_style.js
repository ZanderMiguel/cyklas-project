import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();
  const designs = {
      Total_Style: {
        height: "auto",
        width: "relative",
        marginTop: "0.5em",
        padding: "0.3em 0em",
        display: "flex"
      },
      BoxFlexGrow_Style: {
        height: "relative"
      },
      TotalGroups_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.7em",
        fontWeight: "500",
        textTransform: "uppercase"
      },
      Group_Container_Style: {
        backgroundColor: "#F6F6F6"
      },
      Group_Container_Sub_Style: {
        display: "flex",
        padding: "10px"
      },
      Groups_Typography_Style: { 
        marginLeft: 1.5, 
        fontWeight: 600, 
        fontSize: '1.1em',
        color: "#3F3D56",
        textTransform: "uppercase" 
      },
      DeleteGroups_Button_Style: {
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
      Accordion_Style: { 
          padding: "0em 0em 0.5em 0em", 
          backgroundColor: "transparent", 
          boxShadow: "none" 
      },
      AccordionSummary_Style: { 
          padding: "0em 1.7em 0em 1.5em" 
      },
      GroupName_Typography_Style: {
        width: "100%",
        color: "#3F3D56",
        paddingTop: "0.7em",
        fontSize: "0.9em",
        fontWeight: "500"
      },
      List_Style: { 
          padding: "0.3em 1.5em 0.3em 3.5em", 
          display: "flex" 
      }
  };
  return { designs };
}

export default useStyle;

