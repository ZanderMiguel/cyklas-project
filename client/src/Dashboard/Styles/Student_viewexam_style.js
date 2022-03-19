import { useTheme } from "@mui/material/styles"

function useStyle(){
const theme = useTheme()

const designs = {
    Right_Container_GridItem_Style: { 
        margin: "0.5em 0em",
        [theme.breakpoints.between('sm', 'md')]: {
            margin: "0.5em 0em 0em 0em",
        }
    },
    Right_Container_Style: {
        width: "100%",
        height: "auto",
        paddingBottom: "1em",
        backgroundColor: "transparent"
    },
    Header_Style: {
        padding: "0.5em 1.5em",
        height: "auto",
        width: "relative",
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            padding: "0.5em",
        },
    },
    Icon_Exam_Style: {
        height: "relative",
        width: "auto",
        display: "flex",
        gap: "0.8em"
    },
    Exam_Typography_Style: {
        paddingTop: "0.6em",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "uppercase",
        color: "#3F3D56",
        width: "25em",
        height: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "13em",
        },
    },
    BoxFlexGrowHeader_Style: {
        height: "relative"
    },
    BoxFlexGrow_Style: {
        height: "relative",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    Professor_Date_Style: {
        width: "auto",
        height: "max-content"
    },
    Professor_Typography_Style: {
        marginBottom: "0.1em",
        fontSize: "0.8em",
        fontWeight: "600",
        textAlign: "right",
        color: "#3F3D56",
        width: "auto",
        height: "max-content",
        [theme.breakpoints.down('sm')]: {
            textAlign: "left",
        },
    },
    Date_Typography_Style: {
        fontSize: "0.7em",
        fontWeight: "500",
        color: "#716F87",
        width: "auto",
        height: "max-content"
    },
    DividerRight_Style: {
        width: "relative",
        margin: "0em 1.5em",
        [theme.breakpoints.down('sm')]: {
            margin: "0em 0.5em",
        },
    },
    Instructions_Score_Style: {
        display: "flex",
        width: "relative",
        height: "auto",
        padding: "0.5em 1.5em 1.5em 1.5em",
        [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap",
            padding: "0.5em 0.5em 1.5em 0.5em",
        }
    },
    Instructions_Typography_Style: {
        width: "50em",
        height: "auto",
        color: "#8E8E8E",
        fontSize: "0.8em",
        textTransform: "none",
        [theme.breakpoints.between('sm', 'md')]: {
            width: "30em",
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }

    },
    ScoreText_Typography_Style: {
        marginRight: "0.5em",
        width: "auto",
        height: "max-content",
        color: "#8E8E8E",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "uppercase",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    Score_Typography_Style: {
        width: "auto",
        height: "max-content",
        color: "#007FFF",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "uppercase",
        textAlign: "right",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    BoxFlexGrow_Responsive_Style: {
        height: "relative",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
        [theme.breakpoints.down('sm')]: {
            display: "initial",
            marginBottom: "0.2em"
        }
    },
    ScoreText_Responsive_Typography_Style: {
        marginRight: "0.5em",
        width: "auto",
        height: "max-content",
        color: "#8E8E8E",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "uppercase",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
        [theme.breakpoints.down('sm')]: {
            display: "initial",
            marginBottom: "0.2em"
        }
    },
    Score_Responsive_Typography_Style: {
        width: "auto",
        height: "max-content",
        color: "#007FFF",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "uppercase",
        textAlign: "right",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
        [theme.breakpoints.down('sm')]: {
            display: "initial",
            marginBottom: "0.2em"
        }
    },
    Exam_Sheet_Style: {
        width: "relative",
        height: "auto"
    },
    Item_Style: {
        backgroundColor: "#FEFEFE",
        margin: "0em 1.5em 0.8em 1.5em",
        padding: "0.5em 0em",
        width: "relative",
        height: "auto",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 0px 1px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        [theme.breakpoints.down('sm')]: {
            margin: "0em 0.5em 0.8em 0.5em",
        }
    },
    Points_Typography_Style: {
        marginRight: "0.5em",
        height: "max-content",
        width: "max-content",
        color: "#007FFF",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none",
        textAlign: "right"
    },
    PointsText_Typography_Style: {
        height: "max-content",
        width: "max-content",
        color: "#007FFF",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none",
        textAlign: "right",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    Question_Style: {
        display: "flex",
        width: "relative",
        height: "auto",
        padding: "0em 1em"
    },
    Item_Typography_Style: {
        height: "max-content",
        width: "max-content",
        color: "#3F3D56",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none",
        marginRight: "0.5em"
    },
    Item_Question_Typography_Style: {
        height: "max-content",
        width: "45em",
        color: "#3F3D56",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none",
        [theme.breakpoints.between('sm', 'md')]: {
            width: "40em",
        }
    },
    Choices_Style: {
        padding: "0.2em 1em 0.2em 2.5em",
        display: "flex",
        flexDirection: "column",
        gap: "0.3em",
        width: "relative",
        height: "auto"
    },
    ChoiceA_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#975DF5",
        opacity: "0.2"
    },
    Choice_Typography_Style: {
        height: "max-content",
        width: "max-content",
        color: "White",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none"
    },
    ChoiceB_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#F55D5D",
        opacity: "0.2"
    },
    ChoiceC_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#6CCF53"
    },
    ChoiceD_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#F1B04E",
        opacity: "0.2"
    },
    CorrectAnswer_Typography_Style: {
        height: "max-content",
        width: "relative",
        padding: "0em 3.3em",
        color: "#49B854",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none"
    },
    Essay_Input_Style: {
        backgroundColor: "transparent",
        borderBottom: "1px solid #DBDBDB" ,
        fontSize: "0.8em",
        fontWeight: "500",
        color: "#3F3D56",
        padding: "0.4em 0em"
    },
    Choice1_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#975DF5"
    },
    Checkbox_Style: {
        height: "1.3em",
        width: "1.3em"
    },
    Choice2_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#F55D5D",
        opacity: "0.2"
    },
    Choice3_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#6CCF53"
    },
    Choice4_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#F1B04E"
    },
    Graded_Typography_Style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9F9F9",
        color: "#49B854",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "uppercase",
        width: "auto",
        height: "max-content",
        margin: "0.5em 1.6em",
        padding: "0.2em 0em",
        [theme.breakpoints.down('sm')]: {
            margin: "0.5em 0.5em",
        }
    }
};

return {designs};
}
export default useStyle;
