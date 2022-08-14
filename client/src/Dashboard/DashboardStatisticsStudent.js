import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  MeetingRoomOutlined,
  FactCheckOutlined,
  UpcomingOutlined,
} from "@mui/icons-material";

function DashboardStatisticsStudent({ allActivity, roomdata }) {
  const dataStats = [
    {
      icon: (
        <Box
          sx={{
            height: "2.8em",
            width: "2.8em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "3em",
            backgroundColor: "#FF8000",
          }}
        >
          <MeetingRoomOutlined sx={{ color: "white", fontSize: "2em" }} />
        </Box>
      ),
      label: "Total Rooms",
      total: `${roomdata && roomdata.length}`,
      update: "",
    },
    {
      icon: (
        <Box
          sx={{
            height: "2.8em",
            width: "2.8em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "3em",
            backgroundColor: "#007FFF",
          }}
        >
          <UpcomingOutlined sx={{ color: "white", fontSize: "2em" }} />
        </Box>
      ),
      label: "Activities",
      total:
        allActivity === null ? "0" : `${allActivity && allActivity.allActs}`,
      update: "",
    },
    {
      icon: (
        <Box
          sx={{
            height: "2.8em",
            width: "2.8em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "3em",
            backgroundColor: "#47B753",
          }}
        >
          <FactCheckOutlined sx={{ color: "white", fontSize: "2em" }} />
        </Box>
      ),
      label: "Sumitted Activities",
      total:
        allActivity === null
          ? "0"
          : `${allActivity && allActivity.submittedActivities}`,
      update: "",
    },
  ];

  return (
    <>
      {dataStats.map(function (items, index) {
        return (
          <Grid key={index} item sm={4} xs={12} sx={{ height: "6em" }}>
            <Box
              sx={{
                width: "relative",
                height: "100%",
                padding: "0.7em 0em 0em 0em",
                backgroundColor: "white",
                //   boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "1em",
                  width: "relative",
                  margin: "0em 0.8em",
                }}
              >
                <Box sx={{ height: "auto", width: "auto" }}>{items.icon}</Box>

                <Box sx={{ height: "auto", width: "relative" }}>
                  <Typography
                    sx={{
                      color: "#8E8E8E",
                      fontSize: "0.8em",
                      fontWeight: "500",
                      width: "auto",
                      height: "auto",
                      textTransform: "Capitalize",
                    }}
                  >
                    {items.label}
                  </Typography>

                  <Typography
                    noWrap
                    sx={{
                      color: "#615F79",
                      fontSize: "1.8em",
                      fontWeight: "600",
                      width: "relative",
                      height: "auto",
                      wordBreak: "break-all",
                      textTransform: "Uppercase",
                    }}
                  >
                    {items.total}
                  </Typography>
                </Box>
              </Box>
              {items.update}
            </Box>
          </Grid>
        );
      })}
    </>
  );
}

export default DashboardStatisticsStudent;
