import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Zander from '../assets/Images/zander.png';
import Paner from '../assets/Images/paner.png';
import Habalita from '../assets/Images/habalita.png';
import Hiquiana from '../assets/Images/hiquiana.png';
import Rellama from '../assets/Images/rellama.png';
import Rabago from '../assets/Images/rabago.png';
import Orense from '../assets/Images/orense.png';
import Warren from '../assets/Images/warren.png';

const cards = {
  marginBottom: '20px',
};

function About() {
  return (
    <div className="Toptext">
      <Typography
        sx={{ fontWeight: 'bold', fontSize: 50 }}
        style={{ color: '#3F3D56' }}
        variant="h3"
        align="center"
        mt={10}
      >
        {' '}
        Our Team
      </Typography>
      <Typography
        sx={{ fontWeight: 'bold' }}
        style={{ color: '#EB7E42' }}
        variant="h5"
        align="center"
        mt={1}
      >
        {' '}
        We are the CyCrowd Co.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > : not(style)': {
            ml: 'auto',
            mr: 'auto',
            mt: 3,
            width: 320,
            height: 460,
          },
          gap: '20px',
        }}
      >
        <Card elevation={1} sx={{ maxWidth: 320, ...cards }}>
          <CardMedia
            style={{
              height: '170px',
              width: '120px',
              marginTop: '20px',
              marginLeft: '100px',
            }}
            component="img"
            height="140"
            alt="Zander"
            src={Zander}
          />
          <CardContent>
            <Typography align="center" variant="h6" component="div">
              Zander Miguel Mirador
            </Typography>
            <Typography
              sx={{ mt: 1, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="subtitle2"
              component="div"
            >
              CHIEF EXECUTIVE OFFICER / UX TEAM LEADER
            </Typography>
            <Typography
              sx={{ mt: 6, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="paragraph"
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={1} sx={{ maxWidth: 320, ...cards }}>
          <CardMedia
            style={{
              height: '170px',
              width: '120px',
              marginTop: '20px',
              marginLeft: '100px',
            }}
            component="img"
            height="140"
            alt="Paner"
            src={Paner}
          />
          <CardContent>
            <Typography align="center" variant="h6" component="div">
              Rey Paner
            </Typography>
            <Typography
              sx={{ mt: 1, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="subtitle2"
              component="div"
            >
              BACK END LEADER/ UX RESEARCHER
            </Typography>
            <Typography
              sx={{ mt: 6, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="paragraph"
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={1} sx={{ maxWidth: 320, ...cards }}>
          <CardMedia
            style={{
              height: '170px',
              width: '120px',
              marginTop: '20px',
              marginLeft: '100px',
            }}
            component="img"
            height="140"
            alt="Habalita"
            src={Habalita}
          />
          <CardContent>
            <Typography align="center" variant="h6" component="div">
              Javen Habalita
            </Typography>
            <Typography
              sx={{ mt: 1, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="subtitle2"
              component="div"
            >
              UX DESIGNER / QUALITY ASSURANCE LEADER
            </Typography>
            <Typography
              sx={{ mt: 6, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="paragraph"
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={1} sx={{ maxWidth: 320, ...cards }}>
          <CardMedia
            style={{
              height: '170px',
              width: '120px',
              marginTop: '20px',
              marginLeft: '100px',
            }}
            component="img"
            height="140"
            alt="Hiquiana"
            src={Hiquiana}
          />
          <CardContent>
            <Typography align="center" variant="h6" component="div">
              Al Cedric Hiquiana
            </Typography>
            <Typography
              sx={{ mt: 1, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="subtitle2"
              component="div"
            >
              FRONT-END DEVELOPER
            </Typography>
            <Typography
              sx={{ mt: 6, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="paragraph"
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={1} sx={{ maxWidth: 320, ...cards }}>
          <CardMedia
            style={{
              height: '170px',
              width: '120px',
              marginTop: '20px',
              marginLeft: '100px',
            }}
            component="img"
            height="140"
            alt="Rellama"
            src={Rellama}
          />
          <CardContent>
            <Typography align="center" variant="h6" component="div">
              Charles John Rellama
            </Typography>
            <Typography
              sx={{ mt: 1, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="subtitle2"
              component="div"
            >
              BACKEND DEVELOPER
            </Typography>
            <Typography
              sx={{ mt: 6, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="paragraph"
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={1} sx={{ maxWidth: 320, ...cards }}>
          <CardMedia
            style={{
              height: '170px',
              width: '120px',
              marginTop: '20px',
              marginLeft: '100px',
            }}
            component="img"
            height="140"
            alt="Rabago"
            src={Rabago}
          />
          <CardContent>
            <Typography align="center" variant="h6" component="div">
              Lester Rabago
            </Typography>
            <Typography
              sx={{ mt: 1, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="subtitle2"
              component="div"
            >
              QUALITY ASSURANCE ANALYST
            </Typography>
            <Typography
              sx={{ mt: 6, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="paragraph"
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={1} sx={{ maxWidth: 320, ...cards }}>
          <CardMedia
            style={{
              height: '170px',
              width: '120px',
              marginTop: '20px',
              marginLeft: '100px',
            }}
            component="img"
            height="140"
            alt="Orense"
            src={Orense}
          />
          <CardContent>
            <Typography align="center" variant="h6" component="div">
              Mark Andrei Orense
            </Typography>
            <Typography
              sx={{ mt: 1, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="subtitle2"
              component="div"
            >
              TESTER
            </Typography>
            <Typography
              sx={{ mt: 6, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="paragraph"
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={1} sx={{ maxWidth: 320, ...cards }}>
          <CardMedia
            style={{
              height: '170px',
              width: '120px',
              marginTop: '20px',
              marginLeft: '100px',
            }}
            component="img"
            height="140"
            alt="Warren"
            src={Warren}
          />
          <CardContent>
            <Typography align="center" variant="h6" component="div">
              Jame Warren Nario
            </Typography>
            <Typography
              sx={{ mt: 1, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="subtitle2"
              component="div"
            >
              TESTER
            </Typography>
            <Typography
              sx={{ mt: 6, fontWeight: 'bold' }}
              style={{ color: '#8A8994' }}
              align="center"
              variant="paragraph"
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default About;
