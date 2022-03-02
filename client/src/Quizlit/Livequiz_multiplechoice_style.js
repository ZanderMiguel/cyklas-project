import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Container_Style: {
        padding: "1em 0em",
        width: "100%",
        height: "85.4vh",
        backgroundColor: "#C4B4E5",
        [theme.breakpoints.down('sm')]: {
            height: "auto"
        }
    },
    GridContainer1_Style: {
        padding: "0em 2em 1em 2em",
        [theme.breakpoints.down('sm')]: {
            padding: "0em 1em 1em 1em"
        } 
    },
    QuizStatus_Style: {
        backgroundColor: "transparent",
        padding: "0.5em",
        display: "flex",
        gap: "0.4em",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        border: "2px solid white",
        borderRadius: "0.8em",
        height: "auto"
    },
    QuizStatus_Sub_Style: {
        width: "100%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        gap: "0.6em"
    },
    TimerIcon_Style: {
        color: "White",
        height: "1em",
        width: "1em"
    },
    QuizStatus_Typography_Style: {
        color: "White",
        textTransform: "Uppercase",
        fontSize: "1.1em",
        fontWeight: "600"
    },
    QuizStatus_Sub2_Style: {
        width: "100%",
        height: "auto"
    },
    QuizStatus_Typography2_Style: {
        color: "White",
        textTransform: "none",
        fontSize: "0.9em",
        fontWeight: "500",
        textAlign: "center"
    },
    PlayersAnswered_Grid_Style: {
        [theme.breakpoints.down('sm')]: {
            marginTop: "0.5em"
        }
    },
    PeopleAltIcon_Style: {
        color: "White",
        height: "1em",
        width: "1em"
    },
    Points_Items_Grid_Style: {
        [theme.breakpoints.down('lg')]: {
            marginTop: "0.5em"
        }
    },
    StarIcon_Style: {
        color: "White",
        height: "1em",
        width: "1em"
    },
    LayersIcon_Style: {
        color: "White",
        height: "1em",
        width: "1em"
    },
    GridContainer2_Style: {
        padding: "0em 2em",
        [theme.breakpoints.down('sm')]: {
            padding: "0em 1em"
        } 
    },
    QuizQuestion_TextField_Style: {
        width: "100%",
        height: "auto",
        backgroundColor: "#007FFF",
        borderRadius: "0em"
    },
    Quiz_Item_Style: {
        height: "2em",
        width: "2em",
        margin: "0em 0.3em 1em 1.7em",
        backgroundColor: "White",
        borderRadius: "3em",
    },
    Quiz_Item_Typography_Style: {
        fontSize: "1em",
        color: "#007FFF",
        fontWeight: "600",
        margin: "0.3em 0.2em 0.1em 0.7em"
    },
    QuizImage_Style: {
        padding: "5em 0em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "relative",
        height: "auto",
        backgroundColor: "#FCFCFC"
    },
    GridContainer3_Style: { 
        padding: "1em 2em 0em 2em",
        [theme.breakpoints.down('sm')]: {
            padding: "1em 1em 0em 1em",
        }
    },
    Answer_A_TextField_Style: {
        width: "100%",
        height: "auto",
        backgroundColor: "#975DF5",
        borderRadius: "0.5em",
        "&: hover": {
            backgroundColor: "#975DF5"
        }
    },
    Quiz_Item_Style2: {
        height: "1.9em",
        width: "1.9em",
        margin: "0em 0.3em 1em 0.8em",
        backgroundColor: "White",
        borderRadius: "3em",
        [theme.breakpoints.down('sm')]: {
            margin: "0em 0.3em 1em 0.2em",
        }
    },
    Answer_A_Typography_Style: {
        fontSize: "0.9em",
        color: "#975DF5",
        fontWeight: "600",
        margin: "0.4em 0.3em 0.3em 0.7em"
    },
    Answer_B_TextField_Style: {
        width: "100%",
        height: "auto",
        backgroundColor: "#F55D5D",
        borderRadius: "0.5em",
        "&: hover": {
            backgroundColor: "#F55D5D"
        }
    },
    Answer_B_Typography_Style: {
        fontSize: "0.9em",
        color: "#F55D5D",
        fontWeight: "600",
        margin: "0.4em 0.3em 0.3em 0.7em"
    },
    GridContainer4_Style: { 
        padding: "0.5em 2em 0em 2em",
        [theme.breakpoints.down('sm')]: {
            padding: "0.5em 1em 0em 1em",
        }
    },
    Answer_C_TextField_Style: {
        width: "100%",
        height: "auto",
        backgroundColor: "#6CCF53",
        borderRadius: "0.5em",
        "&: hover": {
            backgroundColor: "#6CCF53"
        }
    },
    Answer_C_Typography_Style: {
        fontSize: "0.9em",
        color: "#6CCF53",
        fontWeight: "600",
        margin: "0.4em 0.3em 0.3em 0.7em"
    },
    Answer_D_TextField_Style: {
        width: "100%",
        height: "auto",
        backgroundColor: "#F1B04E",
        borderRadius: "0.5em",
        "&: hover": {
            backgroundColor: "#F1B04E"
        }
    },
    Answer_D_Typography_Style: {
        fontSize: "0.9em",
        color: "#F1B04E",
        fontWeight: "600",
        margin: "0.4em 0.3em 0.3em 0.7em"
    } 
};



return {designs};
}

export default useStyle;  