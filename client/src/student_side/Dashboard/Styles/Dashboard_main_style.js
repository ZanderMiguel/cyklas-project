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
            border: "1px solid #DBDBDB",
            borderRadius: "0.3em",
            padding: "0.3em 0.8em",
            display: "flex",
            gap: "0.5em",
            alignItems: "center",
            height: "auto", 
            width: "relative",
            "&: hover": {
                border: "1px solid #007FFF",
                transition: "all 300ms"
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
            [theme.breakpoints.up('lg')]: {
                display: "none"
            },
            [theme.breakpoints.down('lg')]: {
                display: "initial"
            }
        },
        RightContainer_GridItem_Style: { 
            height: "100vh", 
            width: "relative", 
            marginBottom: "1em",
            [theme.breakpoints.down('lg')]: {
                display: "none"
            }
        },
        OverFlow_Responsive_Style: { 
            height: "15em", width: "relative", overflowY: "auto", borderTop: "1px solid #DBDBDB", borderBottom: "1px solid #DBDBDB" 
        },
        ProfessorList_Container_Style: {
            marginTop: '0.2em',
            width: 'auto',
            flexGrow: 1,
            height: 'max-content',
        },
        OverFlow2_Responsive_Style: { 
            height: "15em", width: "relative", overflowY: "auto", borderTop: "1px solid #DBDBDB", borderBottom: "1px solid #DBDBDB" 
        },
        MainContainer_Style: { 
            width: "relative", height: "auto"
        },
        OverFlow_Style: { 
            height: "30vh", width: "relative", overflowY: "auto", borderTop: "1px solid #DBDBDB", borderBottom: "1px solid #DBDBDB"
        },
        MainContainer2_Style: { 
            marginTop: "1.2em", width: "relative", height: "auto"
        },
        OverFlow2_Style: { 
            height: "60vh", width: "relative", overflowY: "auto", borderTop: "1px solid #DBDBDB", borderBottom: "1px solid #DBDBDB"
        },

};
    return {designs};
}
    export default useStyle;