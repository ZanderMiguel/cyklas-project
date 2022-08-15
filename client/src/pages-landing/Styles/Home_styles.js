function useStyle() {
  const designs = {
    // LEFT SIDE
    firstBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "11em",
      height: "100vh",
      marginTop: "4em",
    },
    left_first: { width: "60%", fontWeight: "bold", color: "#3F3D56" },
    left_second: {
      fontSize: "0.8em",
      fontWeight: "500",
      textTransform: "Uppercase",
      textAlign: "center",
      color: "#626170",
      margin: "0.8em 0em",
      width: "60%",
      padding: "0.2em 0em",
      backgroundColor: "transparent",
    },
    btn_Create: {
      margin: "0.8em 0em",
      padding: "0.5em 0em",
      width: "60%",
      boxShadow: "none",
      backgroundColor: "#007FFF",
      color: "white",
      fontWeight: "600",
      borderRadius: "0.3em",
      "&:hover": {
        backgroundColor: "#0072e6",
      },
    },
    left_Image: {
      wheight: "300px",
      width: "100%",
      maxWidth: "600px",
      marginTop: "16px",
    },
    //RIGHT SIDE
    paper_Style: { width: "20rem", padding: "30px" },
    paper_Logo: { width: "6rem", height: "auto" },
    paper_Link: { color: "#007FFF", textDecoration: "none" },
    paper_btn_Submit: {
      backgroundColor: "#007FFF",
      fontSize: "0.9em",
      fontWeight: "600",
      color: "white",
      borderRadius: "0.3em",
      boxShadow: "none",
      marginBottom: "0em",
      "&:hover": {
        backgroundColor: "#0072e6",
      },
    },
  };

  return { designs };
}

export default useStyle;
