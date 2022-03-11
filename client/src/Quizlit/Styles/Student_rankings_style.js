import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    GridContainer_Style: { 
        marginTop: "1em",
        [theme.breakpoints.down('md')]: {
            marginBottom: "1em",
        }
    },
    StudentRankings_Typography_Style: {
        color: "#3F3D56",
        fontSize: "1.1em",
        fontWeight: "500",
        width: "max-content",
        height: "max-content",
    },
    BacktoConference_GridItem_Style: {
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
        [theme.breakpoints.down('md')]: {
            display: "initial"
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: "0.5em"
        }
    },
    Responsive_BacktoConference_Button_Style: {
        float: "right",
        backgroundColor: "#0069D3",
        textTransform: "Capitalize",
        fontWeight: "bold",
        width: "auto",
        paddingLeft: "2em",
        paddingRight: "2em",
        borderRadius: "0.4em",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    Top_Students_Style: {
        padding: "1em 0em 0em 0em",
        height: "auto",
        borderBottom: "1px solid #DBDBDB",
        borderRadius: "0.5em 0.5em 0em 0em",
        [theme.breakpoints.down('sm')]: {
            padding: "0.7em 0em 0em 0em",
        } 
    },
    Congratulations_Typography_Style: {
        color: "#3F3D56",
        padding: "0.1em 0em",
        fontSize: "1.3em",
        fontWeight: "600",
        textTransform: "Uppercase",
        textAlign: "center",
        width: "100%",
        height: "max-content",
        backgroundColor: "#F6F6F6"
    },
    Top3_Students_Style: {
        marginTop: "0.5em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    Top2_Style: {
        padding: "2em 1.2em",
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    AvatarIcon_Avatar_Style: {
        height: "8em",
        width: "8em"
    },
    TopStudentName_Typography_Style: {
        color: "#3F3D56",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "Capitalize",
        textAlign: "center",
        width: "100%",
        height: "max-content"
    },
    Place_Style: {
        marginTop: "0.4em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.2em",
        width: "100%",
        height: "auto"
    },
    SecondPlace_Typography_Style: {
        color: "#808080",
        fontSize: "1em",
        fontWeight: "600",
        textTransform: "Capitalize",
        textAlign: "center",
        width: "max-content",
        height: "relative",
        padding: "0.5em 0em",
        marginRight: "1em"
    },
    TopStudent_BoxFlexGrow_Style: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    Top1_Style: {
        padding: "1.5em 1.2em 9em 1.2em",
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    FirstPlace_Typography_Style: {
        color: "#F9A826",
        fontSize: "1em",
        fontWeight: "600",
        textTransform: "Capitalize",
        textAlign: "center",
        width: "max-content",
        height: "relative",
        padding: "0.5em 0em",
        marginRight: "1em"
    },
    Top3_Style: {
        padding: "2em 1.2em",
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    ThirdPlace_Typography_Style: {
        color: "#EB7E42",
        fontSize: "1em",
        fontWeight: "600",
        textTransform: "Capitalize",
        textAlign: "center",
        width: "max-content",
        height: "relative",
        padding: "0.5em 0em",
        marginRight: "1em"
    },
    Responsive_Top3_Students_Style: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
        [theme.breakpoints.down('sm')]: {
            display: "initial"
        }
    },
    ResponsiveTop_Style: {
        padding: "1em 1.2em",
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    StudentList_GridItem_Style: { 
        paddingTop: "1em",
        height: "relative",
        [theme.breakpoints.down('md')]: {
            paddingTop: "0em",
            height: "auto"
        }
    },
    Result_Style: {
        margin: "0em 0em 0em 1em",
        width: "relative",
        height: "100%",
        backgroundColor: "#FCFCFC",
        borderBottom: "1px solid #DBDBDB",
        borderRadius: "0.5em 0.5em 0em 0em",
        [theme.breakpoints.down('md')]: {
            margin: "0em",
            height: "relative"
        }
    },
    Heading_Style: {
        padding: "0.5em 1em 0.5em 1em",
        backgroundColor: "#007FFF",
        width: "relative",
        height: "auto",
        borderRadius: "0.5em 0.5em 0em 0em",
        display: "flex"
    },
    StudentName_Typography_Style: {
        color: "white",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "Uppercase",
        width: "max-content",
        height: "max-content",
        paddingTop: "0.2em"
    },
    StudenList_BoxFlexGrow_Style: { 
        height: "relative"
    },
    Score_Typography_Style: {
        color: "white",
        fontSize: "0.8em",
        fontWeight: "600",
        textAlign: "center",
        textTransform: "Uppercase",
        width: "15%",
        height: "max-content",
        paddingTop: "0.2em"
    },
    Student_Style: {
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#FCFCFC",
        width: "relative",
        height: "auto",
        padding: "0.1em 1em"                                     
    },
    StudentList_AvatarIcon_Avatar_Style: {
        height: "2.1em",
        width: "2.1em"
    },
    StudentList_StudentName_Typography_Style: {
        width: "65%",
        height: "relative",
        textTransform: "Capitalize",
        textAlign: "Left",
        fontSize: "0.8em",
        fontWeight: "500",
        color: "#3F3D56",
        padding: "1em 0em 0em 0em"
    },
    StudentList_BoxFlexGrow_Style: { 
        height: "relative"
    },
    StudentList_Score_Typography_Style: {
        width: "15%",
        height: "relative",
        textTransform: "Capitalize",
        textAlign: "Center",
        fontSize: "0.8em",
        fontWeight: "500",
        color: "#3F3D56",
        padding: "1em 0em 0em 0em"
    },
    StudentList_Divider_Style: {
        width: "relative",
        margin: "0em 1em" 
    },
    Student_Container_Style: {
        padding: "0.2em 0em",
        width: "relative",
        height: "24em",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto"
    },
    Buttons_GridItem_Style: { 
        paddingTop: "1em",
        [theme.breakpoints.down('md')]: {
            paddingTop: "1em",
        } 
    },
    Buttons_Style: { 
        display: "flex",
        width: "relative" 
    },
    BacktoConference_Button_Style: {
        backgroundColor: "#0069D3",
        textTransform: "Capitalize",
        fontWeight: "bold",
        width: "max-content",
        paddingLeft: "2em",
        paddingRight: "2em",
        borderRadius: "0.4em",
        [theme.breakpoints.down('md')]: {
            display: "none"
        }
    },
    Buttons_BoxFlexGrow_Style: { 
        height: "relative",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    DismissClass_Button_Style: {
        backgroundColor: "#F74747",
        textTransform: "Capitalize",
        fontWeight: "bold",
        width: "max-content",
        paddingLeft: "2em",
        paddingRight: "2em",
        borderRadius: "0.4em",
        "&: hover": {
            backgroundColor: "#F74747"
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    Buttons_BoxFlexGrow_Style2: { 
        height: "relative",
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
        [theme.breakpoints.down('md')]: {
            display: "initial"
        },
        [theme.breakpoints.down('sm')]: {
            display: "none"
        } 
    },
};

return {designs};
}

export default useStyle;
