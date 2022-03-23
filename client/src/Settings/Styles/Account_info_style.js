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
        height: "26em",
        [theme.breakpoints.down('md')]: {
            display: "none"
        } 
    },
    RightContainer2_GridItem_Style: { 
        height: "26em",
        [theme.breakpoints.down('sm')]: {
            height: "max-content",
        } 
    },
    Subtitle1_Style: { 
        margin: "0em 0em 0em 0em", 
        fontWeight: "600", 
        fontSize: "1em", 
        color: "#3F3D56",
        [theme.breakpoints.between('sm', 'md')]: {
            marginLeft: "1.7em",
            display: "inline-block",
            display: "initial"
        },
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    Body1_Style: { 
        margin: "0em 0em 0.8em 0em", 
        fontWeight: "500", 
        fontSize: "0.8em", 
        color: "#696779",
        [theme.breakpoints.between('sm', 'md')]: {
            marginLeft: "2.1em",
            display: "initial"
        }, 
        [theme.breakpoints.up('sm')]: {
            display: "none"
        } 
    },
    Stack_Style: { 
        margin: "0em 0em 0.8em 2em",
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
            width: "100%"
        }
    }
  };
  return { designs };
}

export default useStyle;
