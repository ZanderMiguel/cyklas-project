function useStyle() {
  const designs = {
    Container_Style: {
      padding: '1em',
    },
    ButtonContainer_Style: {
      width: 'relative',
      display: 'flex',
      margin: '0em 1.5em 0.9em 1.5em',
      justifyContent: 'center',
    },
    AddMember_Button_Style: {
      backgroundColor: '#F74747',
      color: 'white',
      borderRadius: '0.3em',
      '&:hover': {
        backgroundColor: '#F24545',
      },
    },
  };
  return { designs };
}

export default useStyle;
