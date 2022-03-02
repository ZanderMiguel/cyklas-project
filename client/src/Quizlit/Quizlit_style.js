import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Tabs_Main_Style: {
        borderRight: 1,
        marginTop: "0.8em",
        borderColor: 'transparent',
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
        [theme.breakpoints.between('xs', 'md')]: {
            display: "initial"
        }
    },
    Add_IconButton_Style: { 
        float: "right",
        marginTop: "1.2em",
        [theme.breakpoints.down('md')]: {
            marginTop: "0.5em",
        },
    },
    Tabs_Main_Style2: {
        borderRight: 1,
        marginTop: "0.8em",
        borderColor: 'transparent',
        [theme.breakpoints.down('md')]: {
            display: "none"
        }
    }
};



return {designs};
}

export default useStyle;