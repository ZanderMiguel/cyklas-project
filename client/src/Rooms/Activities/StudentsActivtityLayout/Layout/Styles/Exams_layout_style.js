import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();
  const designs = {
    BoxTileContainer: {
      className: 'Tiles1',
      width: 'relative',
      height: 'auto',
      marginBottom: '0.6em',
      padding: '0.5em 1.5em',
      display: 'flex',
      border: ' 1px solid #DBDBDB',
      borderRadius: '0.8em',
      textDecoration: 'none',
      '&: hover': {
        cursor: 'default',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '0.2em 0.8em',
      },
    },
    ExamName_User_Date: {
      width: 'auto',
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
      height: 'relative',
      margin: '0.3em 0em 0.3em 0em',
      textDecoration: 'none',
      '&: hover': {
        textDecoration: 'underline',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexGrow: 1,
        height: 'auto',
      },
    },
    Exam: {
      fontSize: '0.9em',
      width: '25em',
      fontWeight: '600',
      textTransform: 'Uppercase',
      color: '#3F3D56',
      [theme.breakpoints.between('sm', 'md')]: {
        width: '22em',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '0.4em 0em 0em 0em',
        width: '100%',
        height: 'relative',
      },
    },
    User_Date: {
      border: '1px solid black',
      className: 'User-date',
      width: '35em',
      display: 'flex',
      gap: '0.2em',
      [theme.breakpoints.between('md', 'lg')]: {
        width: '24em',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '20em',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    Professor: {
      width: 'auto',
      border: '1px solid black',
      fontSize: '0.7em',
      fontWeight: '700',
      textTransform: 'Capitalize',
      fontStyle: 'Italic',
      color: '#3F3D56',
    },
    Date2: {
      width: '45em',
      fontSize: '0.7em',
      fontWeight: '600',
      textTransform: 'none',
      fontStyle: 'Italic',
      color: '#3F3D56',
      [theme.breakpoints.down('md')]: {
        width: '30em',
      },
    },
    BoxFlexGrow_Style: {
      margin: '0.4em 0em 0.3em 0em',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    Points_Score_Style: {
      height: 'auto',
      width: '11.3em',
      margin: '0.4em 0em 0.3em 0em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1em',
      [theme.breakpoints.between('sm', 'md')]: {
        width: '5.5em',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    Points_Style: {
      fontSize: '0.9em',
      fontWeight: '600',
      color: '#47B753',
    },
    DividerV_Style: {
      height: '1em',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    Score_Style: {
      fontSize: '0.9em',
      fontWeight: '600',
      color: '#007FFF',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    BoxOptions: {
      className: 'option',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0.4em 0em 0.3em 0.7em',
    },
    IconButtonOptions: {
      ariaLabel: 'options',
      height: '1.3em',
      width: '1.3em',
    },
    MoreVertIcon: {
      color: '#8E8E8E',
      fontSize: '0.8em',
    },
  };
  return { designs };
}

export default useStyle;
