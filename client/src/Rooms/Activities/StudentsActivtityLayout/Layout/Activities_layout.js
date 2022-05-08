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
import moment from 'moment'
import ActivityFile from '../../../../components/ActivityFile';

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

                      <Box
                        display="flex"
                        gap="0.8em"
                        padding="0.8em 0em 0em 0em"
                      >
                        <Typography
                          sx={{
                            fontWeight: '600',
                            fontSize: '13px',
                          }}
                        >
                          {duedate ? `Due Date: ` : 'No Due Date'}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: '500',
                            fontSize: '13px',
                          }}
                        >
                          {duedate ? moment(duedate).format('LL') : ''}
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
                    <Box
                      sx={{
                        padding: '0.8em 1.2em',
                      }}
                    >
                      <Grid container columnSpacing={1} rowSpacing={1}>
                        <Grid item xs={6}>
                          <ActivityFile />
                          {/* <Paper sx={{ width: '100%' }}>
                            Every Files uploaded file goes here
                          </Paper> */}
                        </Grid>
                        <Grid item xs={6}>
                          <ActivityFile />
                          {/* <Paper sx={{ width: '100%' }}>
                            Every Files uploaded file goes here
                          </Paper> */}
                        </Grid>
                        <Grid item xs={6}>
                          <ActivityFile />
                          {/* <Paper sx={{ width: '100%' }}>
                            Every Files uploaded file goes here
                          </Paper> */}
                        </Grid>
                      </Grid>
                    </Box>
                  </AccordionDetails>
                  <Divider />
                  <AccordionActions
                    sx={{ justifyContent: 'center', padding: '5px' }}
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
