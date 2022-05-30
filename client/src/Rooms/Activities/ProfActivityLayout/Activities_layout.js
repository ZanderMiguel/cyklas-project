import React from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  IconButton,
  Grid,
  Box,
  Button,
  Tooltip,
} from "@mui/material";
import moment from "moment";
import axios from "axios";
import { EditOutlined, DeleteOutlined, ExpandMore } from "@mui/icons-material";
import useStyle from "../../Styles/ActivitiesAccordion_Style";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";
import ActivityIcon from "../../../assets/ImageJaven/ActivityIcon.png";
import ActivityFile from "../../../components/ActivityFile";
import DeletingActivityConfirmation from "../../../Form_content/DeletingActivityConfirmation";

function ActivitiesAccordion({ roomID, activity, setDeleteRender }) {
  const { designs } = useStyle();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleEdit = (event) => {
    event.stopPropagation();
  };
  const handleDelete = (event, _id) => {
    event.stopPropagation();
    axios
      .delete("http://localhost:5000/activity/delete", {
        data: { id: _id },
      })
      .then((res) => setDeleteRender((prev) => !prev))
      .catch((err) => console.log(err));
  };

  const [
    opendialogDeletingActivityConfirmation,
    setOpenDialogDeletingActivityConfirmation,
  ] = React.useState(false);

  const handleCreateDeletingActivityConfirmation = (event) => {
    event.stopPropagation();
    setOpenDialogDeletingActivityConfirmation(true);
  };

  const handleCreateCloseDeletingActivityConfirmation = (event) => {
    event.stopPropagation();
    setOpenDialogDeletingActivityConfirmation(false);
  };

  return (
    <>
      {activity &&
        activity.map((items, index) => {
          const {
            activityDueDate: duedate,
            activityInstruction: instruction,
            activityPoints: points,
            activityTitle: title,
            activityType: type,
            _id: _id,
            media,
          } = items;

          return (
            <Grid key={`act${index}`} item xs={12}>
              <Box className="Activity_Tiles" sx={designs.Activity_Tiles}>
                <Accordion
                  expanded={expanded === `${index}`}
                  onChange={handleChange(`${index}`)}
                  sx={designs.Accordion_Style}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls={items.Activity}
                    id={items.Activity_FileName_Typography}
                    sx={designs.AccordionSummary_Style}
                  >
                    <Box display="flex" alignItem="center" width="100%">
                      <img
                        src={ActivityIcon}
                        style={{
                          height: "30px",
                          margin: "4px 15px 0px 0px",
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
                      {/* <IconButton
                        aria-label="edit"
                        size="small"
                        onClick={(event) => handleEdit(event)}
                      >
                        <EditOutlined sx={designs.Edit_Icon_Style} />
                      </IconButton> */}

                      <Tooltip title="Delete this activity" placement="right">
                        <IconButton
                          aria-label="delete"
                          size="small"
                          // onClick={(event) => handleDelete(event, _id)}
                          onClick={(event) =>
                            handleCreateDeletingActivityConfirmation(event)
                          }
                          sx={{ marginRight: "0.5em" }}
                        >
                          <DeleteOutlined sx={designs.Delete_Icon_Style} />
                        </IconButton>
                      </Tooltip>
                      {opendialogDeletingActivityConfirmation && (
                        <DeletingActivityConfirmation
                          open={opendialogDeletingActivityConfirmation}
                          close={handleCreateCloseDeletingActivityConfirmation}
                          maxWidth="sm"
                          state={setOpenDialogDeletingActivityConfirmation}
                        />
                      )}
                    </Box>
                  </AccordionSummary>
                  <Divider />

                  <AccordionDetails sx={designs.Accordion_Details_Style}>
                    <Box
                      sx={{
                        padding: "0em 1em",
                      }}
                    >
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
                              fontWeight: "500",
                              fontSize: "13px",
                            }}
                          >
                            {duedate ? `Due Date: ` : "No Due Date"}
                          </Typography>
                          <Typography
                            sx={{
                              ml: 1,
                              mt: 1,
                              fontWeight: "500",
                              fontSize: "13px",
                            }}
                          >
                            {duedate
                              ? moment(duedate).format("MMMM DD YYYY")
                              : ""}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        className="Activity-details2"
                        sx={designs.Activity_Details2_Style}
                      >
                        <Typography sx={designs.Instructions_Typography}>
                          {instruction ? "Instructions: " : ""}
                        </Typography>
                        <Box>
                          {ReactHtmlParser(
                            draftToHtml(JSON.parse(instruction))
                          )}
                        </Box>
                      </Box>
                      <Box sx={{ padding: "0.8em 0em" }}>
                        <Grid container spacing={1}>
                          {media.map((item) => {
                            return (
                              <Grid item key={index} xs={12}>
                                <ActivityFile item={item} />
                              </Grid>
                            );
                          })}
                        </Grid>
                      </Box>
                    </Box>
                  </AccordionDetails>
                  <Divider />
                  <AccordionActions
                    sx={{ justifyContent: "center", padding: "5px" }}
                  >
                    <Button
                      sx={designs.ViewHomework_Button_Style}
                      component={Link}
                      to={`/rooms/${roomID}/p/${_id}`}
                    >
                      View activity
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
