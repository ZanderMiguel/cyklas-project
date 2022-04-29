function useStyle() {
  const designs = {
    leftIcons: {
      IconbuttonStyle: {
        mr: 1.5,
        '&:hover': {
          backgroundColor: '#3C4043',
        },
      },
      buttonStyle: {
        color: 'whiteSmoke',
      },
      button_click_style: {
        color: '#007FFF',
      },
    },
    videoContainer: {
      display: 'flex',
      width: '100%',
      height: 'calc(100% - 80px)'
    },
    icon_container: {
      display: 'flex',
      alignItems: 'center',
    },
    rightIcons: {
      IconbuttonStyle: {
        ml: 0.5,
        '&:hover': {
          backgroundColor: '#3C4043',
        },
      },
      buttonStyle: {
        color: 'whiteSmoke',
      },
      button_click_style: {
        color: 'whiteSmoke',
      },
    },
  };
  return { designs };
}

export default useStyle;
