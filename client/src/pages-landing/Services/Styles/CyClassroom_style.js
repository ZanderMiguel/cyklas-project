import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
      Container_Style: {
        marginTop: "5em",
        padding: "2.5em 0em",
        [theme.breakpoints.down('sm')]: {
            marginTop: "0.5em",
        }
      },
      Heading_Style: {
        display: "flex",
        width: "relative",
        height: "auto"
      },
      CyClassroom_Heading_Style: {
        width: "100%",
        height: "max-content",
        color: "#3F3D56",
        fontSize: "2.5em",
        fontWeight: "700",
        borderLeft: "8px solid #007FFF",
        paddingLeft: "1em",
        [theme.breakpoints.between('sm', 'md')]: {
            width: "auto"
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        }
      },
      BoxFlexGrow_Style: {
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
        [theme.breakpoints.between('sm', 'md')]: {
            display: "initial"
        },
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
      },
      Button_Container_Style: { 
          marginTop: "0.8em",
          paddingBottom: "0.5em",
          [theme.breakpoints.between('sm', 'md')]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }, 
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "1.5em"
        }, 
      },
      ButtonContainer_Style: {
        display: "flex",
        gap: "1.5em",
        width: "relative",
        height: "auto",
        marginLeft: "2.7em",
        [theme.breakpoints.between('sm', 'md')]: {
            width: "17em",
            marginLeft: "0em",
        }, 
        [theme.breakpoints.down('sm')]: {
            width: "relative",
            marginLeft: "0em",
        }, 
      },
    //   Professor_Button_Style: {
    //     color: `${color}`,
    //     fontWeight: `${fontWeight}`,
    //     fontSize: '1.3em',
    //     '&:hover': { backgroundColor: 'white' }
    //   },
    //   Student_Button_Style: {
    //     color: `${color2}`,
    //     fontWeight: `${fontWeight2}`,
    //     fontSize: '1.3em',
    //     '&:hover': {
    //       backgroundColor: 'white'
    //     }
    //   },
      List_Container_Style: {
        marginTop: "0.5em",
        marginLeft: "3em",
        display: "flex",
        flexDirection: "column",
        gap: "0.5em",
        [theme.breakpoints.between('sm', 'md')]: {
            width: "17em",
            paddingLeft: "0.5em",
            marginLeft: "0em",
        },
        [theme.breakpoints.down('sm')]: {
            width: "relative",
            paddingLeft: "0.5em",
            marginLeft: "0em"
        }, 
      },
      List_Style: {
        display: "flex",
        gap: "1em"
      },
      AssignmentTurnedIn_Icon_Style: { 
          color: '#007FFF', 
          fontSize: "1.5em", 
          marginTop: "0.05em" 
      },
      List_Typography_Style: { 
          fontSize: "1.1em", 
          fontWeight: '400', 
          color: '#626170' 
      },
      Image_GridItem_Style: { 
          padding: "2em",
          [theme.breakpoints.between('sm', 'md')]: {
            padding: "5em",
            }, 
            [theme.breakpoints.down('sm')]: {
                marginTop: "1em",
                padding: "2em",
            }, 
      }
  };

  return { designs };
}

export default useStyle;
