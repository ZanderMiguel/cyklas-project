import { useTheme } from "@mui/material/styles";
import { grey } from '@mui/material/colors';

function useStyle(){
    const theme = useTheme();
    const designs = {
        SearchDashboard_Responsive_Style: { 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            height: "auto", 
            width: "100%",
            marginBottom: "0.5em",
            [theme.breakpoints.up('md')]: {
                display: "none"
            },
            [theme.breakpoints.down('md')]: {
                display: "initial"
            } 
        },
        SelectRoom_Style: {
            width: '35%',
            paddingTop: '0em',
            [theme.breakpoints.down('md')]: {
                width: '95%'
            }
        },
        SearchDashboard_Style: {
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            height: "auto", 
            width: "auto",
            [theme.breakpoints.down('md')]: {
                display: "none"
            } 
        },
        Search_TextField_Style: {
            width: "relative",
            height: "auto",
            backgroundColor: "#F9F9F9",
            margin: "0em 1.3em 2em 1.3em"
        },
        RightContainer_GridItem_Responsive_Style: { 
            height: "auto", 
            width: "relative", 
            marginTop: "1em",
            [theme.breakpoints.up('md')]: {
                display: "none"
            },
            [theme.breakpoints.down('md')]: {
                display: "initial"
            }
        },
        RightContainer_GridItem_Style: { 
            height: "100vh", 
            width: "relative", 
            marginBottom: "1em",
            [theme.breakpoints.down('md')]: {
                display: "none"
            }
        },
        OverFlow_Responsive_Style: { 
            height: "15em", width: "relative", overflowY: "auto" 
        },
        ProfessorList_Container_Style: {
            marginTop: '0.2em',
            width: 'auto',
            flexGrow: 1,
            height: 'max-content',
        },
        OverFlow2_Responsive_Style: { 
            height: "15em", width: "relative", overflowY: "auto" 
        },
        MainContainer_Style: { 
            width: "relative", height: "auto"
        },
        OverFlow_Style: { 
            height: "30vh", width: "relative", overflowY: "auto" 
        },
        MainContainer2_Style: { 
            marginTop: "1.2em", width: "relative", height: "auto"
        },
        OverFlow2_Style: { 
            height: "55vh", width: "relative", overflowY: "auto" 
        },

};
    return {designs};
}
    export default useStyle;