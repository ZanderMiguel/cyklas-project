import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {

    Student_List_Style: {
        margin: "1.3em 0em",
        width: "100%",
        height: "93vh",
        [theme.breakpoints.down('md')]: {
            display: "none"
           }
    },
    Sort_Container_Style: {
        padding: "0em 1em 0em 1.6em",
        display: "flex"
    },
    AllStudent_Checkbox_Style: {
        color: "#BABABA"
    },
    AllStudentLabel_Checkbox_Style: {
        color: "#3F3D56"
    },
    FlexGrow_Box_Style: {
        flexGrow: 1
    },
    SortBy_Autocomplete_Style: {
        width: 120,
        height: "relative",
        paddingBottom: "0.7em"
    },
    Divider_Style: {
        width: "relative",
        margin: "0em 1em"
    },
   Student_Container_Style: {
    display: "flex",
    flexDirection: "column", 
    width: "auto", 
    height: "auto"
   },
   Student_Box_Style: {
    display: "flex",
    padding: "0.1em 0.9em",
    width: "relative",
    boxShadow: "none",
    marginTop: "0.1em",
    "&: hover": {
        cursor: "pointer",
        backgroundColor: "#FCFCFC",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 0px 2px -1px, rgba(0, 0, 0, 0.3) 0px 2px 3px -1px",
        transition: "0.2s"
    }                                     
    },
    Student_Checkbox_Style: {
        color: "#BABABA",
        margin: "0em 0.05em 0em 0.1em"
    },
    Student_Avatar_Style: {
        margin: "0em 0.5em 0em 0em"
    },
    StudentName_Typography_Style: {
        height: "max-content",
        width: "40%",
        textTransform: "Capitalize",
        textAlign: "Left",
        fontSize: "0.8em",
        fontWeight: "500",
        color: "#3F3D56",
        margin: "0.7em 0em"
    },
    StudentScore_Typography_Style: {
        height: "max-content",
        width: "17%",
        textAlign: "center",
        fontSize: "0.8em",
        fontWeight: "500",
        color: "#3F3D56",
        margin: "0.7em 0em"
    },
    Activity_Style: {
        margin: "1.3em 0em",
        width: "100%",
        height: "93vh",
        display: "flex",
        flexDirection: "column",
        gap: "0.2em"
    },
    ActivityInfo_Style: {
        height: "auto",
        paddingBottom: "1em",
        backgroundColor: "#FCFCFC",
        border: "1px solid #DBDBDB"
    },
    ActivityTitle_Style: {
        // display: "flex",
        // gap: "0.3em",
        padding: "0em 2.5em",
        height: "auto",
        width: "relative"
    },
    // Lesson_Typography_Style: {
    //     height: "max-content",
    //     fontSize: "16px",
    //     fontWeight: "500",
    //     textTransform: "Uppercase",
    //     color: "#3F3D56",
    //     margin: "12px 0px"
    // },
    Activity_Typography_Style: {
        height: "max-content",
        fontSize: "1em",
        fontWeight: "500",
        textTransform: "Capitalize",
        color: "#3F3D56",
        margin: "0.7em 0em" 
    },
    ActivityInstructions_Style: {
        height: "auto",
        width: "relative",
        margin: "0.1em 0em",
        padding: "0.1em 2.5em"
    },
    ActivityInstructionsHead_Typography_Style: {
        width: "100%",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "Uppercase",
        color: "#3F3D56"
    },
    ActivityInstructions_Typography_Style: {
        width: "100%",
        fontSize: "0.8em",
        fontWeight: "500",
        color: "#3F3D56",
        marginTop: "0.1em"
    },
    Attach_File_Style: {
        margin: "0.5em 0em",
        width: "50%",
        padding: "0.5em 1em",
        display: "flex", 
        gap: "0.9em",
        border: "1px solid #D4D4D4",
        borderRadius: "0.3em",
        "&: hover": {
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "80%"
           }
    },
    ActivityFileName_Style: {
        width: "83%",
        marginTop: "0.05em"
    },
    ActivityFileName_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.8em",
        fontWeight: "bold",
        width: "100%",
        height: "max-content"
    },
    DocumentFile_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.7em",
        width: "max-content",
        height: "max-content" 
    },
    Divider2_Style: {
        width: "relative", 
        margin: "0em 2.5em"
    },
    ViewComments_Style: {
        height: "auto",
        width: "relative",
        margin: "0.05em 2.5em",
        display: "flex",
        gap: "0.5em"
    },
    ViewComments_Typography_Style: {
        height: "max-content", 
        width: "max-content", 
        color: "#3F3D56",
        fontSize: "0.6em",
        padding: "0.01em 0em",
        margin: "0.6em 0em"
    },
    IconButtonDropdown_Style: {
        marginTop: "0.1em",
        height: "1em",
        width: "1em"
    },
    DropdownIcon_Style: {
        color: "#9C9C9C",
        fontSize: "0.8em"
    },
    WriteComment_Style: {
        width: "relative",
        margin: "0em 2.5em",
        height: "auto",
        display: "flex",
        gap: "0.5em"
    },
    UserAvatar_Style: {
        marginTop: "0.1em"
    },
    Comment_TextField_Style: {
        width: "100%"
    },
    IconButtonSend_Style: {
        height: "1.5em",
        width: "1.5em"
    },
    SendIcon_Style: {
        color: "#3F3D56",
        fontSize: "0.8em"
    },
    StudentWorks_Style: {
        paddingBottom: "1em",
        height: "50%",
        backgroundColor: "#FCFCFC",
        border: "1px solid #DBDBDB"
    },
    StudentWorks_Typography_Style: {
        height: "max-content",
        width: "relative",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "Uppercase",
        color: "#3F3D56",
        margin: "0.7em 2.5em"
    },
    Divider2_Style: {
        width: "relative",
        margin: "0em 2.5em"
    },
    UploadedFilesContainer_Style: {
        marginTop: "0.2em",
        height: "80%",
        width: "relative",
        padding: "0.3em 3.2em 0.3em 2.5em",
        overflowY: "auto"
    },
    StudentUploadedFileContainer_Style: {
        backgroundColor: "#F6F6F6",
        padding: "0.3em",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 0px 2px -1px, rgba(0, 0, 0, 0.3) 0px 2px 3px -1px",
        height: "90%",
        width: "100%",
    },
    StudentName_Typography_Style2: {
        color: "#3F3D56",
        fontSize: "0.8em",
        fontWeight: "500",
        width: "100%",
        height: "max-content",
        marginBottom: "0.3em"
    },
    Attach_File_Style2: {
        textDecoration: "none",
        backgroundColor: "#FCFCFC",
        width: "relative",
        padding: "0.5em 1em",
        display: "flex", 
        gap: "0.9em",
        border: "1px solid #D4D4D4",
        borderRadius: "0.3em",
        "&: hover": {
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        }
    },
};



return {designs};
}

export default useStyle;