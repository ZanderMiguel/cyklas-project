import { useTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

function useStyle() {
  const theme = useTheme();
  const designs = {
    PersonalInformation_Typography_Style: {
      marginBottom: '0.8em',
      fontSize: '1.2em',
      fontWeight: '600',
      color: '#3F3D56',
    },
    Stack_Style: {
      margin: '0em 0em 0.8em 2em',
      [theme.breakpoints.down('md')]: {
        margin: '0em 0em 0.8em 0em',
      },
    },
    TextFieldLabel_Style: {
      fontWeight: '500',
      color: '#3F3D56',
      fontSize: '0.9em',
    },
    TextField_Style: {
      fontWeight: '500',
      color: '#3F3D56',
      fontSize: '0.5em',
    },
    Clear_Save_Style: {
      display: 'flex',
      width: 'relative',
      height: 'max-content',
    },
    BoxFlexGrow_Style: {
      height: 'relative',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    Clear_Button_Style: {
      textTransform: 'Capitalize',
      fontSize: '0.9em',
      fontWeight: '600',
      padding: '0.1em 2.5em',
      marginRight: '0.5em',
      boxShadow: 'none',
      '&: hover': { boxShadow: 'none', backgroundColor: 'transparent' },
      [theme.breakpoints.down('sm')]: {
        width: '50%',
        padding: '0.3em 2.5em',
      },
    },
    Save_Button_Style: {
      textTransform: 'Capitalize',
      padding: '0.1em 2.5em',
      backgroundColor: green[700],
      fontSize: '0.9em',
      fontWeight: '600',
      color: 'white',
      borderRadius: '0.3em',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: green[800],
        boxShadow: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        width: '50%',
        padding: '0.3em 2.5em',
      },
    },
    AccountPicture_Style: {
      margin: '4em 0em 0em 2em',
      padding: '1.2em 1.5em',
      backgroundColor: '#FDFDFD',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
      borderRadius: '0.3em',
      display: 'flex',
      gap: '0.8em',
      flexDirection: 'column',
      justiyContent: 'center',
      alignItems: 'center',
      height: 'auto',
      width: 'max-content',
      [theme.breakpoints.down('md')]: {
        margin: '0.8em 0em 0em 0em',
        width: '100%',
      },
    },
    AccountPicture_Typography_Style: {
      fontSize: '0.9em',
      color: '#3F3D56',
      fontWeight: '500',
    },
    Avatar_Style: {
      width: 150,
      height: 150,
    },
    UploadImage_Button_Style: {
      padding: '0.3em 1.5em',
      textTransform: 'Capitalize',
      fontSize: '0.9em',
      color: 'white',
      fontWeight: '600',
      boxShadow: 'none',
      '&: hover': { boxShadow: 'none' },
      backgroundColor: theme.palette.main,
    },
  };
  return { designs, theme };
}

export default useStyle;
