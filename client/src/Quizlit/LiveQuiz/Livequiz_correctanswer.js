import React from 'react'
import { Container, Grid, Box, Typography } from "@mui/material";
import { CheckCircleOutlined } from "@mui/icons-material";
import useStyle from "./Styles/Livequiz_correctanswer_style";

function Livequiz_correctanswer() {
const {designs} = useStyle();

  return (
    <Box className = "container" sx = {{
        width: "100%",
        height: "100vh",
        backgroundColor: "#39BA45",
        display: "flex",
        gap: "0.5em",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Box className = "Headline" sx = {{
            width: "auto",
            height: "auto",
            display: "flex",
            gap: "1em",
            justifyContent: "center",
            alignItems: "center"
        }}>
        <CheckCircleOutlined sx = {{
            fontSize: "4em",
            color: "white"
        }}/>

        <Typography sx = {{ 
            fontSize: "2em",
            fontWeight: "600",
            color: "white",
            textTransform: "Capitalize"
            }}>
            Your answer is correct!
        </Typography>
        </Box>

        <Typography sx = {{
            width: "relative",
            fontSize: "1.1em",
            fontWeight: "600",
            color: "white",
            textAlign: "center",
            textTransform: "Uppercase"
            }}>
            + 2 Points
        </Typography>
        
        {/* <Container maxWidth = "md" sx = {{ marginTop: "2em" }}>
        <Grid
        container
        columnSpacing={1}
        rowSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-a"
            sx={designs.Answer_A_Style}
          >
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
              <Typography sx={designs.Answer_A_Typography_Style}>A.</Typography>
            </Box>
            <Typography noWrap sx={designs.Answer_A_Typography2_Style}>
              Blank Answer
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-b"
            sx={designs.Answer_B_Style}
          >
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
              <Typography sx={designs.Answer_B_Typography_Style}>B.</Typography>
            </Box>
            <Typography noWrap sx={designs.Answer_B_Typography2_Style}>
              Blank Answer
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={1}
        rowSpacing={1} sx = {{ marginTop: "0.1em" }}>
        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-c"
            sx={designs.Answer_C_Style}
          >
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
              <Typography sx={designs.Answer_C_Typography_Style}>C.</Typography>
            </Box>
            <Typography noWrap sx={designs.Answer_C_Typography2_Style}>
              Blank Answer
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-d"
            sx={designs.Answer_D_Style}
          >
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
              <Typography sx={designs.Answer_D_Typography_Style}>D.</Typography>
            </Box>
            <Typography noWrap sx={designs.Answer_D_Typography2_Style}>
              Blank Answer
            </Typography>
          </Box>
        </Grid>
        </Grid>
        </Container> */}
        
    </Box>
  )
}

export default Livequiz_correctanswer