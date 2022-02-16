import React from 'react';
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Container,
  Grid,
  Box,
  Button,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import ActivityIcon from '../../assets/ImageJaven/ActivityIcon.png';
import Wordfile from '../../assets/ImageJaven/Wordfile.png';
import useStyle from '../ActivitiesAccordion_Style';
import Divider from '@mui/material/Divider';

const data = [
  {
    Lesson: 'Lesson 5',
    Activity: 'Activity 5',
    Type: 'Homework',
    DueDate: 'December 05, 2021',
    DueTime: '5:00 PM',
    PointsValue: '100',
    PostedBy: 'Mark Andrei',
    PostedTime: 'Posted on December 10, 2021 at 10:00 PM',
    InstructionsHead: 'First, read all directions carefully',
    Instructions: `Read all questions carefully and don't forget to answer all parts of
        the question.`,
    ActivityFile: 'Activity 5.docx',
  },
  {
    Lesson: 'Lesson 4',
    Activity: 'Activity 4',
    Type: 'Activity',
    DueDate: 'December 02, 2021',
    DueTime: '1:00 PM',
    PointsValue: '100',
    PostedBy: 'Mark Andrei',
    PostedTime: 'Posted on November 27, 2021 at 6:30 PM',
    InstructionsHead: 'First, read all directions carefully',
    Instructions: `Read all questions carefully and don't forget to answer all parts of
        the question.`,
    ActivityFile: 'Activity 4.docx',
  },
  {
    Lesson: 'Lesson 3',
    Activity: 'Activity 3',
    Type: 'Activity',
    DueDate: 'November 15, 2021',
    DueTime: '9:00 AM',
    PointsValue: '100',
    PostedBy: 'Mark Andrei',
    PostedTime: 'Posted on November 10, 2021 at 4:00 PM',
    InstructionsHead: 'First, read all directions carefully',
    Instructions: `Read all questions carefully and don't forget to answer all parts of
        the question.`,
    ActivityFile: 'Activity 3.docx',
  },
];

function ActivitiesAccordion() {
  const { designs } = useStyle();

  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };
  console.log(expanded);

  return (
    <>
      {data.map(function (items, index) {
        return (
          <Grid key={index} item xs={12}>
            <Box className="Activity_Tiles" sx={designs.Activity_Tiles}>
              <Box className="Lesson" sx={designs.Lesson}>
                <Typography noWrap sx={designs.Lesson_Typography}>
                  {items.Lesson}
                </Typography>
              </Box>
              <Accordion
                expanded={expanded === `${items.Lesson}`}
                onChange={handleChange(`${items.Lesson}`)}
                sx={designs.Accordion_Style}
              >
                <AccordionSummary
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={designs.AccordionSummary_Style}
                >
                  <Box
                    className="Activity_Icon_Activity_Type"
                    sx={designs.Activity_Icon_Activity_Type}
                  >
                    <img
                      src={ActivityIcon}
                      style={{
                        height: '30px',
                        margin: '4px 15px 0px 0px',
                      }}
                    />

                    <Box
                      className="Activity_Information"
                      sx={designs.Activity_Information_Style}
                    >
                      <Typography noWrap sx={designs.Activity_Typography}>
                        {items.Activity}
                      </Typography>

                      <Typography noWrap sx={designs.Type_Typography}>
                        {items.Type}
                      </Typography>

                      <Typography noWrap sx={designs.Due_Date}>
                        Due Date:
                      </Typography>

                      <Typography noWrap sx={designs.Date}>
                        {items.DueDate}
                      </Typography>

                      <Box className="Seperator" sx={designs.Seperator}></Box>

                      <Typography noWrap sx={designs.Time}>
                        {items.DueTime}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ flexGrow: 1 }} />
                </AccordionSummary>
                <AccordionDetails sx={designs.Accordion_Details_Style}>
                  <Box
                    className="Button-container"
                    sx={designs.Button_Container_Style}
                  >
                    <Box
                      className="Button-flexGrow"
                      sx={designs.Button_FlexGrow}
                    />

                    <Box
                      className="Button-container-sub"
                      sx={designs.Button_Container_Sub}
                    >
                      <IconButton aria-label="edit" size="medium">
                        <Edit sx={designs.Edit_Icon_Style} />
                      </IconButton>

                      <IconButton aria-label="delete" size="medium">
                        <Delete sx={designs.Delete_Icon_Style} />
                      </IconButton>
                    </Box>
                  </Box>

                  <Box
                    className="Activity-details"
                    sx={designs.Activity_Details_Style}
                  >
                    <Box
                      className="Type_Due_Date"
                      sx={designs.Type_Due_Date_Style}
                    >
                      <Box className="Type">
                        <Typography sx={designs.Type_Responsive_Typography}>
                          Homework
                        </Typography>
                      </Box>

                      <Box className="Due_Date" sx={designs.DueDate_Responsive}>
                        <Typography sx={designs.DueDate_Responsive_Typography}>
                          Due Date:
                        </Typography>

                        <Typography sx={designs.Date_Responsive_Typography}>
                          December 05, 2021
                        </Typography>

                        <Box className="Seperator" sx={designs.SeperatorV} />

                        <Typography noWrap sx={designs.Responsive_Time}>
                          5:00 pm
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={designs.Empty_Box_FlexGrow} />

                    <Box sx={designs.Empty_Box_FlexGrow2} />

                    <Box
                      className="Points_Postedby"
                      sx={designs.Points_Postedby_Style}
                    >
                      <Box className="Points" sx={designs.Points}>
                        <Typography sx={designs.Points_Typography}>
                          Points:
                        </Typography>

                        <Typography sx={designs.Points_Value_Typography}>
                          {items.PointsValue}
                        </Typography>
                      </Box>

                      <Box className="Postedby" sx={designs.Postedby_Style}>
                        <Typography sx={designs.Postedby_Typography}>
                          {items.PostedBy}
                        </Typography>

                        <Typography sx={designs.Date_Posted_Typography}>
                          {items.PostedTime}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Divider sx={designs.Divider1} />

                  <Box
                    className="Activity-details2"
                    sx={designs.Activity_Details2_Style}
                  >
                    <Typography sx={designs.Instructions_Typography}>
                      {items.InstructionsHead}
                    </Typography>

                    <Typography sx={designs.Instructions2_Typography}>
                      {items.Instructions}
                    </Typography>

                    <Box className="Attach-file" sx={designs.Attach_File_Style}>
                      <Box className="Icon">
                        <img
                          src={Wordfile}
                          style={{
                            height: '40px',
                          }}
                        />
                      </Box>

                      <Box className="Activity-filename" marginTop="1px">
                        <Typography
                          noWrap
                          sx={designs.Activity_FileName_Typography}
                        >
                          {items.ActivityFile}
                        </Typography>

                        <Typography sx={designs.DocumentFile_Typography}>
                          Document File
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Divider sx={designs.Divider2} />

                  <Button sx={designs.ViewHomework_Button_Style}>
                    View Homework
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}

export default ActivitiesAccordion;
