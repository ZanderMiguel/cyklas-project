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
    Tabs_Style: {
        padding: "0em 1.5em",
        borderRight: 1,
        width: "relative",
        borderColor: 'transparent',
    },
    Tab1_Style: { 
        marginRight: "0.02em",
        width: "50%",
        padding: "0.5em 0em" 
    },
    PresentationCriteria_Typography_Style: { 
        width: "7em",
        textAlign: "center",
        fontSize: "1em",
        textTransform: "Capitalize",
        color: "#3F3D56",
        fontWeight: '600' 
    },
    Tab2_Style: { 
        width: "50%",
        padding: "0.2em 0em" 
    },
    Members_Typography_Style: { 
        textAlign: "center",
        fontSize: "1em",
        textTransform: "Capitalize",
        color: "#3F3D56",
        fontWeight: '600' 
    },
    Divider_Style: { 
        width: "relative",
        margin: "0em 1.3em 0.7em 1.3em" 
    },
    PresentationCriteria_Box_Style: {
        margin: "0em 1.3em 0em 1.3em",
        height: "30em",
        // height: "34em",
        width: "relative",
        overflowY: "auto"
    },

    // Presentation Criteria
    Exam_Checkbox_Style: {
        display: "flex",
        gap: "0.3em",
        width: "relative",
        height: "auto"
    },
    Checkbox_Style: {
        color: "#BABABA",
        width: "2.2em",
        height: "2.2em",
        margin: "0.1em 0em 0em 0em"
    },
    Exam_Typography_Style: {
        color: "#007FFF",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "Uppercase",
        textAlign: "center",
        width: "max-content",
        padding: "0.6em 0em 0em 0em",
        height: "relative"
    },
    Note_Typography_Style: {
        color: "#74728C",
        fontSize: "0.6em",
        fontWeight: "500",
        textTransform: "none",
        padding: "0.1em 1.8em",
        textAlign: "center",
        width: "relative",
        height: "max-content"
    },
    Menu_Style: {
        margin: "1.5em 0em 0.2em 0em",
        display: "flex",
        gap: "0.3em",
        width: "relative",
        height: "auto",
        backgroundColor: "#F0F0F0"
    },
    MenuSub_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "Capitalize",
        textAlign: "left",
        width: "70%",
        height: "max-content"
    },
    Points_Typography_Style: {
        color: "#007FFF",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "none",
        textAlign: "center",
        width: "30%",
        height: "max-content"
    },
    Divider2_Style: { 
        width: "relative" 
    },
    Attribute_Style: {
        marginTop: "0.3em",
        display: "flex",
        gap: "0.3em",
        width: "relative",
        height: "auto"
    },
    AttributeName_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.8em",
        fontWeight: "500",
        textTransform: "Capitalize",
        textAlign: "left",
        width: "70%",
        height: "auto",
        marginLeft: "0.8em"
    },
    Points_TextField_Style: {
        width: "30%",
        height: "auto",
        borderBottom: "1px solid #D4D4D4"
    },

    // Presentation Members
    Student_Style: {
        marginBottom: "0.1em",
        display: "flex",
        gap: "0.2em",
        height: "auto",
        width: "relative"
    },
    Student_CheckBox_Style: {
        color: "#BABABA",
        width: "2em",
        height: "2em",
        marginTop: "0.3em"
    },
    AvatarIcon_Avatar_Style: {
        height: "2em",
        width: "2em"
    },
    StudentName_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.7em",
        fontWeight: "600",
        textTransform: "Capitalize",
        textAlign: "left",
        width: "9.5em",
        height: "max-content",
        marginTop: "0.9em"
    },
    MicOff_IconButton_Style: {
        height: "1.2em",
        width: "1.2em",
        marginTop: "0.2em",
        backgroundColor: "transparent",
        "&: hover": {
            backgroundColor: "transparent"
        }
    },
    MicOffIcon_Style: {
        color: "#8E8E8E",
        fontSize: "0.8em"
    },
    PushPin_IconButton_Style: {
        height: "1.2em",
        width: "1.2em",
        marginTop: "0.2em",
        backgroundColor: "transparent",
        "&: hover": {
            backgroundColor: "transparent"
        }
    },
    PushPinIcon_Style: {
        color: "#007FFF",
        fontSize: "0.8em"
    },
    Apply_Score_Button_Style: {
        marginTop: "6em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "relative",
        height: "auto"
    },
    ApplyScore_Button_Style: {
        backgroundColor: "#0069D3",
        textTransform: "Capitalize",
        fontWeight: "bold",
        width: "max-content",
        padding: "0.3em 2.5em",
        borderRadius: "0.4em"
    },
    Note_Typography2_Style: {
        padding: "0em 1.5em",
        marginTop: "1em",
        color: "#74728C",
        fontSize: "0.7em",
        fontWeight: "500",
        textTransform: "none",
        textAlign: "center",
        width: "relative",
        height: "max-content"
    },

};

return {designs};
}
export default useStyle;
