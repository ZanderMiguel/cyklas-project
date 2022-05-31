import React from 'react';
import { Grid, Box, Typography, Avatar } from '@mui/material';
import { Star, SchoolOutlined } from '@mui/icons-material';
import axios from 'axios';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';
import ProfileBackground from '../assets/ImageJaven/ProfileBackground.png';

function DashboardStatisticsV2({ roomdata }) {
  const studentsLength = React.useRef(null);
  const [rate, setRate] = React.useState(null);
  React.useEffect(() => {
    axios
      .post('http://localhost:5000/room/get/student-length', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        studentsLength.current = res.data;
      })
      .catch((err) => console.log(err));
    axios
      .get('http://localhost:5000/find/rate')
      .then((res) => {
        setRate(
          res.data.filter(
            (item) =>
              item._id.profID ===
              JSON.parse(localStorage.userData).data.user._id
          )
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Grid
        item
        xs={8}
        sx={{
          paddingLeft: '0.5em',
        }}
      >
        <Box
          sx={{
            width: 'relative',
            height: '10em',
            padding: '0.7em 0.8em',
            backgroundColor: 'white',
            backgroundImage: `url(${ProfileBackground})`,
            backgroundSize: 'cover',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '0.8em',
              height: 'auto',
              width: 'relative',
            }}
          >
            <Avatar
              src={JSON.parse(localStorage.userData).data.imageUrl}
              alt="Avatar"
              sx={{ height: '4em', width: '4em' }}
            />

            <Box
              sx={{
                height: 'auto',
                width: 'auto',
              }}
            >
              <Typography
                children={`${
                  JSON.parse(localStorage.userData).data.user.firstName
                } ${JSON.parse(localStorage.userData).data.user.lastName}`}
                sx={{
                  marginTop: '0.3em',
                  fontSize: '1.2em',
                  fontWeight: '600',
                  color: '#3F3D56',
                  height: 'max-content',
                }}
              />

              <Typography
                children="Professor"
                sx={{
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#8E8E8E',
                  height: 'max-content',
                  marginBottom: '0.5em',
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: '0.5em',
              alignItems: 'center',
              width: 'relative',
              height: 'auto',
              paddingLeft: '0.5em',
              marginTop: '1em',
            }}
          >
            <Star sx={{ color: '#F9A826', fontSize: '2em' }} />

            <Typography
              children={`${(rate && rate[0]?.rating) || 0} Ratings`} //tang
              sx={{
                fontSize: '1.3em',
                fontWeight: '700',
                color: '#F9A826',
                height: 'max-content',
                textTransform: 'Uppercase',
              }}
            />
          </Box>
        </Box>
      </Grid>

      <Grid xs={4} sx={{ paddingLeft: '0.5em' }}>
        <Box
          sx={{
            width: 'relative',
            height: '10em',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            padding: '1em 0em 0em 0em',
            backgroundColor: 'white',
            // border: "2px solid #007FFF",
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '1em',
              width: 'relative',
              margin: '0em 1em',
            }}
          >
            <Box sx={{ height: 'auto', width: 'auto' }}>
              <Box
                sx={{
                  height: '2.8em',
                  width: '2.8em',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '3em',
                  backgroundColor: '#FF8000',
                }}
              >
                <SchoolOutlined sx={{ color: 'white', fontSize: '2em' }} />
              </Box>
            </Box>

            <Box sx={{ height: 'auto', width: 'relative' }}>
              <Typography
                sx={{
                  color: '#8E8E8E',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  width: 'auto',
                  height: 'auto',
                  textTransform: 'Capitalize',
                }}
              >
                Total Enrolled Students
              </Typography>

              <Typography
                noWrap
                sx={{
                  color: '#615F79',
                  fontSize: '1.8em',
                  fontWeight: '600',
                  width: 'relative',
                  height: 'auto',
                  wordBreak: 'break-all',
                  textTransform: 'Uppercase',
                }}
              >
                {studentsLength.current}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default DashboardStatisticsV2;
