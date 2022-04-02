import { useTheme } from "@mui/material/styles";
import { grey } from '@mui/material/colors';

function useStyle(){
    const theme = useTheme();
    const designs = {
        Search_TextField_Style: {
            width: "relative",
            height: "auto",
            backgroundColor: "#F9F9F9",
            margin: "0em 1.3em 2em 1.3em"
        },
        MainContainer_Style: { 
            marginLeft: "1em", width: "relative", height: "auto"
        },
        OverFlow_Style: { 
            height: "10em", width: "relative", overflowY: "auto" 
        },
        MainContainer2_Style: { 
            marginLeft: "1em", marginTop: "1.2em", width: "relative", height: "auto"
        },
        OverFlow2_Style: { 
            height: "16em", width: "relative", overflowY: "auto" 
        },

};
    return {designs};
}
    export default useStyle;