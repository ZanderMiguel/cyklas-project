import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
    Post_Style: {
      width: '100%',
      height: 'auto',
      margin: '20px 0px',
      paddingBottom: '15px',
      border: ' 1px solid #DBDBDB',
      borderRadius: '0.8em',
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
      marginTop: '1px',
    },
    Date_Typography_Style: {
      width: 'max-content',
      fontSize: '10px',
      color: '#3F3D56',
      fontWeight: '500',
      fontStyle: 'Italic',
      marginRight: '5px',
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
      borderRadius: "0em",
      height: '1.2em',
      width: '1.2em',
      margin: '8px 0px',
      "&: hover": {
        backgroundColor: "transparent"
      }
    },
    EditIcon_Style: {
      color: '#615F79',
      fontSize: '20px',
      "&: hover": {
        color: '#007FFF',
      }
    },
    DeleteIcon_Style: {
      color: '#615F79',
      fontSize: '20px',
      "&: hover": {
        color: '#FF3B00',
      }
    },
    MoreVertIcon_Style: {
      color: '#3F3D56',
      fontSize: '20px',
      "&: hover": {
        color: '#007FFF',
      }
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
      margin: '0px 25px 5px 20px',
    },
    View_Comments_Style: {
      height: 'auto',
      width: 'relative',
      paddingLeft: '20px',
      marginBottom: '5px',
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
      padding: '0px 25px 0px 15px',
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
    }
  };

  return { designs };
}

export default useStyle;
