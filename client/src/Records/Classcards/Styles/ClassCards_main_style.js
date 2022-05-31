function useStyle() {
  const designs = {
    Content_Container_Style: {
      margin: '2em 0em',
      padding: '1em 1.5em',
    },
    SearchBar_Style: {
      border: '1px solid #DBDBDB',
      backgroundColor: 'white',
      borderRadius: '0.3em',
      padding: '0.3em 1em 0.3em 0.8em',
      display: 'flex',
      gap: '0.5em',
      alignItems: 'center',
      height: 'auto',
      width: 'relative',
      '&: hover': {
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        transition: 'all 300ms',
      },
    },
    SearchBar_IconButton_Style: {
      backgroundColor: 'transparent',
      height: '1em',
      width: '1em',
      '&: hover': {
        backgroundColor: '#FCF9FB',
      },
    },
    SearchBar_Icon_Style: {
      color: '#82818E',
      fontSize: '0.8em',
    },
    SearchBar_Input_Style: {
      width: '100%',
      backgroundColor: 'transparent',
      fontSize: '0.8em',
      fontWeight: '500',
      color: '#3F3D56',
    },
  };

  return { designs };
}
export default useStyle;
