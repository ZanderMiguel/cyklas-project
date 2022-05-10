import React from 'react';
import { Box, Typography, Checkbox, Avatar } from '@mui/material';
import AvatarIcon from '../../../../assets/ImageJaven/Avatar.png';
import '../../../Styles/View_activity_style.css';
import useStyle from '../../../Styles/View_activity_style';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function StudentList({ setSubmitData, submitData }) {
  const { designs } = useStyle();
  const { roomID, activityID } = useParams();
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios
      .post('http://localhost:5000/rooms/my-room', { roomID })
      .then((res) => {
        axios
          .post('http://localhost:5000/get/members', {
            members: res.data.members,
          })
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {data &&
        data.map(function (items, index) {
          if (items.userType === 'Student') {
            return (
              <Box
                key={index}
                sx={designs.Student_Box_Style}
                onClick={() => {
                  axios
                    .post('http://localhost:5000/activity/get/submit', {
                      activityID,
                      stdID: items._id,
                    })
                    .then((res) => {
                      console.log(res.data);
                      setSubmitData(res.data.activity);
                    })
                    .catch((err) => console.log(err));
                }}
              >
                <Checkbox sx={designs.Student_Checkbox_Style} />
                <Avatar
                  alt="Remy Sharp"
                  src={items.image}
                  sx={designs.Student_Avatar_Style}
                />
                <Typography
                  noWrap
                  sx={{
                    height: 'max-content',
                    width: '47%',
                    textTransform: 'Capitalize',
                    textAlign: 'Left',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#3F3D56',
                    margin: '10px 0px 10px 0px',
                  }}
                >
                  {items.firstName} {items.lastName}
                </Typography>
                <Box flexGrow={1} height="relative" width="relative" />
                <Typography sx={designs.StudentScore_Typography_Style}>
                  40/40
                </Typography>
              </Box>
            );
          }
        })}
    </>
  );
}

export default StudentList;
