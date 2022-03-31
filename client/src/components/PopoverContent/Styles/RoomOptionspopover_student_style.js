import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Container_Style: {
        width: "auto",
        height: "max-content",
        padding: "0em 0.5em",
        backgroundColor: "#FCFCFC",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 1px"
    },
    Nav_Style: { 
        width: '100%' 
    },
    EditRoomContainer_Style: {
        display: "flex",
        gap: "1em"
    },
    BorderColorOutlined_Style: {
        color: "#585670", 
        margin: "0em", 
        fontSize: "1.4em" 
    },
    EditRoom_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.8em",
        fontWeight: "500"
    },
    LeaveRoomContainer_Style: {
        display: "flex",
        gap: "1em"
    },
    DoorFrontOutlined_Style: { 
        color: "#585670",
        margin: "0em", 
        fontSize: "1.4em" 
    },
    LeaveRoom_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.8em",
        fontWeight: "500"
    },
};

return {designs};
}

export default useStyle;  