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
    Quiz_Answer_Style: {
        textDecoration: "none",
        padding: "1em 2.5em",
        width: "relative",
        height: "auto",
        [theme.breakpoints.down('sm')]: {
            padding: "1em"
        }
    },
    ShortAnswer_Input_Style: {
        width: "100%",
        backgroundColor: "#FCFCFC",
        fontSize: "0.8em",
        fontWeight: "500",
        color: "#3F3D56",
        padding: "0.8em 1.5em",
        borderBottom: "1px solid #DBDBDB"
    }
};



return {designs};
}

export default useStyle;  