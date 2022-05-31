import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
    Student_List_Style: {
      margin: '0px 0px 0px 0px',
      width: '100%',
      height: '90vh',
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
      marginTop: '0.6em',
    },
    AllStudentLabel_Checkbox_Style: {
      color: '#3F3D56',
    },
    FlexGrow_Box_Style: {
      flexGrow: 1,
    },
    FormControl_Style: {
      width: '35%',
      paddingTop: '0em',
    },
    InputLabel_Style: {
      fontSize: '0.9em',
      fontWeight: '400',
      color: '#3F3D56',
    },
    Select_Style: {
      width: '100%',
      fontSize: '0.9em',
      fontWeight: '400',
      color: '#3F3D56',
    },
    Return_Button_Style: {
      margin: '0.7em 0em 0.5em 2em',
      padding: '0.4em 2em',
      fontSize: '0.8em',
      fontWeight: '600',
      textTransform: 'Capitalize',
      color: 'white',
      backgroundColor: '#0069D3',
      '&: hover': {
        backgroundColor: '#005DC3',
      },
      [theme.breakpoints.down('md')]: {
        margin: '0.7em 0em 0.5em 0em',
      },
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
    // Di gumagana dito
    // StudentName_Typography_Style: ,
    StudentScore_Typography_Style: {
      height: 'max-content',
      width: '17%',
      textAlign: 'center',
      fontSize: '13px',
      fontWeight: '500',
      color: '#3F3D56',
      margin: '10px 0px 10px 0px',
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
      fontSize: '16px',
      fontWeight: '700',
      textTransform: 'Uppercase',
      color: '#3F3D56',
      width: 'auto',
      flexGrow: 1,
    },
    ActivityType_Typography_Style: {
      height: 'max-content',
      fontSize: '13px',
      fontWeight: '500',
      textTransform: 'Capitalize',
      color: '#3F3D56',
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
    ActivityInstructionsHead_Typography_Style: {
      width: '100%',
      fontSize: '13px',
      fontWeight: '700',
      textTransform: 'Uppercase',
      color: '#3F3D56',
    },
    ActivityInstructions_Typography_Style: {
      width: '100%',
      fontSize: '12px',
      fontWeight: '500',
      color: '#3F3D56',
      marginTop: '2px',
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
    Divider2_Style: {
      width: 'relative',
      margin: '0px 40px',
      [theme.breakpoints.down('sm')]: {
        margin: '0px 15px',
      },
    },
    ViewComments_Style: {
      height: 'auto',
      width: 'relative',
      margin: '5px 40px',
      display: 'flex',
      gap: '8px',
      [theme.breakpoints.down('sm')]: {
        margin: '5px 15px',
      },
    },
    ViewComments_Typography_Style: {
      height: 'max-content',
      width: 'max-content',
      color: '#3F3D56',
      fontSize: '12px',
      padding: '1px 0px',
      margin: '5px 0px',
    },
    IconButtonDropdown_Style: {
      marginTop: '2px',
      height: '25px',
      width: '25px',
    },
    DropdownIcon_Style: {
      color: '#9C9C9C',
      fontSize: '20px',
    },
    WriteComment_Style: {
      width: 'relative',
      margin: '0px 40px',
      height: 'auto',
      display: 'flex',
      gap: '6px',
      [theme.breakpoints.down('sm')]: {
        margin: '0px 15px',
      },
    },
    UserAvatar_Style: {
      marginTop: '2px',
    },
    Comment_TextField_Style: {
      width: '100%',
    },
    IconButtonSend_Style: {
      height: '35px',
      width: '35px',
      margin: '2px 0px',
    },
    SendIcon_Style: {
      marginLeft: '2px',
      color: '#3F3D56',
      fontSize: '20px',
    },
    StudentWorks_Style: {
      paddingBottom: '10px',
      height: 'auto',
      backgroundColor: '#FCFCFC',
      border: '1px solid #DBDBDB',
    },
    StudentWorks_Typography_Style: {
      height: 'max-content',
      width: 'relative',
      fontSize: '14px',
      fontWeight: '600',
      textTransform: 'Uppercase',
      color: '#3F3D56',
      margin: '10px 40px',
      [theme.breakpoints.down('sm')]: {
        margin: '10px 15px',
      },
    },
    UploadedFilesContainer_Style: {
      marginTop: '5px',
      height: 'auto',
      width: 'relative',
      padding: '5px 40px 5px 40px',
      [theme.breakpoints.down('sm')]: {
        padding: '5px 15px',
      },
    },
    StudentUploadedFileContainer_Style: {
      backgroundColor: '#F6F6F6',
      padding: '5px',
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 0px 2px -1px, rgba(0, 0, 0, 0.3) 0px 2px 3px -1px',
      height: '100%',
      width: 'relative',
      overflowY: 'auto',
    },
    StudentName_Typography_Style: {
      color: '#3F3D56',
      fontSize: '13px',
      fontWeight: '500',
      width: '100%',
      height: 'max-content',
      marginBottom: '5px',
    },
    AttachFile_Style: {
      backgroundColor: 'white',
      width: '80%',
      marginTop: '0.8em',
      padding: '8px 15px',
      display: 'flex',
      gap: '15px',
      border: '1px solid #D4D4D4',
      borderRadius: '0.3em',
      '&: hover': {
        cursor: 'pointer',
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    AttachFile2_Style: {
      backgroundColor: 'white',
      width: 'relative',
      padding: '8px 15px',
      display: 'flex',
      gap: '15px',
      border: '1px solid #D4D4D4',
      borderRadius: '0.3em',
      marginBottom: '0.3em',
      '&: hover': {
        cursor: 'pointer',
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      },
    },
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
