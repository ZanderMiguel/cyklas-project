import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
    Left_Container_GridItem_Style: {
      margin: '0.5em 0em',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    Left_Container_Style: {
      width: '100%',
      height: '87vh',
      backgroundColor: '#FCFCFC',
      border: '1px solid #DBDBDB',
      [theme.breakpoints.down('md')]: {
        height: 'max-content',
        paddingBottom: '1em',
      },
    },
    MessageArea_Typography_Style: {
      color: '#3F3D56',
      fontSize: '0.9em',
      fontWeight: '600',
      textTransform: 'Capitalize',
      textAlign: 'center',
      width: '100%',
      height: 'max-content',
      padding: '0.7em 0em',
    },
    Divider_Style: {
      width: 'relative',
      margin: '0em 1.3em 0.7em 1.3em',
      [theme.breakpoints.down('sm')]: {
        margin: '0em 0.8em 0.7em 0.8em',
      },
    },
    Message_Box_Style: {
      margin: '0em 1.3em 0em 1.3em',
      height: '73vh',
      // height: "31.8em",
      width: 'relative',
      overflowY: 'auto',
      [theme.breakpoints.down('sm')]: {
        margin: '0em 0.8em 0em 0.8em',
      },
    },
    Members_Comment_Style: {
      display: 'flex',
      gap: '0.3em',
      height: 'auto',
      width: 'relative',
    },
    AvatarIcon_Avatar_Style: {
      height: '1.9em',
      width: '1.9em',
    },
    Member_Time_Style: {
      width: '100%',
    },
    MemberName_Typography_Style: {
      color: '#3F3D56',
      fontSize: '0.7em',
      fontWeight: '600',
      textAlign: 'left',
      width: '100%',
      height: 'max-content',
    },
    MessageTime_Typography_Style: {
      color: '#8E8E8E',
      fontSize: '0.6em',
      textAlign: 'left',
      width: '100%',
      height: 'max-content',
    },
    Message_Typography_Style: {
      color: '#3F3D56',
      margin: '0em 0em 1.2em 4em',
      fontSize: '0.7em',
      wordWrap: 'break-word',
      textAlign: 'left',
      width: 'relative',
      height: 'auto',
    },
    Write_Comment_Style: {
      padding: '0em 1.5em 0em 1em',
      width: 'relative',
      height: 'auto',
      display: 'flex',
      gap: '0.3em',
      marginTop: '0.5em',
      [theme.breakpoints.down('sm')]: {
        padding: '0em 0.8em 0em 0.8em',
      },
    },
    AvatarIcon_Avatar_Style2: {
      margin: '0.3em 0em 0em 0em',
    },
    Message_TextField_Style: {
      width: 'relative',
      height: 'auto',
      backgroundColor: '#F9F9F9',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    Send_IconButton_Style: {
      height: '1.3em',
      width: '1.3em',
    },
    SendIcon_Style: {
      color: '#3F3D56',
      fontSize: '0.9em',
    },

    Right_Container_GridItem_Style: {
      margin: '0.5em 0em',
      [theme.breakpoints.between('sm', 'md')]: {
        margin: '0.5em 0em 0em 0em',
      },
    },
    Right_Container_Style: {
      width: '100%',
      height: 'auto',
      padding: '0.5em 0em',
      marginBottom: '1em',
      border: '1px solid #DBDBDB',
      [theme.breakpoints.down('md')]: {
        height: 'max-content',
      },
    },
    Header_Style: {
      padding: '0.5em 1.5em',
      height: 'auto',
      width: 'relative',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        padding: '0.5em 0.8em',
      },
    },
    Activity_Type_Style: {
      display: 'flex',
      gap: '0.8em',
      alignItems: 'center',
      flexGrow: 1,
      width: 'auto',
      height: 'max-content',
    },

    // Activity_Typography_Style: {
    //   marginBottom: '0.1em',
    //   fontSize: '1em',
    //   fontWeight: '600',
    //   textTransform: 'uppercase',
    //   color: '#3F3D56',
    //   width: '25em',
    //   height: 'max-content',
    //   [theme.breakpoints.down('sm')]: {
    //     width: '15em',
    //   },
    // },
    Type_Typography_Style: {
      fontSize: '0.7em',
      fontWeight: '500',
      color: '#3F3D56',
      width: '8em',
      height: 'max-content',
    },
    BoxFlexGrow_Style: {
      height: 'relative',
    },
    Professor_Date_Style: {
      marginTop: '0.1em',
      width: 'auto',
      height: 'max-content',
    },
    Professor_Typography_Style: {
      marginBottom: '0.1em',
      fontSize: '0.8em',
      fontWeight: '600',
      textAlign: 'right',
      color: '#3F3D56',
      width: 'auto',
      height: 'max-content',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left',
      },
    },
    Date_Typography_Style: {
      fontSize: '0.7em',
      fontWeight: '500',
      color: '#716F87',
      width: 'auto',
      height: 'max-content',
    },
    DividerRight_Style: {
      width: 'relative',
      margin: '0em 1.5em',
      [theme.breakpoints.down('sm')]: {
        margin: '0em 0.8em',
      },
    },
    ActivityInstructions_Style: {
      height: '13em',
      width: 'relative',
      margin: '0.1em 0em 0em 0em',
      padding: '0.3em 1.5em',
      [theme.breakpoints.down('sm')]: {
        padding: '0.3em 0.8em',
      },
    },
    ActivityInstructionsHead_Typography_Style: {
      width: '100%',
      fontSize: '0.9em',
      fontWeight: '700',
      textTransform: 'Uppercase',
      color: '#3F3D56',
      marginTop: '0.3em',
    },
    ActivityInstructions_Typography_Style: {
      width: '100%',
      fontSize: '0.8em',
      fontWeight: '500',
      color: '#3F3D56',
      margin: '0.3em 0em 0.9em 0em',
    },
    AttachFile_Style: {
      backgroundColor: 'white',
      margin: '0.5em 0em 0em 0em',
      width: '50%',
      padding: '0.5em 0.9em',
      display: 'flex',
      gap: '0.9em',
      border: '1px solid #D4D4D4',
      borderRadius: '0.3em',
      '&: hover': {
        cursor: 'pointer',
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      },
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
      },
    },
    ActivityFileName_Style: {
      width: 'auto',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    ActivityFileName_Typography_Style: {
      color: '#3F3D56',
      fontSize: '0.8em',
      fontWeight: '600',
      width: 'relative',
      height: 'max-content',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    DocumentFile_Typography_Style: {
      color: '#3F3D56',
      fontSize: '0.7em',
      width: 'max-content',
      height: 'max-content',
    },
    Student_Container_Style: {
      height: 'auto',
      width: 'relative',
      margin: '0.1em 0em 0em 0em',
      padding: '0.3em 1.5em 1em 2.4em',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      [theme.breakpoints.down('sm')]: {
        padding: '0.3em 0.8em',
      },
    },
    UploadedFiles_Typography_Style: {
      height: 'max-content',
      fontSize: '15px',
      fontWeight: '600',
      textTransform: 'Uppercase',
      color: '#6D6B85',
      width: 'auto',
      flexGrow: 1,
      margin: '0.5em 0em 1em 0em',
    },
    Footer_Style: {
      display: 'flex',
      height: 'auto',
      width: 'relative',
      margin: '0.9em 0em 0em 0em',
      [theme.breakpoints.down('sm')]: {
        padding: '0.5em 0.8em',
        flexWrap: 'wrap',
      },
    },
    Status_Typography_Style: {
      fontSize: '0.8em',
      fontWeight: '700',
      width: 'auto',
      height: 'relative',
      padding: '0.2em 0em 0em 0em',
      textTransform: 'uppercase',
      color: '#007FFF',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        backgroundColor: '#F3F3F3',
        textAlign: 'center',
        marginBottom: '0.5em',
      },
    },
    BoxFlexGrow2_Style: {
      height: 'relative',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    UploadFile_Button_Style: {
      padding: '0.2em 1em',
      marginRight: '0.5em',
      fontSize: '0.8em',
      fontWeight: '600',
      textTransform: 'Capitalize',
      color: '#0069D3',
      backgroundColor: 'transparent',
      '&: hover': {
        backgroundColor: 'transparent',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '0.2em 0em',
        marginRight: '0em',
        width: '50%',
      },
    },
    FileUploadOutlinedIcon_Style: {
      color: '#0069D3',
    },
    // UnsubmitWorks_Button_Style: {
    //     padding: "0.2em 1em",
    //     marginRight: "0.5em",
    //     fontSize: "0.8em",
    //     fontWeight: "600",
    //     textTransform: "Capitalize",
    //     color: "white",
    //     backgroundColor: "#0069D3",
    //     "&: hover": {
    //         backgroundColor: "#005DC3"
    //     }
    // },
    Submit_Button_Style: {
      padding: '0.2em 2.5em',
      fontSize: '0.8em',
      fontWeight: '600',
      textTransform: 'Capitalize',
      color: 'white',
      backgroundColor: '#0069D3',
      '&: hover': {
        backgroundColor: '#005DC3',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '0.2em 0em',
        width: '50%',
      },
    },
    Left_Container_GridItem_Responsive_Style: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      [theme.breakpoints.down('md')]: {
        display: 'initial',
      },
    },

    Activity_Style: {
      margin: '0px 0px 0px 0px',
      width: '100%',
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    },
    ActivityInfo_Style: {
      paddingBottom: '20px',
      height: 'auto',
      backgroundColor: '#FCFCFC',
      border: '1px solid #DBDBDB',
    },
    ActivityTitle_Style: {
      backgroundColor: '#F3F3F3',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8em',
      padding: '10px 40px',
      height: 'auto',
      width: 'relative',
      [theme.breakpoints.down('sm')]: {
        padding: '10px 15px',
      },
    },
    // Lesson_Typography_Style: {
    //   height: 'max-content',
    //   fontSize: '16px',
    //   fontWeight: '500',
    //   textTransform: 'Uppercase',
    //   color: '#3F3D56',
    //   margin: '12px 0px',
    // },
    Activity_Typography_Style: {
      height: 'max-content',
      fontSize: '18px',
      fontWeight: '700',
      textTransform: 'Uppercase',
      color: '#3F3D56',
      width: 'auto',
      flexGrow: 1,
    },
    ActivityType_Typography_Style: {
      display: 'flex',
      alignItems: 'center',
      height: 'relative',
      fontSize: '12px',
      fontWeight: '500',
      textTransform: 'Capitalize',
      color: '#3F3D56',
    },
    ActivityPoints_Typography_Style: {
      display: 'flex',
      alignItems: 'center',
      height: 'relative',
      fontSize: '12px',
      fontWeight: '700',
      textTransform: 'Capitalize',
      color: '#3F3D56',
    },
    ActivityPoints2_Typography_Style: {
      display: 'flex',
      alignItems: 'center',
      height: 'relative',
      fontSize: '12px',
      fontWeight: '500',
      textTransform: 'Capitalize',
      color: '#3F3D56',
    },
    ActivityAuthor_Typography_Style: {
      display: 'flex',
      alignItems: 'center',
      height: 'relative',
      fontSize: '12px',
      fontWeight: '700',
      textTransform: 'Capitalize',
      color: '#3F3D56',
    },
    ActivityDate_Typography_Style: {
      display: 'flex',
      alignItems: 'center',
      height: 'relative',
      fontSize: '12px',
      fontWeight: '500',
      textTransform: 'Lowercase',
      color: '#8E8E8E',
    },
    ActivityInstructions_Style: {
      height: 'auto',
      width: 'relative',
      margin: '8px 0px',
      padding: '3px 40px',
      [theme.breakpoints.down('sm')]: {
        padding: '3px 15px',
      },
    },
    ActivityDueDate_Style: {
      height: 'auto',
      width: 'relative',
      margin: '8px 0px',
      padding: '3px 40px',
      display: 'flex',
      gap: '0.5em',
      [theme.breakpoints.down('sm')]: {
        padding: '3px 15px',
      },
    },
    ActivityDueDate_Typography_Style: {
      width: 'auto',
      fontSize: '13px',
      fontWeight: '600',
      textTransform: 'Capitalize',
      color: '#3F3D56',
    },
    ActivityDueDate2_Typography_Style: {
      width: 'auto',
      flexGrow: 1,
      fontSize: '13px',
      fontWeight: '500',
      textTransform: 'Capitalize',
      color: '#3F3D56',
    },
    // AttachFile_Style: ,
    ActivityFileName_Style: {
      width: '85%',
      marginTop: '1px',
    },
    ActivityFileName_Typography_Style: {
      color: '#3F3D56',
      fontSize: '13px',
      fontWeight: 'bold',
      width: '100%',
      height: 'max-content',
    },
    DocumentFile_Typography_Style: {
      color: '#3F3D56',
      fontSize: '12px',
      width: 'max-content',
      height: 'max-content',
    },
  };

  return { designs };
}
export default useStyle;
