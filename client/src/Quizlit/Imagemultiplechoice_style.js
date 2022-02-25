import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Quiz_Container_Style: {
        height: "auto",
        width: "100%",
        marginTop: "2em",
        border: "1px solid #DBDBDB"
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
    Answer_A_Style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#975DF5",
        height: "auto",
        width: "relative",
        padding: "0em 2em 0em 3em",
        borderRadius: "0.6em",
        [theme.breakpoints.down('sm')]: {
            padding: "0em 1em 0em 2.5em",
        }
    },
    Answer_IconButton_Style: {
        height: "relative",
        width: "auto",
        paddingLeft: "1.5em",
        paddingRight: "1.5em",
        borderRadius: "0em"
    },
    Correct_Answer_IconButton_Style: {
        height: "1.2em",
        width: "1.2em",
        border: "2px solid White",
        [theme.breakpoints.down('sm')]: {
            marginRight: "0.2em",
        }
    },
    CheckIcon_Style: {
        color: "White",
        fontSize: "0.8em"
    },
    Answer_B_Style: { 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F55D5D",
        height: "auto",
        width: "relative",
        padding: "0em 2em 0em 3em",
        borderRadius: "0.6em",
        [theme.breakpoints.down('sm')]: {
            padding: "0em 1em 0em 2.5em",
        }
    },
    Answer_C_Style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6CCF53",
        height: "auto",
        width: "relative",
        padding: "0em 2em 0em 3em",
        borderRadius: "0.6em",
        [theme.breakpoints.down('sm')]: {
            padding: "0em 1em 0em 2.5em",
        }
    },
    Answer_D_Style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1B04E",
        height: "auto",
        width: "relative",
        padding: "0em 2em 0em 3em",
        borderRadius: "0.6em",
        [theme.breakpoints.down('sm')]: {
            padding: "0em 1em 0em 2.5em",
        }
    }

};



return {designs};
}

export default useStyle; 