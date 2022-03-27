import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Container_Style: {
        width: 130
    },
    Nav_Style: { 
        width: '100%' 
    },
    EditContainer_Style: {
        display: "flex"
    },
    Edit_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.9em"
    },
    LeaveRoomContainer_Style: {
        display: "flex"
    },
    LeaveRoom_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.9em"
    },
};

return {designs};
}

export default useStyle;  