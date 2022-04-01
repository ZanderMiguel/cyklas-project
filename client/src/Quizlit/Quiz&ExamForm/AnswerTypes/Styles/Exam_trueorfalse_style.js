import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Quiz_Container_Style: {
        height: "auto",
        width: "100%",
        border: "1px solid #DBDBDB",
        [theme.breakpoints.up('sm')]: {
            marginTop: "2em"
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: "2em"
        }
    },
    Quiz_Answers_Style: {
        textDecoration: "none",
        padding: "1em 2.5em",
        width: "relative",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "0.6em",
        [theme.breakpoints.down('sm')]: {
            padding: "1em"
        }
    },
    Answer_True_Style: {
        display: "flex",
        width: "relative",
        height: "auto",
        padding: "0.5em 0.8em",
        backgroundColor: "#8E58E7",
        borderRadius: "0.5em",
    },
    Quiz_Item_Style: {
        height: "1.9em",
        width: "1.9em",
        margin: "0em 0.8em 0em 0.8em",
        backgroundColor: "White",
        borderRadius: "3em",
        [theme.breakpoints.down('sm')]: {
            margin: "0em 0.8em 0em 0.2em",
        }
    },
    Quiz_Item_Typography_Style: {
        fontSize: "0.9em",
        color: "#975DF5",
        fontWeight: "600",
        margin: "0.4em 0.3em 0.3em 0.7em"
    },
    Answer_Style: {
        fontSize: "0.8em",
        fontWeight: "600",
        color: "White",
        paddingTop: "0.5em"
    },
    Answer_False_Style: {
        display: "flex",
        width: "relative",
        height: "auto",
        padding: "0.5em 0.8em",
        backgroundColor: "#E75858",
        borderRadius: "0.5em",
    },
    Quiz_Item_Typography_Style2: {
        fontSize: "0.9em",
        color: "#E75858",
        fontWeight: "600",
        margin: "0.4em 0.3em 0.3em 0.7em"
    },
    Correct_Answer_IconButton_Style: {
        height: "1.2em",
        width: "1.2em",
        border: "2px solid White",
        marginRight: "0.6em",
        [theme.breakpoints.down('sm')]: {
            marginRight: "0.2em",
        }
    },
    CheckIcon_Style: {
        color: "White",
        fontSize: "0.8em"
    },
    Correct_AnswerT_IconButton_Style: {
        height: "1.2em",
        width: "1.2em",
        backgroundColor: "white",
        marginRight: "0.6em",
        "&: hover": {
            backgroundColor: "white"
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: "0.2em",
        }
    },
    CheckIconT_Style: {
        color: "#8E58E7",
        fontSize: "0.8em",
        "&: hover": {
            color: "#8E58E7"
        },
    },
    CheckIconT2_Style: {
        color: "#E75858",
        fontSize: "0.8em",
        "&: hover": {
            color: "#E75858"
        },
    },
    Correct_AnswerF_IconButton_Style: {
        height: "1.2em",
        width: "1.2em",
        border: "2px solid White",
        marginRight: "0.6em",
        [theme.breakpoints.down('sm')]: {
            marginRight: "0.2em",
        }
    },
    CheckIconF_Style: {
        color: "White",
        fontSize: "0.8em"
    },
};



return {designs};
}

export default useStyle;  