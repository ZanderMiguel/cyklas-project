import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
    Container_Style: { 
      marginTop: "5em",
      padding: "2.5em 0em",
      [theme.breakpoints.down('sm')]: {
        marginTop: "0em",
        }  
    },
    BoxContainer_Style: { 
      display: "flex", 
      width: "relative", 
      height: "auto" 
    },
    Heading_Style: {
      width: "auto",
      height: "max-content",
      color: "#3F3D56",
      fontSize: "2.5em",
      fontWeight: "700",
      textAlign: "center",
      borderLeft: "8px solid #007FFF",
      paddingLeft: "1em",
      [theme.breakpoints.down('sm')]: {
        textAlign: "left",
      },
    },
    Content_GridItem_Style: { 
      marginTop: "2em", 
      padding: "0em"
    },
    Content_Container_Style: { 
      width: "relative", 
      height: "auto", 
      padding: "0em 4em",
      [theme.breakpoints.down('md')]: {
        padding: "0em 1.5em",
      }, 
    },
    BoxFlexGrow_Style: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
          }, 
    },
    Content_Heading_Style: {
        width: "auto",
        height: "max-content",
        color: "#007FFF",
        fontSize: "1.3em",
        fontWeight: "700",
        textTransform: "uppercase"
    },
    Content_Body_Style: {
        marginTop: "0.5em",
        width: "auto",
        height: "max-content",
        color: "#3F3D56",
        fontSize: "0.9em",
        fontWeight: "400"
    },
  };

  return { designs };
}

export default useStyle;
