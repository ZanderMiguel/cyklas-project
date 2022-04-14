import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();
  const designs = {
    TabsH_GridItem_Style: { 
        marginTop: "2em",
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        [theme.breakpoints.down('md')]: {
            display: 'initial',
        } 
    },
    TabsV_GridItem_Style: {
        marginTop: "2em",
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    },
    Tiles_GridItem_Style: { 
        marginTop: "2em",
        [theme.breakpoints.down('md')]: {
            marginTop: "0.5em"
        },
    },
    Tabs_Main_Style2: {
        borderRight: 1,
        borderColor: 'transparent'
    },
    Tabs_Main_Style3: {
        borderRight: 1,
        borderColor: 'transparent',
    }
  };
  return { designs };
}

export default useStyle;
