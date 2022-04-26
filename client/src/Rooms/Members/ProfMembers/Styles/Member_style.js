import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();
  const designs = {
    Container_Style: {
      padding: '1em 0em ',
    },
    ButtonContainer_Style: {
      width: 'relative',
      display: 'flex',
      margin: '0em 0em 0.9em 0em',
      justifyContent: 'center',
    },
    AddMember_Button_Style: {
      backgroundColor: '#007FFF',
      color: 'white',
      borderRadius: '0.3em',
      '&:hover': {
        backgroundColor: '#0072e6',
      },
    },
  };
  return { designs };
}

export default useStyle;
