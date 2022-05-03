import React from 'react';
import { Grid, Box, Typography, Divider, Checkbox } from '@mui/material';
import Image from '../../assets/ImageJaven/Image.png';
import useStyle from '../Styles/Exam_start_style';
import '../Styles/Exam_start_stylesheet.css';
function ExamCB({ item, index, qAnswers }) {
  const { designs } = useStyle();
  React.useMemo(() => { qAnswers.current.push({}) }, [])
  qAnswers.current[index]['answeredBy'] = JSON.parse(localStorage.userData).data.user._id
  qAnswers.current[index]['questions'] = item._id
  const handleCheck = (event) => {

    if (event.target.checked) {
      qAnswers.current[index]['answers'] += `${event.target.name},`
      qAnswers.current[index]['answers'] = qAnswers.current[index]['answers'].replace('undefined', '')
      console.log(qAnswers.current[index]['answers'])
    }
    if (event.target.checked === false) {
      qAnswers.current[index]['answers'] = qAnswers.current[index]['answers'].replace(`${event.target.name},`, '')
      console.log(qAnswers.current[index]['answers'])
    }
  }
  return (
    <Grid item xs={12} sx={designs.Question_GridItem_Style}>
      <Box className="Type-points" sx={designs.Type_Points_Style}>
        <Typography sx={designs.Type_Typography_Style}>Checkboxes</Typography>

        <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

        <Typography sx={designs.Points_Typography_Style}>{item.points}</Typography>
      </Box>

      <Box className="Question-body" sx={designs.Question_Body_Style}>
        <Box
          className="Question-container"
          sx={designs.Question_Container_Style}
        >
          <Box className="Question" sx={designs.Question_Style}>
            <Typography sx={designs.Item_Typography_Style}>{index + 1}.</Typography>

            <Typography sx={designs.Question_Typography_Style}>
              {item.questionsContent}
            </Typography>
          </Box>

          <Divider sx={designs.Divider_Style} />

          <Box
            className="Image-container"
            sx={designs.Image_Container_Responsive_Style}
          >
            <img
              src={Image}
              alt="uploadedImage"
              style={{
                height: '5.5em',
              }}
            />
          </Box>

          <Box className="Choices" sx={designs.Choices_Style}>
            <Box className="Option1" sx={designs.Answer_A_Style}>
              <Checkbox sx={designs.Checkbox_Style} onChange={(e) => handleCheck(e)} name='answer1' />

              <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                {item.qAnswers.answer1}
              </Typography>
            </Box>

            <Box className="Option2" sx={designs.Answer_B_Style}>
              <Checkbox sx={designs.Checkbox_Style} onChange={(e) => handleCheck(e)} name='answer2' />

              <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                {item.qAnswers.answer2}
              </Typography>
            </Box>

            <Box className="Option3" sx={designs.Answer_C_Style}>
              <Checkbox sx={designs.Checkbox_Style} onChange={(e) => handleCheck(e)} name='answer3' />

              <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                {item.qAnswers.answer3}
              </Typography>
            </Box>

            <Box className="Option4" sx={designs.Answer_D_Style}>
              <Checkbox sx={designs.Checkbox_Style} onChange={(e) => handleCheck(e)} name='answer4' />

              <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                {item.qAnswers.answer4}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="Image-container" sx={designs.Image_Container_Style}>
          <img
            src={item.media || Image}
            alt="uploadedImage"
            style={{
              height: '6.5em',
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default ExamCB;
