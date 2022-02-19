import {useTheme} from '@mui/material/styles'

function useStyle() {

const theme = useTheme()

const designs = {
    Cyklas_Logo_Style: {
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        [theme.breakpoints.between('md', 'lg')]: {
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        },
        [theme.breakpoints.between('xs', 'md')]: {
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    // BoxFlexGrow_Style: {
    //     flexGrow: 1,
    //     height: "relative",
    //     border: "1px solid black",
    //     [theme.breakpoints.down('md')]: {
    //         display: "none"
    //     }
    // },
    Content2_Style: {
        height: "relative",
        width: "auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        [theme.breakpoints.between('md', 'lg')]: {
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    Cycrowd_Typography_Style: {
        color: 'white',
        fontSize: '12px',
        textTransform: 'none',
        fontWeight: '500',
        width: 'relative',
        height: 'max-content',
        textAlign: 'Right',
        [theme.breakpoints.down('md')]: {
            textAlign: 'Left',
        }
      }
};



return {designs, theme};
}

export default useStyle;