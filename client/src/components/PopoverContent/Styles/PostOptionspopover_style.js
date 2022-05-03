import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Container_Style: {
        width: "auto",
        height: "max-content",
        padding: "0em 0.5em",
        backgroundColor: "#F6F6F6"
    },
    Nav_Style: { 
        width: '100%'
    },
    EditPostContainer_Style: {
        backgroundColor: "#6D6D6D",
        display: "flex",
        gap: "1em"
    },
    BorderColorOutlined_Style: {
        color: "#585670", 
        margin: "0em", 
        fontSize: "1.4em" 
    },
    EditPost_Typography_Style: {
        color: "white",
        fontSize: "0.8em",
        fontWeight: "500"
    },
    DeletePostContainer_Style: {
        display: "flex",
        gap: "1em"
    },
    DeleteOutlineOutlined_Style: { 
        color: "#585670",
        margin: "0em", 
        fontSize: "1.4em" 
    },
    DeletePost_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.8em",
        fontWeight: "500"
    },
};

return {designs};
}

export default useStyle;  