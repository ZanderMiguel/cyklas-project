import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Container_Style: {
        width: "auto",
        height: "max-content",
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 1px"
    },
    Nav_Style: { 
        width: '100%' 
    },
    EditRoomContainer_Style: {
        display: "flex",
        alignItems: "center",
        gap: "0.8em"
    },
    BorderColorOutlined_Style: {
        color: "#585670",
        margin: "0em", 
        fontSize: "1.4em" 
    },
    EditRoom_Typography_Style: {
        color: "#585670",
        fontSize: "0.8em",
        fontWeight: "500"
    },
    LeaveRoomContainer_Style: {
        display: "flex",
        alignItems: "center",
        gap: "0.8em"
    },
    DoorFrontOutlined_Style: { 
        color: "#585670",
        margin: "0em", 
        fontSize: "1.4em" 
    },
    LeaveRoom_Typography_Style: {
        color: "#585670",
        fontSize: "0.8em",
        fontWeight: "500"
    },
};

return {designs};
}

export default useStyle;  