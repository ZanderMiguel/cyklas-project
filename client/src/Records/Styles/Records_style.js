import { useTheme } from "@mui/material/styles"

function useStyle(){
const theme = useTheme()

const designs = {
    SearchBar_Style: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        } 
    }
};

return {designs};
}
export default useStyle;
