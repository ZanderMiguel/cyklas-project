import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();
  const designs = {
    TabsH_GridItem_Style: { 
        marginTop: "2em",
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        [theme.breakpoints.down('md')]: {
            display: 'initial',
        } 
    },
    TabsV_GridItem_Style: {
        marginTop: "2em",
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    },
    Tiles_GridItem_Style: { 
        marginTop: "2em",
        [theme.breakpoints.down('md')]: {
            marginTop: "0.5em"
        },
    },
    Tabs_Main_Style2: {
        borderRight: 1,
        borderColor: 'transparent'
    },
    Tabs_Main_Style3: {
        borderRight: 1,
        borderColor: 'transparent',
    },
    Activity_Tiles: {
        marginBottom: "0.4em"
    },
    // Lesson: {
    //   backgroundColor: '#F3F3F3',
    //   width: '100%',
    //   height: 'auto',
    //   borderBottom: '1px solid #D4D4D4',
    //   boxShadow: '#f3f3f3',
    // },
    // Lesson_Typography: {
    //   textTransform: 'Uppercase',
    //   color: '#3F3D56',
    //   fontSize: '18px',
    //   padding: '15px 45px',
    //   fontWeight: '600',
    // },
    Accordion_Style: {
      width: '100%',
      backgroundColor: '#F3F3F3',
      border: 'none',
      boxShadow: 'none',
    },
    AccordionSummary_Style: {
      padding: '0em 1.5em',
      [theme.breakpoints.down('sm')]: {
        padding: '0em 1em 0em 0.8em',
      },
    },
    Activity_Icon_Activity_Type: {
      display: 'flex',
      height: 'relative',
      width: "100%"
    },
    Activity_Information_Style: {
      display: 'flex',
      width: "100%"
    },
    Activity_Typography: {
      width: '5em',
      display: "flex",
      flexGrow: 1,
      fontSize: '15px',
      textTransform: 'Uppercase',
      fontWeight: '600',
      color: '#3F3D56',
      paddingTop: '7px'
    },
    Type_Typography: {
      width: '80px',
      color: '#3F3D56',
      fontWeight: '500',
      fontSize: '13px',
      paddingTop: '7px',
      marginLeft: "0.5em",
      textAlign: "center",
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    Due_Date: {
      color: '#3F3D56',
      fontSize: '13px',
      fontWeight: 'bold',
      paddingTop: '7px',
      marginLeft: "0.5em",
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    Date: {
      width: '150px',
      color: '#3F3D56',
      fontSize: '13px',
      textAlign: "center",
      fontWeight: 'bold',
      paddingTop: '7px',
      marginLeft: "0.5em",
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    Seperator: {
      width: '2px',
      height: '12px',
      backgroundColor: '#C9C9C9',
      marginTop: '11px',
      marginLeft: "0.5em",
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    Time: {
      width: '60px',
      color: '#3F3D56',
      fontSize: '13px',
      fontWeight: 'bold',
      textTransform: 'Uppercase',
      paddingTop: '7px',
      marginLeft: "0.5em",
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    Status: {
        width: '10em',
        color: '#007FFF',
        fontSize: '13px',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'Uppercase',
        paddingTop: '7px',
        marginLeft: "0.5em",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    StatusIcon_Style: {
        fontSize: "0.7em",
        color: "#007FFF",
        margin: "1em 0em 0em 1em",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
        [theme.breakpoints.down('sm')]: {
            display: "initial"
        },
    },
    Button_Container_Style: {
      display: 'flex',
      width: '90%',
      margin: '5px 45px',
      [theme.breakpoints.down('sm')]: {
        margin: '5px 15px',
      },
    },
    Button_FlexGrow: {
      flexGrow: 1,
    },
    Button_Container_Sub: {
      width: 'max-content',
      display: 'flex',
      gap: '5px',
    },
    Accordion_Details_Style: {
      paddingTop: '0px',
    },
    Activity_Details_Style: {
      width: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0px 20px 15px 20px',
      [theme.breakpoints.down('sm')]: {
        margin: '0px 5px 15px 5px',
      },
    },
    Type_Due_Date_Style: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    Type_Responsive_Typography: {
      width: '80px',
      color: '#3F3D56',
      fontWeight: '500',
      fontSize: '13px',
      marginBottom: '5px',
    },
    DueDate_Responsive: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    DueDate_Responsive_Typography: {
      width: 'max-content',
      color: '#3F3D56',
      fontWeight: '500',
      fontSize: '13px',
      marginRight: '15px',
    },
    Date_Responsive_Typography: {
      width: '150px',
      color: '#3F3D56',
      fontWeight: '600',
      fontSize: '13px',
      marginRight: '15px',
    },
    SeperatorV: {
      width: '2px',
      height: '12px',
      backgroundColor: '#C9C9C9',
      marginTop: '3px',
      marginRight: '15px',
    },
    Responsive_Time: {
      width: '70px',
      textTransform: 'Uppercase',
      color: '#3F3D56',
      fontWeight: '600',
      fontSize: '13px',
    },
    Empty_Box_FlexGrow: {
      flexGrow: 1,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    Empty_Box_FlexGrow2: {
      flexGrow: 1,
      [theme.breakpoints.up('md')]: {
        display: 'initial',
      },
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    Points_Postedby_Style: {
      [theme.breakpoints.down('sm')]: {
        marginTop: '5px',
      },
      [theme.breakpoints.up('sm')]: {
        marginTop: '5px',
      },
    },
    Points: {
      display: 'flex',
      gap: '15px',
    },
    Points_Typography: {
      color: '#3F3D56',
      fontSize: '13px',
      width: 'max-content',
      marginBottom: '5px',
    },
    Points_Value_Typography: {
      color: '#3F3D56',
      fontSize: '13px',
      fontWeight: '600',
      width: 'max-content',
      marginBottom: '5px',
    },
    Postedby_Style: {
      width: 'relative',
    },
    Postedby_Typography: {
      color: '#3F3D56',
      fontSize: '13px',
      textTransform: 'Capitalize',
      fontWeight: 'bold',
    },
    Date_Posted_Typography: {
      color: '#716F87',
      fontSize: '13px',
    },
    Divider1: {
      width: 'relative',
      margin: '0px 20px',
      [theme.breakpoints.down('sm')]: {
        margin: '0px 5px 0px 5px',
      },
    },
    Activity_Details2_Style: {
      width: 'relative',
      padding: '10px 0px',
      margin: '0px 20px',
      [theme.breakpoints.down('sm')]: {
        margin: '0px 5px 0px 5px',
      },
    },
    Instructions_Typography: {
      color: '#3F3D56',
      fontSize: '14px',
      fontWeight: 'bold',
      textTransform: 'Uppercase',
      width: 'auto',
      margin: '0px 30px 4px 30px',
      padding: '0px 0px 0px 25px',
      [theme.breakpoints.down('sm')]: {
        margin: '0px 0px 4px 0px',
        padding: '0px'
      },
    },
    Instructions2_Typography: {
      color: '#3F3D56',
      fontSize: '13px',
      width: 'auto',
      padding: '0px 0px 0px 25px',
      margin: '0px 30px 4px 30px',
      [theme.breakpoints.down('sm')]: {
        margin: '0px 0px 4px 0px',
        padding: '0px 0px 0px 8px',
      },
    },
    Attach_File_Style: {
      width: '40%',
      margin: '10px 0px 0px 50px',
      padding: '10px 20px',
      display: 'flex',
      gap: '15px',
      borderRadius: '10em',
      border: '2px solid #D4D4D4',
      [theme.breakpoints.down('md')]: {
        width: '45%',
        margin: '10px 0px 0px 50px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '70%',
        margin: '10px 0px 0px 5px',
      },
    },
    Activity_FileName_Typography: {
      color: '#3F3D56',
      fontSize: '13px',
      fontWeight: 'bold',
      width: 'auto',
    },
    DocumentFile_Typography: {
      color: '#3F3D56',
      fontSize: '12px',
      width: 'auto',
    },
    Divider2: {
      width: 'relative',
      margin: '0px 20px 10px 20px',
      [theme.breakpoints.down('sm')]: {
        margin: '0px 5px 10px 5px',
      },
    },
    ViewHomework_Button_Style: {
      color: '#0069D3',
      fontWeight: 'bold',
      textTransform: 'Capitalize',
      marginLeft: '20px',
      '&: hover': {
        backgroundColor: '#EAEAEA',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '15px',
      },
    },

    // Quizzes
    BoxTileContainer: {
      className: "Tiles1", 
      width: "relative", 
      height: "auto", 
      marginBottom: "0.5em",
      padding: "0.5em 1.5em",
      display: "flex",
      border: " 1px solid #DBDBDB", 
      borderRadius: "0.8em",
      textDecoration: "none",
      "&: hover": {
          cursor: "pointer",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      },
      [theme.breakpoints.down('sm')]: {
        padding: "0.2em 0.8em",
      }
  },
  QuizName_User_Date: {
      className: "Activity-name-User-date",
      height: "max-content", 
      margin: "0.3em 0em 0.3em 0em",
      [theme.breakpoints.down('sm')]: {
        display: "flex",
        flexGrow: 1,
        height: "auto", 
      }
  },
  Quiz: {
      fontSize: "0.9em",
      width: "25em",
      fontWeight: "600",
      textTransform: "Uppercase",
      color: "#3F3D56",
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
  Date2: {
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
  BoxFlexGrow_Style: {
      margin: "0.4em 0em 0.3em 0em",
      [theme.breakpoints.down('sm')]: {
        display: "none"
      }
  },
  Points_Score_Style: {
      height: "auto",
      width: "11.3em",
      margin: "0.4em 0em 0.3em 0em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1em",
      [theme.breakpoints.between('sm', 'md')]: {
        width: "5.5em"
      },
      [theme.breakpoints.down('sm')]: {
        display: "none"
      }
  },
  Points_Style: {
      fontSize: "0.9em",
      fontWeight: "600",
      color: "#47B753",
  },
  DividerV_Style: {
      height: "1em",
      [theme.breakpoints.down('md')]: {
          display: "none"
      }
  },
  Score_Style: {
    fontSize: "0.9em",
    fontWeight: "600",
    color: "#007FFF",
    [theme.breakpoints.down('md')]: {
      display: "none"
    }
  },
  BoxOptions: {
      className: "option", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      margin: "0.4em 0em 0.3em 0.7em"
  },
  IconButtonOptions: {
      ariaLabel: "options",
      height: "1.3em",
      width: "1.3em",
      
  },
  MoreVertIcon: {
      color: "#8E8E8E",
      fontSize: "0.8em"
  },

  // Exams
  BoxTileContainer: {
    className: "Tiles1", 
    width: "relative", 
    height: "auto", 
    marginBottom: "0.5em",
    padding: "0.5em 1.5em",
    display: "flex",
    border: " 1px solid #DBDBDB", 
    borderRadius: "0.8em",
    textDecoration: "none",
    "&: hover": {
        cursor: "pointer",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    },
    [theme.breakpoints.down('sm')]: {
      padding: "0.2em 0.8em",
    }
  },
  ExamName_User_Date: {
      className: "Activity-name-User-date",
      height: "max-content", 
      margin: "0.3em 0em 0.3em 0em",
      [theme.breakpoints.down('sm')]: {
        display: "flex",
        flexGrow: 1,
        height: "auto", 
      }
  },
  Exam: {
      fontSize: "0.9em",
      width: "25em",
      fontWeight: "600",
      textTransform: "Uppercase",
      color: "#3F3D56",
      [theme.breakpoints.between('sm', 'md')]: {
          width: "22em",
      },
      [theme.breakpoints.down('sm')]: {
          padding: "0.4em 0em 0em 0em",
          width: "100%",
          height: "relative"
      }
  }
  };
  return { designs };
}

export default useStyle;
