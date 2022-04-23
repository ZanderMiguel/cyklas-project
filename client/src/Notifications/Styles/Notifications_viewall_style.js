function useStyle() {
  const designs = {
    RequestContainer_Style: {
      margin: '0.8em 0em 0.8em 0em',
      padding: '0em 0em 0em 1em',
      width: 'relative',
      height: 'auto',
    },
    RequestContainer_Sub_Style: {
      borderRadius: '0.3em',
      backgroundColor: '#F6F9F6',
      padding: '0.5em 0.8em',
      marginBottom: '0.5em',
      width: 'relative',
      display: 'flex',
      gap: '0.8em',
    },
    RequestContainer_Sub2_Style: {
      display: 'flex',
    },
    RequestDivider_Style: {
      margin: '0.5em 0em 0.5em 3.4em',
    },
    Divider_Style: {
      margin: '0.5em 0em 0.5em 1.5em',
    },
    GeneralContainer_Style: {
      margin: '0.8em 0em 0.8em 0em',
      padding: '0em 0em 0em 1em',
      width: 'relative',
      height: 'auto',
    },
    GeneralContainer_Sub_Style: {
      borderRadius: '0.3em',
      backgroundColor: '#F6F9F6',
      padding: '0.5em 0.8em',
      marginBottom: '0.5em',
      width: 'relative',
      display: 'flex',
      gap: '0.8em',
      '&: hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
        // boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
      },
    },
    GeneralContainer_Sub2_Style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    GeneralContainer_Sub3_Style: {
      width: '100%',
      height: '20rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return { designs };
}

export default useStyle;
