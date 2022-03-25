import { useTheme } from "@mui/material/styles";
import { grey } from '@mui/material/colors';

function useStyle(){
    const theme = useTheme();
    const designs = {
        Answer_A_Style: {
            width: "relative",
            height: "auto",
            display: "flex",
            justifyContent: "flex-start",
            gap: "0.8em",
            backgroundColor: "#8E58E7",
            padding: "0.8em 1.6em",
            borderRadius: "0.5em"
        },
        
        Answer_B_Style: { 
            width: "relative",
            height: "auto",
            display: "flex",
            gap: "0.8em",
            backgroundColor: "#E75858",
            padding: "0.8em 1.6em",
            borderRadius: "0.5em"
        },
        Answer_C_Style: { 
            width: "relative",
            height: "auto",
            display: "flex",
            gap: "0.8em",
            backgroundColor: "#6CCF53",
            padding: "0.8em 1.6em",
            borderRadius: "0.5em"
        },
        Answer_D_Style: { 
            width: "relative",
            height: "auto",
            display: "flex",
            gap: "0.8em",
            backgroundColor: "#F1B04E",
            padding: "0.8em 1.6em",
            borderRadius: "0.5em"
        },
        Checkbox_Style: {
            height: "1.3em",
            width: "1.3em",
            color: grey[50],
            '&.Mui-checked': {
                color: grey[50],
            },
        },
        Answer_Option_Typography_Style: {
            width: "95%",
            height: "auto",
            wordWrap: 'break-word',
            color: "white",
            fontSize: "0.8em",
            fontWeight: "600"
        },


};
    return {designs};
}
    export default useStyle;