import { useTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

function useStyle() {
  const theme = useTheme();
  const designs = {
    Stack_Style: {
        width: "relative",
      margin: '0em 2em 0.8em 2em',
      [theme.breakpoints.down('md')]: {
        margin: '0em 0em 0.8em 0em',
      },
    },
    TextFieldLabel_Style: {
        width: "50em",
        marginBottom: "0.5em",
      fontWeight: '600',
      color: '#3F3D56',
      fontSize: '0.8em',
    },
    TextFieldLabel2_Style: {
      width: "50em",
      marginBottom: "0.5em",
    fontWeight: '700',
    color: '#3F3D56',
    fontSize: '0.8em',
    },
    TextField_Style: {
        width: "relative",
      fontWeight: '500',
      color: '#3F3D56',
      fontSize: '0.5em',
    },
    TextField2_Style: {
        width: "100%",
      fontWeight: '500',
      color: '#3F3D56',
      fontSize: '0.5em'
    },
    Send_IconButton_Style: {
        height: '35px',
        width: '35px',
        margin: '2px 0px',
      },
      SendIcon_Style: {
        color: '#3F3D56',
        fontSize: '20px',
      }
  };
  return { designs, theme };
}

export default useStyle;
