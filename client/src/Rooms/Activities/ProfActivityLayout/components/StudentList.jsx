import React from 'react';
import { Box, Typography, Checkbox, Avatar } from '@mui/material';
import AvatarIcon from '../../../../assets/ImageJaven/Avatar.png';
import '../../../Styles/View_activity_style.css';
import useStyle from '../../../Styles/View_activity_style';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Score from './Score';

function StudentList({
  setSubmitData,
  setStudentID,
  score,
  activityView,
  submitData,
  scores,
}) {
  const { designs } = useStyle();
  const { roomID, activityID } = useParams();
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios
      .post('http://localhost:5000/rooms/my-room', {
        roomID,
      })
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
            let stdData;
            console.log(submitData);
            axios
              .post('http://localhost:5000/activity/get/submit', {
                activityID,
                stdID: items._id,
              })
              .then((res) => {
                stdData = res.data.activity;
              })
              .catch((err) => console.log(err));

            return (
              <Box
                key={index}
                sx={designs.Student_Box_Style}
                onClick={() => {
                  setStudentID(items._id);
                  axios
                    .post('http://localhost:5000/activity/get/submit', {
                      activityID,
                      stdID: items._id,
                    })
                    .then((res) => {
                      setSubmitData(res.data.activity);
                    })
                    .catch((err) => console.log(err));
                  document.querySelector('#activityScore').value =
                    score[items._id] || 0;
                }}
              >
                {stdData && (
                  <Checkbox
                    sx={designs.Student_Checkbox_Style}
                    disabled={
                      stdData?.[0]?.submittedBy.userID === items._id &&
                      stdData?.[0]?.activityStatus === 'Graded' &&
                      true
                    }
                    onChange={(e) => {
                      if (e.target.checked === true) {
                        scores.current.push({
                          stdID: items._id,
                          score: score[items._id] || 0,
                        });
                      }
                      if (e.target.checked === false) {
                        scores.current = scores.current.filter((value) => {
                          return value.stdID !== items._id;
                        });
                      }
                    }}
                  />
                )}
                <Avatar
                  alt="Remy Sharp"
                  src={items.image.replace(
                    'blob:',
                    ''
                  )}
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

                <Score
                  submitData={submitData}
                  score={score}
                  activityView={activityView}
                  items={items}
                  designs={designs}
                />
              </Box>
            );
          }
        })}
    </>
  );
}

export default StudentList;
