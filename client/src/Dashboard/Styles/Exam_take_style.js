import { useTheme } from "@mui/material/styles";

function useStyle() {
    const theme = useTheme();
    const designs = {
        ExamTake_GridItem_Style: {
            margin: "0.5em 0em"
        },
        ExamName_Typography_Style: {
            width: "relative",
            height: "max-content",
            padding: "0.5em 1.5em",
            backgroundColor: "#007FFF",
            color: "white",
            fontSize: "1em",
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
            paddingBottom: "2em",
            backgroundColor: "#FCFCFC",
            borderLeft: "1px solid #DBDBDB",
            borderRight: "1px solid #DBDBDB",
            borderBottom: "1px solid #DBDBDB"
        },
        Instructions_Typography_Style: {
            width: "relative",
            height: "auto",
            padding: "0.4em 1.7em",
            marginBottom: "1em",
            color: "#8E8E8E",
            fontSize: "0.8em",
            [theme.breakpoints.down('sm')]: {
                padding: "0.4em 0.9em"
            }
        },
        Divider_Style: {
            width: "relative",
            margin: "0em 1.5em",
            [theme.breakpoints.down('sm')]: {
                margin: "0em 0.8em"
            }
        },
        Exam_Details_Style: {
            width: "relative",
            height: "auto",
            display: "flex",
            flexWrap: "wrap",
            padding: "0.5em 1.5em",
            [theme.breakpoints.down('sm')]: {
                padding: "0.5em 0.8em"
            }
        },
        BoxFlexGrow_Style: {
            height: "relative"
        },
        Items_Typography_Style: {
            width: "100%",
            height: "max-content",
            color: "#3F3D56",
            fontSize: "0.8em"
        },
        Points_Style: {
            display: "flex",
            gap: "0.5em",
            width: "100%",
            height: "auto"
        },
        OverallPoints_Typography_Style: {
            width: "auto",
            height: "max-content",
            color: "#3F3D56",
            fontSize: "0.8em"
        },
        Points_Typography_Style: {
            width: "auto",
            height: "max-content",
            color: "#007FFF",
            fontSize: "0.8em",
            fontWeight: "600"
        },
        DueDate_Style: {
            display: "flex",
            gap: "0.5em",
            width: "100%",
            height: "auto"
        },
        DueDate_Typography_Style: {
            width: "auto",
            height: "max-content",
            color: "#3F3D56",
            fontSize: "0.8em"
        },
        Date_Typography_Style: {
            width: "auto",
            height: "max-content",
            color: "#3F3D56",
            fontSize: "0.8em",
            fontWeight: "600"
        },
        TimeLimit_Style: {
            display: "flex",
            gap: "0.5em",
            width: "100%",
            height: "auto"
        },
        TimeLimit_Typography_Style: {
            width: "auto",
            height: "max-content",
            color: "#3F3D56",
            fontSize: "0.8em"
        },
        Time_Typography_Style: {
            width: "auto",
            height: "max-content",
            color: "#3F3D56",
            fontSize: "0.8em",
            fontWeight: "600"
        },
        Button_Style: {
            width: "relative",
            height: "auto",
            display: "flex"
        },
        StartExam_Button_Style: {
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

    return { designs };
}

export default useStyle;