import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
    BoxTileContainer: {
      className: 'Tiles1',
      width: '100%',
      height: 'auto',
      marginBottom: '0.6em',
      padding: '0.5em 0em',
      display: 'flex',
      border: ' 1px solid #DBDBDB',
      borderRadius: '0.8em',
      '&: hover': {
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      },
    },
    ActivityContainer: {
      className: 'Activity-container',
      display: 'flex',
      width: '100%',
    },
    ActivityName_User_Date: {
      className: 'Activity-name-User-date',
      height: 'max-content',
      margin: '0.3em 0em 0.3em 0em',
      flexGrow: 1,
      "&: hover": {
          cursor: "default"
      }
    },
    ActivityName: {
      className: 'Activity-name',
      // display: "flex",
      // gap: "5px"
    },
    // Lesson: {
    //     fontSize: "14px",
    //     fontWeight: "600",
    //     color: "#3F3D56",
    //     textTransform: "Uppercase"
    // },
    Activity: {
      fontSize: '0.9em',
      width: '25em',
      fontWeight: '600',
      textTransform: 'Uppercase',
      color: '#3F3D56',
      [theme.breakpoints.between('sm', 'md')]: {
          width: "22em",
      },
      [theme.breakpoints.down('sm')]: {
          padding: "0.4em 0em 0em 0em",
          width: "100%",
          height: "relative"
      }
    },
    User_Date: {
      className: "User-date", 
      width: "35em", 
      display: "flex", 
      gap: "0.2em",
      [theme.breakpoints.between('md', "lg")]: {
          width: "24em",
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: "20em",
      },
      [theme.breakpoints.down('sm')]: {
        display: "none"
      }
    },
    Professor: {
      width: "auto",
      fontSize: "0.5em",
      fontWeight: "700",
      textTransform: "Capitalize",
      fontStyle: "Italic",
      color: "#3F3D56"
    },
    Date: {
      width: "45em",
      fontSize: "0.5em",
      fontWeight: "600",
      textTransform: "none",
      fontStyle: "Italic",
      color: "#3F3D56",
      [theme.breakpoints.down('md')]: {
          width: "30em",
      }
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
    }
  };

  return { designs };
}

export default useStyle;
