import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from '@mui/material';
import Zander from '../assets/Images/zander.png';
import Paner from '../assets/Images/paner.png';
import Habalita from '../assets/Images/habalita.png';
import Hiquiana from '../assets/Images/hiquiana.png';
import Rellama from '../assets/Images/rellama.png';
import Rabago from '../assets/Images/rabago.png';
import Orense from '../assets/Images/orense.png';
import Footer from './Footer';

const cards = {
  marginBottom: '20px',
};

const Cycrowd = [
  {
    avatar: (
      <Avatar
        src={Zander}
        alt="ZanderMiguel"
        sx={{ width: '7rem', height: '7rem', mt: '2rem' }}
      />
    ),
    name: 'Zander Miguel Mirador',
    position: 'CHIEF EXECUTIVE OFFICER / UX TEAM LEADER',
    description: `He graduated on STI Novaliches with the Track of STEM, he wants to
    further explore and gain more knowledge, thats when he joined the
    Cycrowd he joined Cycrowd in 2020 and now he is a leader and also
    the CEO, he always bringing his team to the limits. He had the
    skills and attitude to lead also capable of dabbling front-end and
    back-end development.`,
  },
  {
    avatar: (
      <Avatar
        src={Paner}
        alt="Reypaner"
        sx={{ width: '7rem', height: '7rem', mt: '2rem' }}
      />
    ),
    name: 'Rey Paner',
    position: 'BACK END LEADER/ UX RESEARCHER',
    description: `A leader of the Back-end development and the UX researcher, he focues on server administration and 
    usability testing and also capable of doing front-end development. He joined
    Cycrowd in order to gain more experience and knowledge when it comes
    to client side and server side developlment.
    `,
  },
  {
    avatar: (
      <Avatar
        src={Habalita}
        alt="Javenhabalita"
        sx={{ width: '7rem', height: '7rem', mt: '2rem' }}
      />
    ),
    name: 'Javen Habalita',
    position: 'UX DESIGNER / QUALITY ASSURANCE LEADER',
    description: `A User experience designer (UX) and Quality assurance leader, he has a wide range of knowledge when it comes to
    UX , he always focuses on client's side experience by creating a user friedly interfaces that will help users to easily operate our product.
    by joining Cycrowd he wants to hone skills and expand his knowledge when it comes to user interface designing.
    
    `,
  },
  {
    avatar: (
      <Avatar
        src={Hiquiana}
        alt="AlCedrichiquiana"
        sx={{ width: '7rem', height: '7rem', mt: '2rem' }}
      />
    ),
    name: 'Al Cedric Hiquiana',
    position: 'FRONT-END DEVELOPER',
    description: `An experienced User interface (UI) designer he always thinks what brand aethetics and tone
    he brings a wide range of knowledge when it comes to web designing
    He joined cycrowd to challenge himself to further improve his web designing and to 
    achieve the core value of Cycrowd which is delighting our clients.
    
    `,
  },
  {
    avatar: (
      <Avatar
        src={Rellama}
        alt="Charlesjohnrellama"
        sx={{ width: '7rem', height: '7rem', mt: '2rem' }}
      />
    ),
    name: 'Charles John Rellama',
    position: 'BACKEND DEVELOPER',
    description: `He also currently focuses on back-end development, 
    charles joined cycrowd because he wants to expand his knowledge when it comes to client side development
    and constantly strives to achieve the cycrowd core value. 
    `,
  },
  {
    avatar: (
      <Avatar
        src={Rabago}
        alt="Lesterrabago"
        sx={{ width: '7rem', height: '7rem', mt: '2rem' }}
      />
    ),
    name: 'Lester Rabago',
    position: 'QUALITY ASSURANCE ANALYST',
    description: `A Quality Assurance analyst, He joined Cycrowd because He wants to improve his skills when it comes to identifying and resolving bugs, defects and other
    potential issues, he mostly expend his time doing test and making recommendations for repairing defects, also in creating, reviewing and refine user
    experience documents.
     
    `,
  },
  {
    avatar: (
      <Avatar
        src={Orense}
        alt="Markandreiorense"
        sx={{ width: '7rem', height: '7rem', mt: '2rem' }}
      />
    ),
    name: 'Mark Andrei Orense',
    position: 'TESTER',
    description: `A software tester, Currently employed at Cycrowd and responsible for designing test scenarios for software usability by running some test and 
    preparing reports on the effectiveness and defects to the production team.
     
    `,
  },
];

function About() {
  return (
    <>
      <div className="Toptext">
        <Typography
          sx={{ fontWeight: 'bold', fontSize: 50 }}
          style={{ color: '#3F3D56' }}
          variant="h3"
          align="center"
          mt={10}
        >
          Our Team
        </Typography>
        <Typography
          sx={{ fontWeight: 'bold' }}
          style={{ color: '#EB7E42' }}
          variant="h5"
          align="center"
          mt={1}
        >
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
              height: 'auto',
            },
            gap: '2em',
          }}
        >
          {Cycrowd.map((items, index) => (
            <Card elevation={1} sx={{ maxWidth: 320, ...cards }} key={index}>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {items.avatar}
              </Box>
              <CardContent>
                <Typography
                  align="center"
                  variant="h6"
                  sx={{ fontWeight: 700 }}
                >
                  {items.name}
                </Typography>
                <Typography
                  sx={{ color: '#8A8994', mt: 1, fontWeight: 600 }}
                  align="center"
                  variant="subtitle2"
                >
                  {items.position}
                </Typography>
                <Typography
                  sx={{ color: '#8A8994', mt: 3, fontWeight: 400 }}
                  align="center"
                  variant="body1"
                >
                  {items.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Footer />
      </div>
    </>
  );
}

export default About;
