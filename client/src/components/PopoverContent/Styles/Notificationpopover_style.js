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
        marginBottom: '0.5em', 
        marginTop: '0.5em' 
    },
    RequestContainer_Sub4_Style: {
        width: "100%",
        height: "20rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    GeneralContainer_Style: {
        width: "30rem",
        maxHeight: "20rem",
        padding: "0.5em 1em"
    },
    GeneralContainer_Sub_Style: {
        width: "100%",
        display: "flex",
        alignItems: "center"
    },
    GeneralContainer_Sub2_Style: {
        marginRight: 2
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