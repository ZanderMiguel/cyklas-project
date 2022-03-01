import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Quiz_Options_Responsive_Style: {
        height: "auto",
        width: "100%",
        marginTop: "2em",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
        [theme.breakpoints.down('sm')]: {
            display: "initial"
        }
    },
    Quiz_Options_IconButton_Style: {
        height: "1.5em",
        width: "1.5em",
        float: "right"
    },
    MoreVertIcon_Style: {
        color: "#8E8E8E",
        fontSize: "1em"
    },
    Quiz_Container_Style: {
        height: "auto",
        width: "100%",
        border: "1px solid #DBDBDB",
        [theme.breakpoints.up('sm')]: {
            marginTop: "2em"
        }
    },
    Quiz_Container_Sub_Style: {
        display: "flex",
        width: "100%",
        height: "auto"
    },
    Quiz_Question_Style: {
        width: "80%",
        height: "auto",
        backgroundColor: "White",
        borderRight: "1px solid #DBDBDB",
        borderBottom: "1px solid #DBDBDB",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            borderRight: "none"
        }
    },
    Quiz_Question_Sub_Style: {
        width: "100%",
        height: "auto",
        backgroundColor: "#007FFF"
    },
    Quiz_Question_TextField_Style: {
        width: "100%",
        height: "auto",
        backgroundColor: "#007FFF",
        borderRadius: "0em",
        "&: hover": {
            backgroundColor: "#007FFF"
        }
    },
    Quiz_Item_Style: {
        height: "1.9em",
        width: "1.9em",
        margin: "0em 0.3em 1em 1.9em",
        backgroundColor: "White",
        borderRadius: "3em",
        [theme.breakpoints.down('sm')]: {
            margin: "0em 0.3em 1em 0.5em"
        }
    },
    Quiz_Item_Typography_Style: {
        fontSize: "0.9em",
        color: "#007FFF",
        fontWeight: "600",
        margin: "0.4em 0.3em 0.3em 0.8em"
    },
    Quiz_Question_Image_Style: {
        width: "relative",
        height: "auto"
    },
    Quiz_Question_Image_Sub_Style: {
        height: "auto",
        marginTop: "0.5em",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        justifyContent: "center",
        alignItems: "center"
    },
    Insert_Image_Button_Style: {
        width: "15em",
        height: "auto",
        color: "#8E8E8E",
        textAlign: "center",
        textTransform: "none",
        fontSize: "0.8em",
        backgroundColor: "White",
        border: "1px solid #8E8E8E",
        borderRadius: "0.7em",
        boxShadow: "none",
        "&: hover": {
            backgroundColor: "White", boxShadow: "none"
        }
    },
    Quiz_Options_Style: {
        width: "50%",
        height: "relative",
        backgroundColor: "White",
        borderBottom: "1px solid #DBDBDB",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    Other_Buttons_Style: {
        padding: "0.5em 0em 1.5em 0em",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        justifyContent: "center",
        alignItems: "center"
    },
    Delete_Question_Style: {
        width: "100%",
        height: "auto"
    },
    Delete_IconButton_Style: {
        float: "right",
        marginRight: "1.5em",
        height: "1.5em",
        width: "1.5em"
    },
    DeleteIcon_Style: {
        color: "#716F87",
        fontSize: "1em"
    },
    FormControl_Style: { 
        width: "80%" 
    },
    InputLabel_Style: {
        fontSize: "0.9em",
        fontWeight: "600",
        color: "#737373"
    },
    Select_Style: { 
        width: "100%",
        borderBottom: "1px solid #DBDBDB"
    },

    Answer_Type_Autocomplete_Style: {
        width: "80%",
        borderBottom: "1px solid #DBDBDB"
    },
    Time_Limit_Autocomplete_Style: {
        width: "80%",
        borderBottom: "1px solid #DBDBDB"
    },
    Points_Autocomplete_Style: {
        width: "80%",
        borderBottom: "1px solid #DBDBDB"
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
    Answer_A_B_Style: {
        height: "auto",
        width: "auto"
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
    Answer_C_D_Style: {
        height: "auto",
        width: "auto"
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
    },
    Add_Question_Button_Style: {
        float: "Left",
        backgroundColor: "#0069D3",
        textTransform: "Capitalize",
        fontSize: "0.8em",
        fontWeight: "bold",
        width: "max-content",
        padding: "0.4em 2.4em",
        borderRadius: "0.4em"
    }
};



return {designs};
}

export default useStyle;  