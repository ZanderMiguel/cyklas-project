import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();
  const designs = {
      Accordion_Style: {
        paddingBottom: "0.5em",
        width: "auto",
        flexGrow: 1,
        backgroundColor: "transparent", 
        boxShadow: "none",
        "&: hover": {
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
        }
      },
      AccordionSummary_Style: { 
          padding: "0em 1.5em" 
      },
      GroupName_Typography_Style: {
        width: "auto",
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        color: "#3F3D56",
        fontSize: "0.9em",
        fontWeight: "500"
      },
      TotalMembers_Typography_Style: {
        width: "max-content",
        textAlign: "right",
        display: "flex",
        alignItems: "center",
        color: "#3F3D56",
        fontSize: "0.9em",
        fontWeight: "500"
      },
      GroupName_Typography_Style: {
        width: "auto",
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        color: "#3F3D56",
        fontSize: "0.9em",
        fontWeight: "500"
      },
      List_Style: { 
          padding: "0em 1.5em", 
          display: "flex",
          alignItems: "center" 
      }
  };
  return { designs };
}

export default useStyle;

