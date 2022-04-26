import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();
  const designs = {
    Container_Style: { 
        padding: "1em" 
    },
    ButtonContainer_Style: {
        width: 'relative',
        display: 'flex',
        margin: "0em 1.5em 0.9em 1.5em",
        justifyContent: 'center'
    },
    AddMember_Button_Style: {
        backgroundColor: '#007FFF',
        color: 'white',
        borderRadius: '0.3em',
        '&:hover': {
          backgroundColor: '#0072e6',
        }
    },
  };
  return { designs };
}

export default useStyle;

