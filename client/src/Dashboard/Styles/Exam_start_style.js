import { useTheme } from "@mui/material/styles";
import { grey } from '@mui/material/colors';

function useStyle(){
    const theme = useTheme();
    const designs = {
        Timer_GridItem_Style: {
            position: "sticky",
            top: 0
        },
        TimerMain_Style: {
            width: "relative",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#007FFF",
            borderRadius: "0em 0em 1em 1em",
            padding: "0.3em 0em"
        },
        Timer_Style: {
            display: "flex",
            gap: "0.5em",
            width: "auto",
            height: "max-content"
        },
        TimerOutlinedIcon_Style: {
            color: "white",
            fontSize: "2em"
        },
        Timer_Typography_Style: {
            color: "white",
            fontSize: "1.2em",
            fontWeight: "600",
            marginTop: "0.1em",
            height: "max-content",
            width: "auto"
        },
        BoxFlexGrowHeader_Style: {
            height: "relative"
        },
        BoxFlexGrow_Style: {
            height: "relative"
        },
        DueDate_Term_Style: {
            width: "relative",
            height: "max-content"
        },
        DueDate_Style: {
            display: "flex",
            gap: "0.5em",
            height: "max-content",
            width: "auto"
        },
        DueDate_Typography_Style: {
            color: "#3F3D56",
            fontSize: "0.8em",
            fontWeight: "500",
            height: "max-content",
            width: "auto"
        },
        Date_Typography_Style: {
            color: "#3F3D56",
            fontSize: "0.8em",
            fontWeight: "600",
            height: "max-content",
            width: "auto"
        },
        Term_Style: {
            display: "flex",
            gap: "0.5em",
            height: "max-content",
            width: "auto"
        },
        TermText_Typography_Style: {
            color: "#3F3D56",
            fontSize: "0.8em",
            fontWeight: "500",
            height: "max-content",
            width: "auto"
        },
        Term_Typography_Style: {
            color: "#8E8E8E",
            fontSize: "0.8em",
            fontWeight: "500",
            height: "max-content",
            width: "auto"
        },
        Header_Style: {
            padding: "0.5em 0em",
            height: "auto",
            width: "relative",
            display: "flex",
            [theme.breakpoints.down('sm')]: {
                flexWrap: "wrap"
            },
        },
        Exam_DueDateTerm_Style: {
            height: "relative",
            width: "auto",
            display: "flex",
            gap: "0.8em",
            [theme.breakpoints.down('sm')]: {
                width: "100%",
                marginBottom: "0.5em"
            },
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
                width: "100%",
            },
        },
        DividerRight_Style: {
            width: "relative"
        },
        Instructions_Typography_Style: {
            width: "relative",
            height: "auto",
            color: "#3F3D56",
            fontSize: "0.8em",
            textTransform: "none",
            margin: "0.5em 0em 3em 0em"
    
        },

        ExamName_Typography_Style: {
            width: "relative",
            height: "max-content",
            padding: "0.5em 1.5em",
            backgroundColor: "#007FFF",
            color: "white",
            fontSize: "0.9em",
            fontWeight: "600",
            textTransform: "uppercase",
            borderRadius: "0.5em 0.5em 0em 0em",
            [theme.breakpoints.down('sm')]: {
                padding: "0.5em 0.8em"
            }
        },
        Container_Style: {
            height: "auto",
            width: "relative",
            paddingBottom: "2em"
        },
        // Instructions_Typography_Style: {
        //     width: "relative",
        //     height: "auto",
        //     padding: "0.4em 1.7em",
        //     marginBottom: "1em",
        //     color: "#8E8E8E",
        //     fontSize: "0.8em",
        //     [theme.breakpoints.down('sm')]: {
        //         padding: "0.4em 0.9em"
        //     }
        // },
        ExamName_GridItem_Style: {
            marginTop: "0.5em"
        },
        Question_GridItem_Style: {
            padding: "0.5em 0em",
            marginTop: "1em"
        },
        Type_Points_Style: {
            width: "relative",
            height: "auto",
            display: "flex",
            marginBottom: "0.5em"
        },
        Type_Typography_Style: {
            width: "auto",
            height: "max-content",
            color: "#3F3D56",
            fontSize: "0.7em",
            fontWeight: "500",
            textTransform: "uppercase"
        },
        Points_Typography_Style: {
            width: "auto",
            height: "max-content",
            color: "#007FFF",
            fontSize: "0.8em",
            fontWeight: "600"
        },
        Question_Body_Style: {
            width: "relative",
            height: "auto",
            display: "flex",
            padding: "0.3em 0em",
            backgroundColor: "#FCFCFC",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
            // boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            // boxShadow: "rgba(50, 50, 93, 0.25) 0px 0px 1px -1px, rgba(0, 0, 0, 0.3) 0px 1px 2px -1px",
        },
        Question_Container_Style: {
            width: "60%",
            height: "auto",
            [theme.breakpoints.down('sm')]: {
                width: "100%"
            }
        },
        Question_Style: {
            width: "relative",
            height: "auto",
            display: "flex",
            gap: "0.8em",
            padding: "0.3em 1.4em",
            [theme.breakpoints.down('sm')]: {
                padding: "0.3em 1em",
            }
        },
        Divider_Style: {
            width: "relative",
            margin: "0em 1.8em 0em 1.4em",
            [theme.breakpoints.down('sm')]: {
                margin: "0em 1em 0em 1em",
            }
        },
        Item_Typography_Style: {
            width: "auto",
            height: "max-content",
            fontSize: "0.8em",
            fontWeight: "600",
            color: "#3F3D56"
        },
        Question_Typography_Style: {
            width: "90%",
            height: "auto",
            wordWrap: 'break-word',
            color: "#3F3D56",
            fontSize: "0.8em",
            fontWeight: "600"
        },
        Choices_Style: {
            width: "relative",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.3em",
            padding: "0.5em 1.8em 1em 1.8em",
            [theme.breakpoints.down('sm')]: {
                padding: "0.5em 1em 1em 1em",
            }
        },

        Answer_A_Style: {
            width: "relative",
            height: "auto",
            display: "flex",
            gap: "0.8em",
            backgroundColor: "#975DF5",
            padding: "0.3em 1.2em",
            borderRadius: "0.3em",
            "&: hover": { 
                cursor: "pointer",
                backgroundColor: "#8647ED",
                transition: "all 300ms"
            }
        },
        AnswerAF_Typography_Style: {
            width: "relative",
            height: "max-content",
            fontSize: "0.8em",
            fontWeight: "600",
            color: "#3F3D56",
            backgroundColor: "#EAEAEA",
            padding: "0.5em 1.9em",
            borderRadius: "0.3em",
            "&: hover": { 
                cursor: "pointer",
                backgroundColor: "#8647ED",
                color: "white",
                transition: "all 300ms"
            }
        },
        Answer_AT_Style: { 
            width: "relative",
            height: "auto",
            display: "flex",
            gap: "0.8em",
            backgroundColor: "#975DF5",
            padding: "0.3em 1.2em",
            borderRadius: "0.3em",
            "&: hover": { 
                cursor: "pointer",
                backgroundColor: "#8647ED",
                transition: "all 300ms"
            }
        },
        // Answer_A2_Style: {
        //     width: "relative",
        //     height: "auto",
        //     display: "flex",
        //     gap: "0.8em",
        //     backgroundColor: "#813FED",
        //     padding: "0.3em 1.2em",
        //     borderRadius: "0.3em",
        //     "&: hover": { 
        //         cursor: "pointer",
        //         backgroundColor: "#8647ED",
        //         transition: "all 300ms"
        //     }
        // },
        Exam_Item_Style: {
            height: "1.5em",
            width: "1.5em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "5em"
        },
        AnswerA_Typography_Style: {
            width: "auto",
            height: "max-content",
            fontSize: "0.8em",
            fontWeight: "600",
            color: "#975DF5"
        },
        Answer_Typography2_Style: {
            width: "90%",
            height: "auto",
            wordWrap: 'break-word',
            color: "white",
            fontSize: "0.8em",
            fontWeight: "600",
            paddingTop: "0.2em"
        },
        
        Answer_B_Style: { 
            width: "relative",
            height: "auto",
            display: "flex",
            gap: "0.8em",
            backgroundColor: "#F55D5D",
            padding: "0.3em 1.2em",
            borderRadius: "0.3em",
            "&: hover": { 
                cursor: "pointer",
                backgroundColor: "#F34F4F",
                transition: "all 300ms"
            }
        },
        AnswerBF_Typography_Style: {
            width: "relative",
            height: "max-content",
            fontSize: "0.8em",
            fontWeight: "600",
            color: "#3F3D56",
            backgroundColor: "#EAEAEA",
            padding: "0.5em 1.9em",
            borderRadius: "0.3em",
            "&: hover": { 
                cursor: "pointer",
                backgroundColor: "#F34F4F",
                color: "white",
                transition: "all 300ms"
            }
        },
        Answer_BT_Style: { 
            width: "relative",
            height: "auto",
            display: "flex",
            gap: "0.8em",
            backgroundColor: "#F55D5D",
            padding: "0.3em 1.2em",
            borderRadius: "0.3em",
            "&: hover": { 
                cursor: "pointer",
                backgroundColor: "#F34F4F",
                transition: "all 300ms"
            }
        },
        // Answer_B2_Style: { 
        //     width: "relative",
        //     height: "auto",
        //     display: "flex",
        //     gap: "0.8em",
        //     backgroundColor: "#F04949",
        //     padding: "0.3em 1.2em",
        //     borderRadius: "0.3em",
        //     "&: hover": { 
        //         cursor: "pointer",
        //         backgroundColor: "#F34F4F",
        //         transition: "all 300ms"
        //     }
        // },
        AnswerB_Typography_Style: {
            width: "auto",
            height: "max-content",
            fontSize: "0.8em",
            fontWeight: "600",
            color: "#F55D5D"
        },
        Answer_C_Style: { 
            width: "relative",
            height: "auto",
            display: "flex",
            gap: "0.8em",
            backgroundColor: "#6CCF53",
            padding: "0.3em 1.2em",
            borderRadius: "0.3em",
            "&: hover": { 
                cursor: "pointer",
                backgroundColor: "#64C94B",
                transition: "all 300ms"
            }
        },
        AnswerCF_Typography_Style: {
            width: "relative",
            height: "max-content",
            fontSize: "0.8em",
            fontWeight: "600",
            color: "#3F3D56",
            backgroundColor: "#EAEAEA",
            padding: "0.5em 1.9em",
            borderRadius: "0.3em",
            "&: hover": { 
                cursor: "pointer",
                backgroundColor: "#64C94B",
                color: "white",
                transition: "all 300ms"
            }
        },
        Answer_CT_Style: { 
            width: "relative",
            height: "auto",
            display: "flex",
            gap: "0.8em",
            backgroundColor: "#6CCF53",
            padding: "0.3em 1.2em",
            borderRadius: "0.3em",
            "&: hover": { 
                cursor: "pointer",
                backgroundColor: "#64C94B",
                transition: "all 300ms"
            }
        },
        AnswerC_Typography_Style: {
            width: "auto",
            height: "max-content",
            fontSize: "0.8em",
            fontWeight: "600",
            color: "#6CCF53"
        },
        Answer_D_Style: { 
            width: "relative",
            height: "auto",
            display: "flex",
            gap: "0.8em",
            backgroundColor: "#F1B04E",
            padding: "0.3em 1.2em",
            borderRadius: "0.3em",
            "&: hover": { 
                cursor: "pointer",
                backgroundColor: "#EAA845",
                transition: "all 300ms"
            }
        },
        AnswerDF_Typography_Style: {
            width: "relative",
            height: "max-content",
            fontSize: "0.8em",
            fontWeight: "600",
            color: "#3F3D56",
            backgroundColor: "#EAEAEA",
            padding: "0.5em 1.9em",
            borderRadius: "0.3em",
            "&: hover": { 
                cursor: "pointer",
                backgroundColor: "#EAA845",
                color: "white",
                transition: "all 300ms"
            }
        },
        Answer_DT_Style: { 
            width: "relative",
            height: "auto",
            display: "flex",
            gap: "0.8em",
            backgroundColor: "#F1B04E",
            padding: "0.3em 1.2em",
            borderRadius: "0.3em",
            "&: hover": { 
                cursor: "pointer",
                backgroundColor: "#EAA845",
                transition: "all 300ms"
            }
        },
        AnswerD_Typography_Style: {
            width: "auto",
            height: "max-content",
            fontSize: "0.8em",
            fontWeight: "600",
            color: "#F1B04E"
        },
        Image_Container_Style: {
            width: "40%",
            height: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down('sm')]: {
               display: "none"
            }
        },
        Image_Container_Responsive_Style: {
            width: "relative",
            padding: "0em 1em",
            margin: "0.8em 0em",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.up('sm')]: {
               display: "none"
            }
        },
        ShortAnswer_Input_Style: {
            backgroundColor: "transparent",
            fontSize: "0.8em",
            fontWeight: "500",
            color: "#3F3D56"
        },
        Checkbox_Style: {
            height: "1.3em",
            width: "1.3em",
            color: grey[50],
            marginTop: "0.1em",
            '&.Mui-checked': {
                color: grey[50],
            },
        },
        Answer_Option_Typography_Style: {
            width: "90%",
            height: "auto",
            wordWrap: 'break-word',
            color: "white",
            fontSize: "0.8em",
            fontWeight: "600",
            paddingTop: "0.1em"
        },
        Button_Style: {
            width: "relative",
            height: "auto",
            display: "flex"
        },
        SubmitExam_Button_Style: {
            padding: "0.4em 2em",
            fontSize: "0.8em",
            fontWeight: "600",
            textTransform: "Capitalize",
            color: "white",
            backgroundColor: "#0069D3",
            "&: hover": {
                backgroundColor: "#005DC3"
            },
            [theme.breakpoints.down('sm')]: {
                padding: "0.4em 0em",
                marginRight: "0em",
                width: "100%"
            },
        }


};
    return {designs};
}
    export default useStyle;