function useStyle() {
  const designs = {
    Container_Style: {
      padding: '1em 0em',
    },
    ButtonContainer_Style: {
      width: 'relative',
      display: 'flex',
      margin: '0em 0em 0.9em 0em',
      justifyContent: 'center',
    },
    AddMember_Button_Style: {
      fontWeight: "600",
      backgroundColor: '#F74747',
      color: 'white',
      borderRadius: '0.3em',
      boxShadow: "none",
      '&:hover': {
        backgroundColor: '#F24545',
      },
    },
  };
  return { designs };
}

export default useStyle;
