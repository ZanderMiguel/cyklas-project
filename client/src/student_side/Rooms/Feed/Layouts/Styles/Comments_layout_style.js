import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
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
    },
    Actions_Style: {
      marginTop: "0.3em",
      display: "flex",
      gap: "1em"
    },
    EditComment_Button_Style: {
      fontSize: "0.5em",
      fontWeight: "400",
      color: "#3F3D56"
    },
    DividerV_Style: { 
      margin: "0.2em 0em" 
    },
    DeleteComment_Button_Style: {
      fontSize: "0.5em",
      fontWeight: "400",
      color: "#3F3D56"
    }
  };

  return { designs };
}

export default useStyle;
