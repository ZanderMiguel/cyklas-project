import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
    Quiz_Options_Responsive_Style: {
      height: 'auto',
      width: '100%',
      border: '1px solid black',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
        marginTop: '0em',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'initial',
        marginTop: '0.5em',
      },
    },
    Quiz_Options_IconButton_Style: {
      height: '1.5em',
      width: '1.5em',
      float: 'right',
    },
    MoreVertIcon_Style: {
      color: '#8E8E8E',
      fontSize: '1em',
    },
    Quiz_Container_Style: {
      marginBottom: '0.8em',
      height: 'auto',
      width: '100%',
      borderRadius: '0.3em 0.3em 0em 0em',
      '&: hover': {
        transition: 'all 250ms',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        borderBottom: '4px solid #007FFF',
      },
      [theme.breakpoints.up('sm')]: {
        marginTop: '0.1em',
      },
    },
    Quiz_Container_Sub_Style: {
      display: 'flex',
      width: '100%',
      height: 'auto',
      borderRadius: '0.3em 0.3em 0em 0em',
    },
    Quiz_Question_Style: {
      width: '80%',
      height: 'auto',
      backgroundColor: 'white',
      borderRadius: '0.3em 0em 0em 0em',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        borderRight: 'none',
      },
    },
    Quiz_Question_Sub_Style: {
      width: '100%',
      height: 'auto',
      backgroundColor: '#007FFF',
      borderRadius: '0.3em 0em 0em 0em',
    },
    Quiz_Question_TextField_Style: {
      width: '100%',
      height: 'auto',
      backgroundColor: '#007FFF',
      borderRadius: '0em',
      borderRadius: '0.3em 0em 0em 0em',
      '&: hover': {
        backgroundColor: '#007FFF',
      },
    },
    Instruction_Input_Style: {
      backgroundColor: 'transparent',
      fontSize: '0.9em',
      fontWeight: '500',
      color: '#3F3D56',
    },
    Quiz_Item_Style: {
      height: '1.9em',
      width: '1.9em',
      margin: '0em 0.3em 1em 0.2em',
      backgroundColor: 'White',
      borderRadius: '3em',
      [theme.breakpoints.down('sm')]: {
        margin: '0em 0.3em 1em 0.2em',
      },
    },
    Quiz_Item_Typography_Style: {
      fontSize: '0.9em',
      color: '#007FFF',
      fontWeight: '600',
      margin: '0.4em 0.3em 0.3em 0.8em',
    },
    Quiz_Question_Image_Style: {
      width: 'relative',
      height: 'auto',
      paddingBottom: 2,
    },
    Quiz_Question_Image_Sub_Style: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5em',
      justifyContent: 'center',
      alignItems: 'center',
    },
    Insert_Image_Button_Style: {
      width: '15em',
      height: 'auto',
      marginBottom: '1em',
      color: '#8E8E8E',
      textTransform: 'none',
      fontSize: '0.8em',
      backgroundColor: 'White',
      border: '1px solid #8E8E8E',
      borderRadius: '0.7em',
      boxShadow: 'none',
      '&: hover': {
        backgroundColor: 'White',
        boxShadow: 'none',
      },
    },
    Quiz_Options_Style: {
      width: '50%',
      height: 'relative',
      backgroundColor: 'White',
      borderRadius: '0em 0.3em 0em 0em',
      '&: hover': {
        transition: 'all 250ms',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    Other_Buttons_Style: {
      padding: '0.5em 0em 1.5em 0em',
      display: 'flex',
      flexDirection: 'column',
      gap: '1em',
      justifyContent: 'center',
      alignItems: 'center',
    },
    Delete_Question_Style: {
      width: '100%',
      height: 'auto',
    },
    Delete_IconButton_Style: {
      float: 'right',
      marginRight: '0.5em',
      height: '1.5em',
      width: '1.5em',
    },
    DeleteIcon_Style: {
      color: '#716F87',
      fontSize: '1em',
    },
    FormControl_Style: {
      width: '87%',
    },
    InputLabel_Style: {
      fontSize: '0.9em',
      fontWeight: '600',
      color: '#737373',
    },
    Select_Style: {
      width: '100%',
      borderBottom: '1px solid #DBDBDB',
    },
    Answer_Type_Autocomplete_Style: {
      width: '80%',
      borderBottom: '1px solid #DBDBDB',
    },
    Time_Limit_Autocomplete_Style: {
      width: '80%',
      borderBottom: '1px solid #DBDBDB',
    },
    Points_Autocomplete_Style: {
      width: '80%',
      borderBottom: '1px solid #DBDBDB',
    },
    Quiz_Answers_Style: {
      backgroundColor: 'white',
      borderTop: '1px solid #DBDBDB',
      padding: '1em',
      width: 'relative',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6em',
      [theme.breakpoints.down('sm')]: {
        padding: '1em',
      },
    },
    Answer_A_B_Style: {
      height: 'auto',
      width: 'auto',
    },
    Answer_A_TextField_Style: {
      width: '100%',
      height: 'auto',
      backgroundColor: '#975DF5',
      borderRadius: '0.5em',
      '&: hover': {
        backgroundColor: '#975DF5',
      },
    },
    Quiz_Item_Style2: {
      height: '1.9em',
      width: '1.9em',
      margin: '0em 0.3em 1em 0.8em',
      backgroundColor: 'White',
      borderRadius: '3em',
      [theme.breakpoints.down('sm')]: {
        margin: '0em 0.3em 1em 0.2em',
      },
    },
    Answer_A_Typography_Style: {
      fontSize: '0.9em',
      color: '#975DF5',
      fontWeight: '600',
      margin: '0.4em 0.3em 0.3em 0.7em',
    },
    Correct_Answer_IconButton_Style: {
      height: '1.2em',
      width: '1.2em',
      border: '2px solid White',
      marginRight: '0.6em',
      [theme.breakpoints.down('sm')]: {
        marginRight: '0.2em',
      },
    },
    CheckIcon_Style: {
      color: 'White',
      fontSize: '0.8em',
    },
    Answer_B_TextField_Style: {
      width: '100%',
      height: 'auto',
      backgroundColor: '#F55D5D',
      borderRadius: '0.5em',
      '&: hover': {
        backgroundColor: '#F55D5D',
      },
    },
    Answer_B_Typography_Style: {
      fontSize: '0.9em',
      color: '#F55D5D',
      fontWeight: '600',
      margin: '0.4em 0.3em 0.3em 0.7em',
    },
    Answer_C_D_Style: {
      height: 'auto',
      width: 'auto',
    },
    Answer_C_TextField_Style: {
      width: '100%',
      height: 'auto',
      backgroundColor: '#6CCF53',
      borderRadius: '0.5em',
      '&: hover': {
        backgroundColor: '#6CCF53',
      },
    },
    Answer_C_Typography_Style: {
      fontSize: '0.9em',
      color: '#6CCF53',
      fontWeight: '600',
      margin: '0.4em 0.3em 0.3em 0.7em',
    },
    Answer_D_TextField_Style: {
      width: '100%',
      height: 'auto',
      backgroundColor: '#F1B04E',
      borderRadius: '0.5em',
      '&: hover': {
        backgroundColor: '#F1B04E',
      },
    },
    Answer_D_Typography_Style: {
      fontSize: '0.9em',
      color: '#F1B04E',
      fontWeight: '600',
      margin: '0.4em 0.3em 0.3em 0.7em',
    },
    Add_Question_Button_Style: {
      backgroundColor: '#0069D3',
      textTransform: 'Capitalize',
      fontSize: '0.8em',
      fontWeight: '600',
      width: 'max-content',
      padding: '0.4em 2.4em',
      borderRadius: '0.4em',
      boxShadow: 'none',
      '&: hover': {
        boxShadow: 'none',
      },
    },
    CreateQuiz_Button_Style: {
      backgroundColor: '#4CAF50',
      borderRadius: '0.4em',
      color: 'white',
      fontSize: '0.8em',
      fontWeight: '700',
      textTransform: 'Capitalize',
      padding: '0.4em 2.4em',
      boxShadow: 'none',
      '&: hover': {
        backgroundColor: '#43A047',
      },
    },
  };

  return { designs };
}

export default useStyle;
