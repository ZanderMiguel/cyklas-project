import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import ExamIcon from '../../../../assets/ImageJaven/ExamIcon.png';
import useStyle from './Styles/Exams_layout_style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
function Exams_layout() {
  const { designs } = useStyle();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios
      .post('http://localhost:5000/quizlit/student', {
        stdID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {data &&
        data.quizlits.map((items, index) => {
          return (
            <Box sx={designs.BoxTileContainer} key={index}>
              <img
                src={ExamIcon}
                alt="ExamIcon"
                style={{
                  height: '2.2em',
                  margin: '0.3em 0.8em 0em 0em',
                }}
              />

              <Box
                sx={designs.ExamName_User_Date}
                component={Link}
                to={`/ExamViewedV2/${items._id}`}
              >
                <Typography noWrap sx={designs.Exam}>
                  {items.title}
                </Typography>
              </Box>

              {/* <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/> */}

              <Box className="points-score" sx={designs.Points_Score_Style}>
                <Typography noWrap sx={designs.Points_Style}>
                  {_.sum(data.storePoints[items._id])} Point(s)
                </Typography>

                <Divider orientation="vertical" sx={designs.DividerV_Style} />

                <Typography noWrap sx={designs.Score_Style}>
                  {data.storePoints[items._id].length} Item(s)
                </Typography>
              </Box>

              <Box sx={designs.BoxOptions}>
                <IconButton sx={designs.IconButtonOptions}>
                  <MoreVert sx={designs.MoreVertIcon} />
                </IconButton>
              </Box>
            </Box>
          );
        })}
    </>
  );
}

export default Exams_layout;
