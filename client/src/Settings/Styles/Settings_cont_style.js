import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();
  const designs = {
    SettingsContainer_GridContainer_Style: { 
        margin: "0.8em 0em", 
    },
    LeftContainer_GridItem_Style: {
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    },
    RightContainer_GridItem_Style: { 
        marginTop: "0.2em", 
        padding: "1.2em 0em 1em 2em",
        [theme.breakpoints.down('md')]: {
            marginTop: "0em", 
            padding: "1.2em 0em 1em 0em",
        }, 
    },
    Paper_Style: {
        height: '80vh',
        padding: '1em 0em 0em 0em',
        margin: "0em 1.5em 0em 0em",
        boxShadow: "none"
    },
    List_Responsive_Style: {
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
    },
    List_Style: { 
        height: "max-content", 
        padding: "0em" 
    },
    ListItemIcon_Style: { 
        width: "max-content", 
        paddingRight: "0em" 
    },
    LockIcon_Style: { 
        margin: "0em", 
        fontSize: "1.4em" 
    },
    ListItemText_Style: {  
        width: "max-content" 
    },
    Profile_Typography_Style: { 
        fontSize: "0.9em", 
        fontWeight: "500", 
        color: "#3F3D56" 
    },
    AccountBoxIcon_Style: { 
        margin: "0em", 
        fontSize: "1.4em" 
    },
    Account_Typography_Style: { 
        fontSize: "0.9em", 
        fontWeight: "500", 
        color: "#3F3D56" 
    },
  };
  return { designs };
}

export default useStyle;
