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
import { Edit, Delete } from '@mui/icons-material';
import ActivityIcon from '../../../assets/ImageJaven/ActivityIcon.png';
import useStyle from '../../Styles/ActivitiesAccordion_Style';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';

function ActivitiesAccordion({ roomID, activity }) {
  const { designs } = useStyle();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleEdit = (event) => {
    event.stopPropagation();
  };
  const handleDelete = (event) => {
    event.stopPropagation();
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
            _id: _id,
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
                    <Box
                      className="Button-container-sub"
                      sx={designs.Button_Container_Sub}
                    >
                      <IconButton
                        aria-label="edit"
                        size="small"
                        onClick={(event) => handleEdit(event)}
                      >
                        <Edit sx={designs.Edit_Icon_Style} />
                      </IconButton>

                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={(event) => handleDelete(event)}
                      >
                        <Delete sx={designs.Delete_Icon_Style} />
                      </IconButton>
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
                      to={`/Rooms/${roomID}/p/${_id}`}
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

export default ActivitiesAccordion;
