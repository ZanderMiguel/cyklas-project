import React from 'react';
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  IconButton,
  Container,
  Grid,
  Box,
  Button,
  Paper,
} from '@mui/material';
import { Circle } from '@mui/icons-material';
import ActivityIcon from '../../../../assets/ImageJaven/ActivityIcon.png';
import useStyle from './Styles/Activities_layout_style';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';

const data = [
  {
    // Lesson: 'Lesson 5',
    Activity: 'Activity 5',
    Type: 'Homework',
    DueDate: 'December 05, 2021',
    DueTime: '5:00 PM',
    Status: 'handed-out',
    PointsValue: '100',
    PostedBy: 'Mark Andrei',
    PostedTime: 'Posted on December 10, 2021 at 10:00 PM',
    InstructionsHead: 'First, read all directions carefully',
    Instructions: `Read all questions carefully and don't forget to answer all parts of
        the question.`,
    ActivityFile: 'Activity 5.docx',
  },
  {
    // Lesson: 'Lesson 4',
    Activity: 'Activity 4',
    Type: 'Activity',
    DueDate: 'December 02, 2021',
    DueTime: '1:00 PM',
    Status: 'handed-out',
    PointsValue: '100',
    PostedBy: 'Mark Andrei',
    PostedTime: 'Posted on November 27, 2021 at 6:30 PM',
    InstructionsHead: 'First, read all directions carefully',
    Instructions: `Read all questions carefully and don't forget to answer all parts of
        the question.`,
    ActivityFile: 'Activity 4.docx',
  },
  {
    // Lesson: 'Lesson 3',
    Activity: 'Activity 3',
    Type: 'Activity',
    DueDate: 'November 15, 2021',
    DueTime: '9:00 AM',
    Status: 'handed-out',
    PointsValue: '100',
    PostedBy: 'Mark Andrei',
    PostedTime: 'Posted on November 10, 2021 at 4:00 PM',
    InstructionsHead: 'First, read all directions carefully',
    Instructions: `Read all questions carefully and don't forget to answer all parts of
        the question.`,
    ActivityFile: 'Activity 3.docx',
  },
];

function Activities_layout({ roomID, activity }) {
  const { designs } = useStyle();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {/* {activity &&
        activity.map((items, index) => {
          return (
            <Box
              key={index}
              className="Activity_Tiles"
              sx={designs.Activity_Tiles}
            >
              <Accordion
                expanded={expanded === `${items.Activity}`}
                onChange={handleChange(`${items.Activity}`)}
                sx={designs.Accordion_Style}
              >
                <AccordionSummary
                  aria-controls={items.Activity}
                  id={items.Activity}
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

                      <Typography noWrap sx={designs.Status}>
                        {items.Status}
                      </Typography>

                      <Circle sx={designs.StatusIcon_Style} />
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

                  <Button
                    sx={designs.ViewHomework_Button_Style}
                    component={Link}
                    to="/Activity_viewed"
                  >
                    View Homework
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Box>
          );
        })} */}
      {activity &&
        activity.map(function (items, index) {
          const {
            activityDueDate: duedate,
            activityInstruction: instruction,
            activityPoints: points,
            activityTitle: title,
            activityType: type,
          } = items;
          return (
            <Grid key={index} item xs={12}>
              <Box className="Activity_Tiles" sx={designs.Activity_Tiles}>
                <Accordion
                  expanded={expanded === `${index}`}
                  onChange={handleChange(`${index}`)}
                  sx={designs.Accordion_Style}
                >
                  <AccordionSummary
                    aria-controls={items.Activity}
                    id={items.Activity_FileName_Typography}
                    sx={designs.AccordionSummary_Style}
                  >
                    <Box display="flex" alignItem="center" width="100%">
                      <img
                        src={ActivityIcon}
                        style={{
                          height: '30px',
                          margin: '4px 15px 0px 0px',
                        }}
                      />
                      <Typography noWrap sx={designs.Activity_Typography}>
                        {title}
                      </Typography>
                      <Box flexGrow={1} />
                      <Typography noWrap sx={designs.Type_Typography}>
                        {type}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <Divider />

                  <AccordionDetails sx={designs.Accordion_Details_Style}>
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
                            {type}
                          </Typography>
                        </Box>
                      </Box>
                      <Box display="flex">
                        <Typography
                          sx={{
                            mt: 1,
                            fontWeight: '500',
                            fontSize: '13px',
                          }}
                        >
                          {duedate ? `Due Date: ` : 'No Due Date'}
                        </Typography>
                        <Typography
                          sx={{
                            ml: 1,
                            mt: 1,
                            fontWeight: '500',
                            fontSize: '13px',
                          }}
                        >
                          {duedate ? duedate : ''}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      className="Activity-details2"
                      sx={designs.Activity_Details2_Style}
                    >
                      <Typography sx={designs.Instructions_Typography}>
                        {instruction ? 'Instructions: ' : ''}
                      </Typography>
                      <Box>{ReactHtmlParser(draftToHtml(instruction))}</Box>
                    </Box>
                    <Box>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Paper sx={{ width: '100%' }}>
                            Every Files uploaded file goes here
                          </Paper>
                        </Grid>
                        <Grid item xs={6}>
                          <Paper sx={{ width: '100%' }}>
                            Every Files uploaded file goes here
                          </Paper>
                        </Grid>
                        <Grid item xs={6}>
                          <Paper sx={{ width: '100%' }}>
                            Every Files uploaded file goes here
                          </Paper>
                        </Grid>
                      </Grid>
                    </Box>
                  </AccordionDetails>
                  <Divider />
                  <AccordionActions
                    sx={{ justifyContent: 'flex-start', padding: '10px' }}
                  >
                    <Button
                      sx={designs.ViewHomework_Button_Style}
                      component={Link}
                      to={`/Rooms/${roomID}/s/${items._id}`}
                    >
                      VIEW ACTIVITY
                    </Button>
                  </AccordionActions>
                </Accordion>
              </Box>
            </Grid>
          );
        })}
    </>
  );
}

export default Activities_layout;
