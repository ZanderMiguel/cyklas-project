import React from 'react';
import { Box, Typography, Checkbox, Avatar } from '@mui/material';
import '../../Styles/View_quiz_stylesheet.css';
import useStyle from '../../Styles/View_exam_style';
function StudentsList({ items, setStdID, scores }) {
  const { designs } = useStyle();
  return (
    <Box
      sx={designs.Student_Box_Style}
      onClick={() => {
        console.log(items._id);
        setStdID(items._id);
      }}
    >
      {document.getElementById(`${items._id}`)?.innerHTML !== 'Graded' && (
        <Checkbox
          sx={designs.Student_Checkbox_Style}
          onChange={(e) => {
            if (e.target.checked === true) {
              scores.current.push({
                stdID: items._id,
                score: document
                  .getElementById(`${items._id}`)
                  .innerHTML.replace('%', ''),
              });

              console.log(
                scores.current.filter((value) => {
                  return value.stdID;
                })
              );
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
      <Typography
        id={items._id}
        sx={designs.StudentScore_Typography_Style}
      ></Typography>
    </Box>
  );
}

export default StudentsList;
