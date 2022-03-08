import { useTheme } from "@mui/material/styles"

function useStyle(){
const theme = useTheme()

const designs = {
    Left_Container_Style: {
        width: "100%",
        height: "86vh",
        backgroundColor: "#FCFCFC",
        border: "1px solid #DBDBDB"
    },
    MessageArea_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "Capitalize",
        textAlign: "center",
        width: "100%",
        height: "max-content",
        padding: "0.7em 0em"
    },
    Divider_Style: { 
        width: "relative",
        margin: "0em 1.3em 0.7em 1.3em" 
    },
    Message_Box_Style: {
        borderBottom: "1px solid #E4E4E4",
        margin: "0em 1.3em 0em 1.3em",
        height: "27.8em",
        // height: "31.8em",
        width: "relative",
        overflowY: "auto"
    },
    Members_Comment_Style: {
        display: "flex",
        gap: "0.3em",
        height: "auto",
        width: "relative"
    },
    AvatarIcon_Avatar_Style: {
        height: "1.9em",
        width: "1.9em"
    },
    Member_Time_Style: {
        width: "100%"
    },
    MemberName_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.7em",
        fontWeight: "600",
        textAlign: "left",
        width: "100%",
        height: "max-content"
    },
    MessageTime_Typography_Style: {
        color: "#8E8E8E",
        fontSize: "0.6em",
        textAlign: "left",
        width: "100%",
        height: "max-content"
    },
    Message_Typography_Style: {
        color: "#3F3D56",
        margin: "0em 0em 1.2em 4em",
        fontSize: "0.7em",
        wordWrap: "break-word",
        textAlign: "left",
        width: "relative",
        height: "auto"
    },
    Write_Comment_Style: {
        padding: "0em 1.5em 0em 1em",
        width: "relative",
        height: "auto",
        display: "flex",
        gap: "0.3em",
        marginTop: "0.5em"
    },
    AvatarIcon_Avatar_Style2: {
        margin: "0.3em 0em 0em 0em"
    },
    Message_TextField_Style: {
        width: "relative",
        height: "auto",
        backgroundColor: "#F9F9F9",
    },
    Send_IconButton_Style: {
        height: "1.3em",
        width: "1.3em"
    },
    SendIcon_Style: {
        color: "#3F3D56",
        fontSize: "0.9em"
    }
};

return {designs};
}
export default useStyle;
