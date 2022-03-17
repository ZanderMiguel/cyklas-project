import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const div = theme.mixins.toolbar;
  const designs = {
    IconbuttonStyle: {
      ml: 1.5,
      '&:hover': {
        backgroundColor: 'blue',
      },
    },
    buttonStyle: {
      color: 'whiteSmoke',
    },
    button_click_style: {
      color: 'blue',
    },
    videoContainer: {
      display: 'flex',
      width: '100%',
      height: '100%',
      [theme.breakpoints.up('xs')]: {
        paddingTop: '48px',
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: '56px',
      },
    },
  };
  return { designs, theme };
}

export default useStyle;
