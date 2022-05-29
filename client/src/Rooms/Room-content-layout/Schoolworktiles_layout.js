import React from "react";
import useStyle from "../Styles/Announce_style";
import { Box, Grid, Tooltip, Divider } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import ActivityIcon from "../../assets/ImageJaven/ActivityIcon.png";
import QuizIcon from "../../assets/ImageJaven/QuizIcon.png";
import ExamIcon from "../../assets/ImageJaven/ExamIcon.png";
import MeetingIcon from "../../assets/ImageJaven/MeetingIcon.png";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CusPopover from "../../components/Popover";
import SchoolworksTilespopover from "../../components/PopoverContent/SchoolworksTilespopover";
import axios from "axios";
import { Redirect } from "react-router-dom";
function Schoolworktiles_layout({ content, roomID }) {
  const { designs } = useStyle();
  const [redirect, setRedirect] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickOption = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseOption = () => {
    setAnchorEl(null);
  };
  const account = Boolean(anchorEl);
  const [data, setData] = React.useState(null);
  React.useMemo(() => {
    axios
      .post("http://localhost:5000/quizlit", {
        quizID: content,
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {data && (
        <>
          <Divider />
          <Grid item xs={12} sx={{ padding: "0.5em 0.5em 0em 0.5em" }}>
            <Tooltip title="Open exam" placement="top-start">
              <Box sx={designs.BoxTileContainer}>
                <Box sx={designs.ActivityContainer}>
                  {data && data.quizType === "Exam" ? (
                    <img
                      src={ExamIcon}
                      style={{
                        height: "2em",
                      }}
                    />
                  ) : (
                    <img
                      src={QuizIcon}
                      style={{
                        height: "2em",
                      }}
                    />
                  )}
                  <Box
                    sx={designs.ActivityName_User_Date}
                    onClick={() => {
                      setRedirect(
                        <Redirect
                          to={
                            JSON.parse(localStorage.userData).data.user
                              .userType === "Student"
                              ? `/Exam_take/${data._id}`
                              : `/quizlit/view_exam/${data._id}`
                          }
                        />
                      );
                    }}
                  >
                    {redirect && redirect}

                    {/* <Box sx={designs.ActivityName}> */}
                    <Typography noWrap sx={designs.Activity}>
                      {data && data.title}
                    </Typography>
                    {/* </Box> */}

                    {/* <Box sx={designs.User_Date}>
                    <Typography noWrap sx={designs.Professor}>
                      {data && data.author.name}
                    </Typography>

                    <Typography noWrap sx={designs.Date}>
                      {data && data.createdAt}
                    </Typography>
                  </Box> */}
                  </Box>

                  {/* <Box sx={designs.BoxOptions}>
              <IconButton onClick={handleClickOption} sx={designs.IconButtonOptions}>
                <MoreVert sx={designs.MoreVertIcon} />
              </IconButton>

              <CusPopover
                PaperProps={{ elevation: 0 }}
                open={account}
                anchorEl={anchorEl}
                onClose={handleCloseOption}>
                <SchoolworksTilespopover />
              </CusPopover>
            </Box> */}
                </Box>
              </Box>
            </Tooltip>
          </Grid>
        </>
      )}
    </>
  );
}

export default Schoolworktiles_layout;
