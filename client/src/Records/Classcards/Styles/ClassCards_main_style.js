import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
    Content_Container_Style: {
      margin: '2em 0em',
      padding: '1em 1.5em',
    },
    SearchBar_Style: {
      border: '1px solid #DBDBDB',
      backgroundColor: '#FAFBFC',
      borderRadius: '0.3em',
      padding: '0.3em 1em 0.3em 0.8em',
      display: 'flex',
      gap: '0.5em',
      alignItems: 'center',
      height: 'auto',
      width: 'relative',
      '&: hover': {
        border: '1px solid #007FFF',
        transition: 'all 300ms',
      },
    },
    SearchBar_IconButton_Style: {
      backgroundColor: 'transparent',
      height: '1em',
      width: '1em',
      '&: hover': {
        backgroundColor: '#FCF9FB',
      },
    },
    SearchBar_Icon_Style: {
      color: '#82818E',
      fontSize: '0.8em',
    },
    SearchBar_Input_Style: {
      width: '100%',
      backgroundColor: 'transparent',
      fontSize: '0.8em',
      fontWeight: '500',
      color: '#3F3D56',
    },
  };

  return { designs };
}
export default useStyle;
