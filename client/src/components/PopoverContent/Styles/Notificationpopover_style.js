import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    RequestContainer_Style: {
        width: "30rem",
        maxHeight: "20rem",
        padding: "0.5em 1em"
    },
    RequestContainer_Sub_Style: {
        width: "100%",
        display: "flex",
        alignItems: "center"
    },
    RequestContainer_Sub2_Style: {
        display: "flex",
        flexGrow: 1,
        alignItems: "center"
    },
    RequestContainer_Sub3_Style: {
        marginRight: 2
    },
    AcceptButton_Style: { 
        borderRadius: '0.9em',
        textTransform: 'none' 
    },
    DeclineButton_Style: { 
        textTransform: 'none', 
        marginLeft: '0.5em', 
        marginRight: '0.7em' 
    },
    Divider_Style: { 
        margin: "0.5em 0em 0.5em 1.5em"
    },
    RequestContainer_Sub4_Style: {
        width: "100%",
        height: "20rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    GeneralContainer_Style: {
        margin: "0.8em 1em 0em 0em",
        width: "relative",
        height: "20em",
        paddingLeft: "1em"
    },
    GeneralContainer_Sub_Style: {
        width: "100%",
        display: "flex",
        gap: "0.8em",
        "&: hover": {
            cursor: "pointer",
            textDecoration: "underline"
        }
    },
    GeneralContainer_Sub2_Style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    GeneralContainer_Sub3_Style: {
        width: "100%",
        height: "20rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
};

return {designs};
}

export default useStyle;  