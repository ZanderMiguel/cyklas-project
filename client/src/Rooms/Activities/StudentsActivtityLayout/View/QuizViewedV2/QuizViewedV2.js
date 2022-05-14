import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  CssBaseline,
  Avatar,
} from '@mui/material';
import { CheckCircleOutlined, WorkspacePremium } from '@mui/icons-material';
import QuizIcon from '../../../../../assets/ImageJaven/QuizIcon.png';
import AvatarIcon from '../../../../../assets/ImageJaven/Avatar.png';
import QuizCheckMultiV2 from "../../../../../Quizlit/Quizbank-content-layout/Quizbank-view/ViewQuizV2/QuizCheckMultiV2"
import QuizCheckImageV2 from "../../../../../Quizlit/Quizbank-content-layout/Quizbank-view/ViewQuizV2/QuizCheckImageV2"
import QuizCheckTFV2 from "../../../../../Quizlit/Quizbank-content-layout/Quizbank-view/ViewQuizV2/QuizCheckTFV2"

function QuizViewedV2() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ padding: '0em 0em 2em 0em' }}>
        <Grid
          item
          xs={12}
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            backgroundColor: '#49B854',
            padding: '0.3em 1.5em',
            display: 'flex',
            gap: '0.5em',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1em',
            borderRadius: '0em 0em 0.5em 0.5em',
          }}
        >
          <CheckCircleOutlined sx={{ color: 'white', fontSize: '1.5em' }} />

          <Typography
            children="Graded"
            sx={{
              color: 'white',
              fontSize: '1.2em',
              fontWeight: '500',
              textTransform: 'Uppercase',
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
                gap: '0.5em',
                alignItems: 'center',
                padding: '0.5em 1.1em 0.5em 0.9em',
                marginBottom: '0.5em',
                backgroundColor: "white",
                borderRadius: "0.3em"
          }}
        >
          <Avatar src={AvatarIcon} alt="Avatar" sx = {{ height: "2.5em", width: "2.5em" }}/>

          <Box
            sx={{
              width: 'auto',
              flexGrow: 1,
              height: 'auto',
            }}
          >
            <Typography
              children="Armin Arlert"
              sx={{
                color: '#3F3D56',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'none',
                width: 'auto',
                height: 'max-content',
              }}
            />

            <Box
            sx = {{
                width: "auto",
                height: "auto",
                display: "flex",
                gap: "0.3em",
                alignItems: 'center'
            }}>
                <WorkspacePremium sx = {{ color: "#FBC112" }}/>
                
                <Typography
                children="1st place"
                sx={{
                    color: '#8E8E8E',
                    fontSize: '0.7em',
                    fontWeight: '500',
                    textTransform: 'none',
                    width: 'auto',
                    height: 'max-content',
                }}
                />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: '0.8em',
              alignItems: 'center',
              width: 'auto',
              height: 'auto',
            }}
          >
            <Typography
              children=" Your Score:"
              sx={{
                color: '#8E8E8E',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Uppercase',
                width: 'auto',
                height: 'max-content',
              }}
            />

            <Typography
              children="100 / 100"
              sx={{
                color: '#007FFF',
                fontSize: '0.8em',
                fontWeight: '700',
                textTransform: 'Uppercase',
                width: 'auto',
                height: 'max-content',
              }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: 'white',
            padding: '0.8em 1.1em',
            borderRadius: '0.3em',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.5em',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              height: 'auto',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '0.8em',
                alignItems: 'center',
                marginBottom: '0.5em',
              }}
            >
              <img
                src={QuizIcon}
                alt="Quiz Icon"
                style={{
                  height: '2em',
                }}
              />

              <Typography
                children="Untitled Quiz"
                sx={{
                  flexGrow: '1',
                  fontSize: '1.3em',
                  fontWeight: '600',
                  color: '#3F3D56',
                  textTransform: 'none',
                  height: 'max-content',
                }}
              />
            </Box>
          </Box>
        </Grid>

        <QuizCheckMultiV2 />
        <QuizCheckImageV2 />
        <QuizCheckTFV2 />
      </Container>
    </>
  );
}

export default QuizViewedV2;
