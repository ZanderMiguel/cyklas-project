import { useTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

function useStyle() {
  const theme = useTheme();
  const designs = {
      AccountInformation_Typography_Style: {
        marginBottom: "0.6em",
        fontSize: "1.2em", 
        fontWeight: "600", 
        color: "#3F3D56" 
    },
    RightContainer1_GridItem_Style: {
        height: "max-content",
        width: "relative",
        [theme.breakpoints.down('md')]: {
            display: "none"
        } 
    },
    Subtitle1_Style: {
        marginLeft: "1.9em", 
        width: "relative",
        fontWeight: "600", 
        fontSize: "0.9em", 
        textTransform: "uppercase", 
        color: "#007FFF" 
    },
    Body1_Style: { 
        margin: "0em 0em 1.8em 2.1em",
        width: "relative",
        fontWeight: "500", 
        fontSize: "0.8em", 
        fontStyle: "italic", 
        color: "#8E8E8E" 
    },
    RightContainer2_GridItem_Style: {
        height: "max-content",
        marginBottom: "8em",
        [theme.breakpoints.down('sm')]: {
            height: "max-content",
        } 
    },
    Subtitle1_Responsive_Style: {
        margin: "0em 0em 0em 2.3em",
        fontWeight: "600",
        fontSize: "0.9em", 
        color: "#007FFF",
        textTransform: "uppercase",
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
        [theme.breakpoints.between('sm', 'md')]: {
            display: "initial"
        },
        [theme.breakpoints.down('sm')]: {
            margin: "0em 0em 0em 0em",
            width: "100%",
            display: "initial"
        }
    },
    Body1_Responsive_Style: { 
        margin: "0em 0em 0.8em 2.5em",
        fontWeight: "500", 
        fontStyle: "italic",
        fontSize: "0.8em", 
        color: "#8E8E8E",
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
        [theme.breakpoints.between('sm', 'md')]: {
            display: "initial"
        },
        [theme.breakpoints.down('sm')]: {
            margin: "0em 0em 0.8em 0em",
            width: "100%",
            display: "initial"
        } 
    },
    Stack_Style: { 
        margin: "0em 0em 0.8em 2.5em",
        [theme.breakpoints.between('sm', 'md')]: {
            margin: "0.5em 0em 0.8em 2.5em",
        },
        [theme.breakpoints.down('sm')]: {
            margin: "0.5em 0em 0.8em 0em",
        }   
    },
    Stack2_Style: { 
        margin: "0em 0em 0.8em 2.5em",
        [theme.breakpoints.between('sm', 'md')]: {
            margin: "0em 0em 0.8em 2.5em",
        },
        [theme.breakpoints.down('sm')]: {
            margin: "0em 0em 0.8em 0em",
        }   
    },
    TextFieldLabel_Style: { 
        fontWeight: "500", 
        color: "#3F3D56", 
        fontSize: "0.9em" 
    },
    TextField_Style: { 
        fontWeight: "500", 
        color: "#3F3D56", 
        fontSize: "0.5em" 
    },
    Button_Container_Style: { 
        display: "flex",
        width: "relative", 
        height: "max-content",
        [theme.breakpoints.down('sm')]: {
            marginTop: "0.8em"
        }
    },
    BoxFlexGrow_Style: { 
        height: "relative",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        } 
    },
    BoxFlexGrow2_Style: { 
        height: "relative",
        [theme.breakpoints.up('md')]: {
            display: "none"
        } 
    },
    Save_Button_Style: {
        textTransform: "Capitalize",
        padding: "0.1em 2.5em",
        backgroundColor: green[700],
        fontSize: "0.9em", 
        fontWeight: "600",
        color: 'white',
        borderRadius: '0.3em',
        boxShadow: "none",
        '&:hover': {
          backgroundColor: green[800],
          boxShadow: "none"
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            padding: "0.3em 2.5em",
        }
    }
  };
  return { designs };
}

export default useStyle;
