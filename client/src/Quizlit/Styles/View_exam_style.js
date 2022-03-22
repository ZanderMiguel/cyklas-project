import { useTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

function useStyle() {
  const theme = useTheme();

  const designs = {
    Student_List_Style: {
      margin: '0.5em 0em',
      width: '100%',
      height: '93vh',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    Sort_Container_Style: {
      padding: '0px 15px 0px 25px',
      display: 'flex',
    },
    AllStudent_Checkbox_Style: {
      color: '#BABABA',
      marginTop: "0.6em"
    },
    AllStudentLabel_Checkbox_Style: {
      color: '#3F3D56'
    },
    FlexGrow_Box_Style: {
      flexGrow: 1,
    },
    SortBy_Autocomplete_Style: {
      width: 120,
      height: 'relative',
      paddingBottom: '15px',
    },
    Divider_Style: {
      width: 'relative',
      margin: '0px 15px',
    },
    Student_Container_Style: {
      display: 'flex',
      flexDirection: 'column',
      width: 'auto',
      height: 'auto',
    },
    Student_Box_Style: {
      display: 'flex',
      padding: '2px 15px',
      width: 'relative',
      boxShadow: 'none',
      marginTop: '3px',
      '&: hover': {
        cursor: 'pointer',
        backgroundColor: '#FCFCFC',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 0px 2px -1px, rgba(0, 0, 0, 0.3) 0px 2px 3px -1px',
        transition: '0.2s',
      },
    },
    Student_Checkbox_Style: {
      color: '#BABABA',
      margin: '0px 5px 0px 0px',
    },
    Student_Avatar_Style: {
      margin: '0px 10px 0px 0px',
    },
    StudentScore_Typography_Style: {
      height: 'max-content',
      width: '17%',
      textAlign: 'center',
      fontSize: '13px',
      fontWeight: '500',
      color: '#3F3D56',
      margin: '10px 0px 10px 0px',
    },
    FormControl_Style: {
      width: '35%',
      paddingTop: "0em"
    },
    InputLabel_Style: {
      fontSize: '0.9em',
      fontWeight: '400',
      color: '#3F3D56'
    },
    Select_Style: {
      width: '100%',
      fontSize: '0.9em',
      fontWeight: '400',
      color: '#3F3D56'
    },
    Return_Button_Style: {
        marginTop: "0.7em",
        padding: "0.4em 2em",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "Capitalize",
        color: "white",
        backgroundColor: "#0069D3",
        "&: hover": {
            backgroundColor: "#005DC3"
        },
        // [theme.breakpoints.down('sm')]: {
        //     padding: "0.4em 0em",
        //     marginRight: "0em",
        //     width: "100%"
        // },
    },
    RoomName_CourseYearSec_Style: {
        width: "relative",
        height: "auto",
        display: "flex"
    },
    FormControlRoom_Style: {
        width: '35%',
        paddingTop: "0em",
        marginRight: "0.5em",
        borderBottom: "1px solid #DBDBDB"
      },
      InputLabelRoom_Style: {
        fontSize: '0.9em',
        fontWeight: '400',
        textTransform: "uppercase",
        color: '#3F3D56'
      },
      SelectRoom_Style: {
        width: '100%',
        fontSize: '0.9em',
        fontWeight: '400',
        color: '#3F3D56'
      },
    FormControlCourseYearSec_Style: {
      width: '35%',
      paddingTop: "0em",
      borderBottom: "1px solid #DBDBDB"
    },
    InputLabelCourseYearSec_Style: {
      fontSize: '0.9em',
      fontWeight: '400',
      textTransform: "uppercase",
      color: '#3F3D56'
    },
    SelectCourseYearSec_Style: {
      width: '100%',
      fontSize: '0.9em',
      fontWeight: '400',
      color: '#3F3D56'
    },
    Right_Container_GridItem_Style: {
        paddingRight: "0.5em",
        backgroundColor: "#FDFDFD",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        [theme.breakpoints.between('sm', 'md')]: {
            margin: "0.5em 0em 0em 0em",
        }
    },
    Right_Container_Style: {
        width: "100%",
        height: "auto",
        paddingBottom: "1em",
        backgroundColor: "transparent"
    },
    Header_Style: {
        padding: "0.5em 0.8em",
        height: "auto",
        width: "relative",
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            padding: "0.5em",
            flexWrap: "wrap"
        },
    },
    Icon_Quiz_Style: {
        height: "relative",
        width: "auto",
        display: "flex",
        gap: "0.8em",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginBottom: "0.5em"
        },
    },
    Quiz_Typography_Style: {
        paddingTop: "0.6em",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "uppercase",
        color: "#3F3D56",
        width: "25em",
        height: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    BoxFlexGrowHeader_Style: {
        height: "relative",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    BoxFlexGrow_Style: {
        height: "relative",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    Professor_Date_Style: {
        width: "auto",
        height: "max-content",
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        }
    },
    Professor_Typography_Style: {
        marginBottom: "0.1em",
        fontSize: "0.8em",
        fontWeight: "600",
        textAlign: "right",
        color: "#3F3D56",
        width: "auto",
        height: "max-content",
        [theme.breakpoints.down('sm')]: {
            textAlign: "left",
        },
    },
    Date_Typography_Style: {
        fontSize: "0.7em",
        fontWeight: "500",
        color: "#716F87",
        width: "auto",
        height: "max-content"
    },
    DividerRight_Style: {
        width: "relative",
        margin: "0em 0.8em",
        [theme.breakpoints.down('sm')]: {
            margin: "0em 0.5em",
        },
    },
    Instructions_Score_Style: {
        display: "flex",
        width: "relative",
        height: "auto",
        padding: "0.5em 0.8em 1.5em 0.8em",
        [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap",
            padding: "0.5em 0.5em 1.5em 0.5em",
        }
    },
    Instructions_Typography_Style: {
        width: "50em",
        height: "auto",
        color: "#3F3D56",
        fontSize: "0.8em",
        textTransform: "none",
        [theme.breakpoints.between('sm', 'md')]: {
            width: "30em",
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }

    },
    ScoreText_Typography_Style: {
        marginRight: "0.5em",
        width: "auto",
        height: "max-content",
        color: "#8E8E8E",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "uppercase",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    Score_Typography_Style: {
        width: "auto",
        height: "max-content",
        color: "#007FFF",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "uppercase",
        textAlign: "right",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    BoxFlexGrow_Responsive_Style: {
        height: "relative",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
        [theme.breakpoints.down('sm')]: {
            display: "initial",
            marginBottom: "0.2em"
        }
    },
    ScoreText_Responsive_Typography_Style: {
        marginRight: "0.5em",
        width: "auto",
        height: "max-content",
        color: "#8E8E8E",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "uppercase",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
        [theme.breakpoints.down('sm')]: {
            display: "initial",
            marginBottom: "0.2em"
        }
    },
    Score_Responsive_Typography_Style: {
        width: "auto",
        height: "max-content",
        color: "#007FFF",
        fontSize: "0.9em",
        fontWeight: "600",
        textTransform: "uppercase",
        textAlign: "right",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
        [theme.breakpoints.down('sm')]: {
            display: "initial",
            marginBottom: "0.2em"
        }
    },
    Quiz_Sheet_Style: {
        width: "relative",
        height: "auto"
    },
    Type_Typography_Style: {
        width: "100%",
        height: "max-content",
        margin: "0.5em 0em",
        padding: "0em 1.2em",
        color: "#3F3D56",
        fontSize: "0.7em",
        fontWeight: "500",
        textTransform: "uppercase"
    },
    Item_Style: {
        backgroundColor: "#FEFEFE",
        margin: "0em 0.8em 0.8em 0.8em",
        padding: "0.5em 0em",
        width: "relative",
        height: "auto",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
        [theme.breakpoints.down('sm')]: {
            margin: "0em 0.5em 0.8em 0.5em",
        }
    },
    Points_Typography_Style: {
        marginRight: "0.5em",
        height: "max-content",
        width: "max-content",
        color: "#007FFF",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none",
        textAlign: "right"
    },
    PointsText_Typography_Style: {
        height: "max-content",
        width: "max-content",
        color: "#007FFF",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none",
        textAlign: "right",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    PointsText_Typography_Style: {
        height: "max-content",
        width: "max-content",
        color: "#007FFF",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none",
        textAlign: "right",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    Question_Style: {
        display: "flex",
        width: "relative",
        height: "auto",
        padding: "0em 1em"
    },
    Item_Typography_Style: {
        height: "max-content",
        width: "max-content",
        color: "#3F3D56",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none",
        marginRight: "0.5em"
    },
    Item_Question_Typography_Style: {
        height: "max-content",
        width: "45em",
        color: "#3F3D56",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none",
        [theme.breakpoints.between('sm', 'md')]: {
            width: "40em",
        }
    },
    Choices_Style: {
        padding: "0.5em 1em 0.2em 2.5em",
        display: "flex",
        flexDirection: "column",
        gap: "0.3em",
        width: "relative",
        height: "auto"
    },
    ChoiceA_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#EAEAEA",
    },
    Choice_Typography_Style: {
        height: "max-content",
        width: "max-content",
        color: "White",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none"
    },
    ChoiceB_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#EAEAEA"
    },
    ChoiceC_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#6CCF53"
    },
    ChoiceD_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#EAEAEA"
    },
    CorrectAnswer_Typography_Style: {
        height: "max-content",
        width: "relative",
        padding: "0em 3.3em",
        color: "#49B854",
        fontSize: "0.8em",
        fontWeight: "600",
        textTransform: "none"
    },
    Essay_Input_Style: {
        backgroundColor: "transparent",
        borderBottom: "1px solid #DBDBDB" ,
        fontSize: "0.8em",
        fontWeight: "500",
        color: "#3F3D56",
        padding: "0.4em 0em"
    },
    Choice1_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#975DF5"
    },
    Checkbox_Style: {
        height: "1.3em",
        width: "1.3em",
        color: grey[50],
        '&.Mui-checked': {
            color: grey[50],
        }
    },
    Choice2_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#F55D5D"
    },
    Choice3_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#6CCF53"
    },
    Choice4_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#F1B04E"
    },
    ChoicesImageA_Style: {
        padding: "0.2em 1em 0.2em 2.5em",
        display: "flex",
        gap: "0.3em",
        width: "relative",
        height: "auto",
        [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap"
        }
    },
    ChoiceImage1_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#975DF5",
        opacity: "0.2",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    ChoiceImage2_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F55D5D",
        opacity: "0.2",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    ChoicesImageB_Style: {
        padding: "0.2em 1em 0.2em 2.5em",
        display: "flex",
        gap: "0.3em",
        width: "relative",
        height: "auto",
        [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap"
        }
    },
    ChoiceImage3_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6CCF53",
        opacity: "0.2",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    ChoiceImage4_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1B04E",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    Essay_Input_Style: {
        backgroundColor: "transparent",
        borderBottom: "1px solid #DBDBDB" ,
        fontSize: "0.8em",
        fontWeight: "500",
        color: "#3F3D56",
        padding: "0.4em 0em"
    },
    ChoiceTrue_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#975DF5"
    },
    ChoiceFalse_Style: {
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        display: "flex",
        gap: "0.5em",
        backgroundColor: "#F55D5D",
        opacity: "0.2"
    },
    Points_TextField_Style: {
        width: "2.5em",
        height: "auto",
        marginRight: "0.3em"
    }
    
  };

  return { designs };
}

export default useStyle;
