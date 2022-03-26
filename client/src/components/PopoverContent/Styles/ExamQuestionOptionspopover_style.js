import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Exam_Options_Style: {
    width: 'auto',
    height: 'auto',
    padding: "0.5em 2em",
    backgroundColor: 'White',
    [theme.breakpoints.up('sm')]: {
        display: "none"
    }
  },
  Other_Buttons_Style: {
    padding: '0em 0em 1.5em 0em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button_Container_Style: {
    width: '110%',
    marginTop: "0.5em",
    height: 'auto',
    display: "flex",
    gap: "0.5em"
  },
  Required_Button_Style: {
      width: "auto",
      height: "relative",
      display: "flex",
      gap: "0.5em",
      justifyContent: "center",
      alignItems: "center"
  },
  Required_Checkbox_Style: {
    color: '#BABABA',
    height: '2.2em',
    width: '2.2em'
  },
  Required_Typography_Style: {
    color: '#007FFF',
    fontSize: "0.9em",
    fontWeight: "600"
  },
  Duplicate_IconButton_Style: {
    height: '1.5em',
    width: '1.5em',
    "&: hover": {
        backgroundColor: "transparent"
    }
  },
  DuplicateIcon_Style: {
    color: '#716F87',
    fontSize: '0.9em',
  },
  Delete_IconButton_Style: {
    height: '1.5em',
    width: '1.5em',
  },
  DeleteIcon_Style: {
    color: '#716F87',
    fontSize: '1em',
  },
  FormControl_Style: {
    width: '100%',
  },
  InputLabel_Style: {
    fontSize: '0.9em',
    fontWeight: '600',
    color: '#737373',
  },
  Select_Style: {
    width: '100%',
    borderBottom: '1px solid #DBDBDB',
  }
};

return {designs};
}

export default useStyle;  