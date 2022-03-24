import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
    BoxTileContainer: {
      className: 'Tiles1',
      width: '100%',
      height: 'auto',
      marginBottom: '0.4em',
      padding: '0.5em 0em',
      display: 'flex',
      border: ' 2px solid #DBDBDB',
      borderRadius: '0.8em',
      textDecoration: "none",
      '&: hover': {
        cursor: 'pointer',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      },
    },
    ExamContainer: {
      className: 'Activity-container',
      display: 'flex',
      width: '100%',
    },
    ExamName_User_Date: {
      className: 'Activity-name-User-date',
      height: 'max-content',
      margin: '0.3em 0em 0.3em 0em',
      flexGrow: 1,
    },
    ExamName: {
      className: 'Activity-name',
    },
    Exam: {
      fontSize: '0.9em',
      width: '25em',
      fontWeight: '600',
      textTransform: 'Uppercase',
      color: '#3F3D56',
      [theme.breakpoints.up('lg')]: {
        width: '45em',
      },
      [theme.breakpoints.between('md', 'lg')]: {
        width: '33em',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '18em',
      },
      [theme.breakpoints.down('sm')]: {
        width: '13em',
      },
    },
    User_Date: {
      className: 'User-date',
      width: 'relative',
      display: 'flex',
      gap: '0.2em',
    },
    Professor: {
      width: 'auto',
      fontSize: '0.5em',
      fontWeight: '600',
      textTransform: 'Capitalize',
      fontStyle: 'Italic',
      color: '#3F3D56',
      // [theme.breakpoints.between('sm', 'md')]: {
      //     width: "20em",
      // },
      // [theme.breakpoints.down('sm')]: {
      //     width: "15em",
      // }
    },
    Date: {
      width: '20em',
      fontSize: '0.5em',
      fontWeight: '500',
      textTransform: 'none',
      fontStyle: 'Italic',
      color: '#3F3D56',
      [theme.breakpoints.up('md')]: {
        width: '50em',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '20em',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    BoxOptions: {
      className: 'option',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    IconButtonOptions: {
      ariaLabel: 'options',
      height: '1.3em',
      width: '1.3em',
      margin: '0em 0.7em',
    },
    MoreVertIcon: {
      color: '#8E8E8E',
      fontSize: '0.8em',
    },
  };

  return { designs };
}

export default useStyle;
