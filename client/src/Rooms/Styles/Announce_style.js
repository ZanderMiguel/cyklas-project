import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
    Post_Style: {
      backgroundColor: 'white',
      width: '100%',
      height: 'auto',
      margin: '20px 0px',
      paddingBottom: '15px',
      border: "1px solid #DBDBDB",
      borderRadius: '0.3em 0.3em 0em 0em',
      '&: hover': {
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        borderBottom: '4px solid #007FFF',
        transition: 'all 250ms',
      },
    },
    User_Style: {
      padding: '7px 15px',
      gap: '13px',
      display: 'flex',
      width: 'relative',
      height: 'auto',
    },
    AvatarPost_Style: {
      margin: '1px 0px',
      height: '45px',
      width: '45px',
    },
    User_Date_Style: {
      margin: '3px 0px',
    },
    UserName_Typography_Style: {
      fontSize: '14px',
      color: '#3F3D56',
      fontWeight: '600',
    },
    Date_Style: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    Date_Typography_Style: {
      width: 'max-content',
      fontSize: '10px',
      color: '#8E8E8E',
      fontWeight: '500',
      fontStyle: 'Italic',
    },
    Slash_Typography_Style: {
      fontSize: '10px',
      color: '#3F3D56',
      fontWeight: '500',
      fontStyle: 'Italic',
      marginRight: '5px',
    },
    Time_Typography_Style: {
      width: 'max-content',
      fontSize: '10px',
      color: '#3F3D56',
      fontWeight: '500',
      fontStyle: 'Italic',
    },
    BoxFlexGrow_Style: {
      flexGrow: 1,
      height: 'relative',
    },
    Option_IconButton_Style: {
      height: '1.3em',
      width: '1.3em',
      margin: '8px 0px',
    },
    EditIcon_Style: {
      color: '#707070',
      fontSize: '20px',
      '&: hover': {
        color: '#007FFF',
      },
    },
    DeleteIcon_Style: {
      color: '#707070',
      fontSize: '20px',
      '&: hover': {
        color: '#707070',
      },
    },
    MoreVertIcon_Style: {
      color: '#3F3D56',
      fontSize: '20px',
      '&: hover': {
        color: '#007FFF',
      },
    },
    Post_Content_Style: {
      padding: '10px 75px',
      marginBottom: '15px',
      width: 'relative',
      height: 'auto',
    },
    Post_Typography_Style: {
      textAlign: 'justify',
      fontSize: '14px',
      color: '#3F3D56',
      fontWeight: '500',
    },
    Divider_Style: {
      width: 'relative',
    },
    View_Comments_Style: {
      backgroundColor: '#FCFCFC',
      height: 'auto',
      width: 'relative',
      paddingLeft: '20px',
      display: 'flex',
      gap: '8px',
    },
    View_Comments_Typography_Style: {
      height: 'max-content',
      width: 'max-content',
      color: '#3F3D56',
      fontSize: '12px',
      padding: '1px 0px',
      margin: '5px 0px',
    },
    Dropdown_IconButton_Style: {
      marginTop: '2px',
      height: '25px',
      width: '25px',
    },
    KeyboardArrowDownIcon_Style: {
      color: '#9C9C9C',
      fontSize: '20px',
    },
    Write_Comment_Style: {
      padding: '0px 15px',
      display: 'flex',
      gap: '10px',
      width: 'relative',
      height: 'auto',
    },
    AvatarComment_Style: {
      marginTop: '2px',
    },
    Comment_TextField_Style: {
      width: '100%',
    },
    Send_IconButton_Style: {
      height: '35px',
      width: '35px',
      margin: '2px 0px',
    },
    SendIcon_Style: {
      color: '#3F3D56',
      fontSize: '20px',
    },
    Actions_Style: {
      marginTop: '0.3em',
      display: 'flex',
      gap: '1em',
    },
    EditComment_Button_Style: {
      fontSize: '0.5em',
      fontWeight: '400',
      color: '#3F3D56',
    },
    DividerV_Style: {
      margin: '0.2em 0em',
    },
    DeleteComment_Button_Style: {
      fontSize: '0.5em',
      fontWeight: '400',
      color: '#3F3D56',
    },

    // Schoolworktiles_layout
    BoxTileContainer: {
      className: 'Tiles1',
      width: 'relative',
      height: 'auto',
      margin: '0em 4.5em 1em 4.5em',
      padding: '0.5em 1em',
      display: 'flex',
      border: ' 1px solid #DBDBDB',
      borderRadius: '0.3em',
      '&: hover': {
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      },
    },
    ActivityContainer: {
      className: 'Activity-container',
      display: 'flex',
      width: '100%',
      gap: '0.8em',
    },
    ActivityName_User_Date: {
      className: 'Activity-name-User-date',
      height: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      '&: hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
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
      // width: '25em',
      width: 'auto',
      flexGrow: 1,
      height: 'relative',
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
      fontSize: '0.5em',
      fontWeight: '700',
      textTransform: 'Capitalize',
      fontStyle: 'Italic',
      color: '#3F3D56',
    },
    Date: {
      width: '45em',
      fontSize: '0.5em',
      fontWeight: '600',
      textTransform: 'none',
      fontStyle: 'Italic',
      color: '#3F3D56',
      [theme.breakpoints.down('md')]: {
        width: '30em',
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
