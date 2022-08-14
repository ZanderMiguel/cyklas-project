import React from 'react'
import { Box, Typography } from "@mui/material";
import Download from "../../../../assets/ImageJaven/download.jpg";

function QuizCheckImageV2() {
  return (
    <Box
            className="Item-4"
            sx={{
              backgroundColor: 'white',
              borderRadius: '0.3em',
              padding: '0.8em 1em',
              marginBottom: '0.5em',
              width: 'relative',
              height: 'auto',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '1em',
                alignItems: 'center',
                marginBottom: '0.5em',
              }}
            >
              <Typography
                children="Question 2"
                sx={{
                  flexGrow: '1',
                  fontSize: '1em',
                  fontWeight: '600',
                  color: '#007FFF',
                  textTransform: 'Capitalize',
                  height: 'max-content',
                }}
              />

              <Typography
                children="image multiple choice"
                sx={{
                  fontSize: '0.7em',
                  fontWeight: '500',
                  color: '#8E8E8E',
                  textTransform: 'Uppercase',
                  height: 'max-content',
                }}
              />
              <Typography
                children="5 points"
                sx={{
                  fontSize: '0.7em',
                  fontWeight: '500',
                  color: '#8E8E8E',
                  textTransform: 'Uppercase',
                  height: 'max-content',
                }}
              />
              <Typography
                children="15 seconds"
                sx={{
                  fontSize: '0.7em',
                  fontWeight: '500',
                  color: '#8E8E8E',
                  textTransform: 'Uppercase',
                  height: 'max-content',
                }}
              />
            </Box>

            <Typography
              children="Blank Question"
              sx={{
                flexGrow: '1',
                fontSize: '0.8em',
                fontWeight: '600',
                color: '#3F3D56',
                textTransform: 'none',
                height: 'max-content',
                marginBottom: '0.8em',
              }}
            />

            {/* <Box
            className="Image-container"
            sx={{
                width: 'relative',
                height: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '1em',
            }}
            >
            <img
                src={item.media || Image}
                alt="uploadedImage"
                style={{
                width: '100%',
                height: '300px',
                objectFit: 'contain',
                }}
            />
            </Box> */}

            <Box
              className="Choices"
              sx={{
                display: 'flex',
                gap: "0.5em",
                width: 'relative',
                height: 'auto',
              }}
            >
              <Box 
        sx = {{
            marginBottom: "0.5em",
            display: "flex",
            alignItems: "center",
            padding: "5em",
            backgroundImage: `url(${Download})`,
            backgroundSize: 'cover',
            border: "5px solid #7223F3",
            borderRadius: "0.5em",
            width: "50%"
        }}>
            
        </Box>

        <Box 
        // sx = {{
        //     marginBottom: "0.5em",
        //     display: "flex",
        //     alignItems: "center",
        //     padding: "5em",
        //     backgroundColor: "#EA4848",
        //     borderRadius: "0.5em",
        //     width: "50%"
        // }}
        sx = {{
            marginBottom: "0.5em",
            display: "flex",
            alignItems: "center",
            padding: "5em",
            backgroundImage: `url(${Download})`,
            backgroundSize: 'cover',
            border: "5px solid #DBDBDB",
            borderRadius: "0.5em",
            width: "50%"
        }}>
            
        </Box>

        <Box
        // sx = {{
        //     marginBottom: "0.5em",
        //     display: "flex",
        //     alignItems: "center",
        //     padding: "5em",
        //     backgroundColor: "#66C34E",
        //     borderRadius: "0.5em",
        //     width: "50%"
        // }}
        sx = {{
            marginBottom: "0.5em",
            display: "flex",
            alignItems: "center",
            padding: "5em",
            backgroundImage: `url(${Download})`,
            backgroundSize: 'cover',
            border: "5px solid #DBDBDB",
            borderRadius: "0.5em",
            width: "50%"
        }}>
            
        </Box>

        <Box 
        // sx = {{
        //     marginBottom: "0.5em",
        //     display: "flex",
        //     alignItems: "center",
        //     padding: "5em",
        //     backgroundColor: "#E3A649",
        //     borderRadius: "0.5em",
        //     width: "50%"
        // }}
        sx = {{
            marginBottom: "0.5em",
            display: "flex",
            alignItems: "center",
            padding: "5em",
            backgroundImage: `url(${Download})`,
            backgroundSize: 'cover',
            border: "5px solid #DBDBDB",
            borderRadius: "0.5em",
            width: "50%"
        }}>
            
        </Box>
            </Box>

            <Typography
              sx={{
                height: 'max-content',
                width: 'relative',
                color: '#007FFF',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              Correct Answer: Image 1
            </Typography>
          </Box>
  )
}

export default QuizCheckImageV2