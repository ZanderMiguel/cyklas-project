import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Post_Style: {
        width: "100%", 
        height: "auto", 
        margin: "1.5em 0em", 
        paddingBottom: "1em", 
        border: " 1px solid #DBDBDB", 
        borderRadius: "0.8em"
    },
    User_Style: {
        padding: "0.5em 1em",
        gap: "0.5em",
        display: "flex",
        width: "relative",
        height: "auto"
    },
    AvatarPost_Style: {
        margin: "0.01em 0em",
        height: "2.2em",
        width: "2.2em"
    },
    User_Date_Style: {
        margin: "0.1em 0em"
    },
    UserName_Typography_Style: {
        fontSize: "0.9em",
        color: "#3F3D56",
        fontWeight: "600"
    },
    Date_Style: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "0.01em"
    },
    Date_Typography_Style: {
        width: "max-content",
        fontSize: "0.5em",
        color: "#3F3D56",
        fontWeight: "500",
        fontStyle: "Italic",
        marginRight: "1em"
    },
    Slash_Typography_Style: {
        fontSize: "0.5em",
        color: "#3F3D56",
        fontWeight: "500",
        fontStyle: "Italic",
        marginRight: "1em"
    },
    Time_Typography_Style: {
        width: "max-content",
        fontSize: "0.5em",
        color: "#3F3D56",
        fontWeight: "500",
        fontStyle: "Italic"
    },
    BoxFlexGrow_Style: {
        flexGrow: 1,
        height: "relative"
    },
    Option_IconButton_Style: {
        height: "1.3em",
        width: "1.3em",
        margin: "0.2em 0em"
    },
    MoreVertIcon_Style: {
        color: "#8E8E8E",
        fontSize: "0.8em"
    },
    Post_Content_Style: {
        padding: "0.3em 4em",
        marginBottom: "0.5em",
        width: "relative",
        height: "auto",
        [theme.breakpoints.down('sm')]: {
            padding: "0.3em 2em",
        }
    },
    Post_Typography_Style: {
        textAlign: "justify",
        fontSize: "0.8em",
        color: "#3F3D56",
        fontWeight: "600"
    },
    Divider_Style: {
        width: "relative",
        margin: "0em 1.6em 0.3em 1.2em"
    },
    View_Comments_Style: {
        height: "auto",
        width: "relative",
        paddingLeft: "1.2em",
        marginBottom: "0.4em",
        display: "flex",
        gap: "0.5em"
    },
    View_Comments_Typography_Style: {
        height: "max-content", 
        width: "max-content", 
        color: "#3F3D56",
        fontSize: "0.6em",
        padding: "0.01em 0em",
        margin: "0.6em 0em"
    },
    Dropdown_IconButton_Style: {
        marginTop: "0.1em",
        height: "1em",
        width: "1em"
    },
    KeyboardArrowDownIcon_Style: {
        color: "#9C9C9C",
        fontSize: "0.8em"
    },
    Write_Comment_Style: {
        padding: "0em 1.7em 0em 1em",
        display: "flex",
        gap: "0.5em",
        width: "relative",
        height: "auto"
    },
    AvatarComment_Style: {
        marginTop: "0.1em"
    },
    Comment_TextField_Style: {
        width: "100%",
    },
    Send_IconButton_Style: {
        height: "1.5em",
        width: "1.5em"
    },
    SendIcon_Style: {
        color: "#3F3D56",
        fontSize: "0.8em"
    },
    BoxTileContainer: {
        className: "Tiles1", 
        width: "100%", 
        height: "auto", 
        marginBottom: "0.1em",
        padding: "0.2em 0em",
        display: "flex",
        border: " 2px solid #DBDBDB", 
        borderRadius: "0.8em",
        "&: hover": {
            cursor: "pointer",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        }
    },
    ActivityContainer: {
        className: "Activity-container",
        display: "flex",
        width: "100%"
    },
    ActivityName_User_Date: {
        className: "Activity-name-User-date",
        height: "max-content", 
        margin: "0.4em 0em 0.3em 0em",
        flexGrow: 1
    },
    ActivityName: {
        className: "Activity-name", 
        // display: "flex", 
        // gap: "5px"
    },
    // Lesson: {
    //     fontSize: "14px",
    //     fontWeight: "600",
    //     color: "#3F3D56",
    //     textTransform: "Uppercase"
    // },
    Activity: {
        fontSize: "0.9em",
        width: "25em",
        fontWeight: "600",
        textTransform: "Uppercase",
        color: "#3F3D56",
        [theme.breakpoints.up('md')]: {
            width: "35em",
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: "27em",
        },
        [theme.breakpoints.down('sm')]: {
            width: "13em",
          },
    },
    User_Date: {
        className: "User-date", 
        width: "relative", 
        display: "flex", 
        gap: "0.2em"
    },
    Professor: {
        width: "auto",
        fontSize: "0.5em",
        fontWeight: "600",
        textTransform: "Capitalize",
        fontStyle: "Italic",
        color: "#3F3D56",
        [theme.breakpoints.down('sm')]: {
            width: "17em",
        }
    },
    Date: {
        width: "20em",
        fontSize: "0.5em",
        fontWeight: "500",
        textTransform: "none",
        fontStyle: "Italic",
        color: "#3F3D56",
        [theme.breakpoints.up('md')]: {
            width: "25em",
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: "12em",
        },
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    BoxOptions: {
        className: "option", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    },
    IconButtonOptions: {
        ariaLabel: "options",
        height: "1.3em",
        width: "1.3em",
        margin: "0em 0.7em"
    },
    MoreVertIcon: {
        color: "#8E8E8E",
        fontSize: "0.8em"
    },
};



return {designs};
}

export default useStyle;