import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
    Container_Style: {
      width: "auto",
      height: "auto"
    },
    Nav_Style: {
      width: '100%',
    },
    Container_Sub_Style: {
      padding: "0em 1em",
      margin: "0.5em 0em",
      display: 'flex',
      gap: "0.8em",
      overFlowY: 'auto',
    },
    ProfileImg_Style: {
    },
    Container_Sub2_Style: {
      width: "100%",
      height: "auto",
      display: 'flex',
      gap: "0.8em"
    },
    Setting_Style: {
      color: "#6C6C6C",
      fontSize: "1.5em"
    },
    Logout_Style: {
      color: "#6C6C6C",
      fontSize: "1.5em"
    },
  };

  return { designs, theme };
}

export default useStyle;
