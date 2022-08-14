import React from 'react';
import { Typography, IconButton, Box } from '@mui/material';
import ExamIcon from '../../assets/ImageJaven/ExamIcon.png';
import { MoreVert, DeleteOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useStyle from '../Styles/Exam_style';
import CusPopover from '../../components/Popover';
import SchoolworksTilespopover from '../../components/PopoverContent/SchoolworksTilespopover';
import axios from 'axios';

function Exam_layout({ bank }) {
  const { designs } = useStyle();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDelete = (_id) => {
    console.log(_id);

    axios
      .delete('http://localhost:5000/quizlit/delete', {
        quizID: _id,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  const handleCloseOption = () => {
    setAnchorEl(null);
  };
  const account = Boolean(anchorEl);

  return (
    <>
      {bank.map((item, idx) => {
        const { title, _id } = item;

        return (
          <Box sx={designs.BoxTileContainer} key={idx}>
            <Box sx={designs.ExamContainer}>
              <img
                src={ExamIcon}
                alt="QuizIcon"
                style={{
                  height: '2.2em',
                  margin: '0em 0.8em 0em 0em',
                }}
              />

              <Box
                sx={designs.ExamName_User_Date}
                component={Link}
                to={`/quizlit/view_exam/${_id}`}
              >
                <Box sx={designs.ExamName}>
                  <Typography noWrap sx={designs.Exam}>
                    {title}
                  </Typography>
                </Box>
              </Box>

              <Box sx={designs.BoxOptions}>
                <IconButton
                  onClick={() => handleDelete(_id)}
                  sx={designs.IconButtonOptions}
                >
                  {/* <MoreVert sx={designs.MoreVertIcon} /> */}
                  <DeleteOutlined sx={designs.MoreVertIcon} />
                </IconButton>

                {/* <CusPopover
                  PaperProps={{ elevation: 1 }}
                  open={account}
                  anchorEl={anchorEl}
                  onClose={handleCloseOption}
                >
                  <SchoolworksTilespopover/>
                </CusPopover> */}
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
}

export default Exam_layout;
