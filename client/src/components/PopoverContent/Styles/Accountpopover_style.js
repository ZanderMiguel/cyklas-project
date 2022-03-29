import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Container_Style: {
        width: 400 ,
        maxWidth: 400 ,
        maxHeight: 300 
    },
    Nav_Style: { 
        width: '100%' 
    },
    Container_Sub_Style: {
        display: "flex",
        overflow: "auto"
    },
    ProfileImg_Style: { 
        mr: 2 
    },
    Container_Sub2_Style: {
        display: "flex"
    },
    Setting_Style: { 
        mr: '0.5em' 
    },
    Container_Sub3_Style: {
        display: "flex"
    },
    Logout_Style: { 
        mr: '0.5em' 
    }
};

return {designs};
}

export default useStyle;  