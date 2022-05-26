import React, { useState } from "react";
import { Avatar } from "@mui/material";
import AvatarIcon from "../assets/ImageJaven/Avatar.png";
import "./Styles/DashboardProfessorratingsStylesheet.css";
import { Star, Search } from "@mui/icons-material";
import {
  Container,
  Grid,
  Divider,
  Typography,
  Button,
  IconButton,
  Box,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
// const dataRange = [
//   {
//     value: 'THIS WEEK',
//     label: 'THIS WEEK',
//   },
//   {
//     value: 'THIS MONTH',
//     label: 'THIS MONTH',
//   },
//   {
//     value: 'THIS YEAR',
//     label: 'THIS YEAR',
//   },
// ];

const dataRoom = [
  {
    value: "Embedded Programming",
    label: "Embedded Programming",
  },
  {
    value: "Art Appreciation",
    label: "Art Appreciation",
  },
  {
    value: "Science, Technology and Society",
    label: "Science, Technology and Society",
  },
  {
    value: "Software Engineering",
    label: "Software Engineering",
  },
];

function DashboardProfessorratings() {
  const [ratings, setRatings] = useState(null);
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/ratings/display")
      .then((res) => {
        setRatings(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          width: "relative",
          height: "auto",
          marginBottom: "0.3em",
        }}
      >
        <Typography
          children="Professor Ratings"
          sx={{
            color: "#8E8E8E",
            fontSize: "0.8em",
            fontWeight: "500",
            width: "auto",
            flexGrow: 1,
            height: "relative",
            display: "flex",
            alignItems: "center",
            textTransform: "Uppercase",
          }}
        />
      </Box>

      <Grid item xs={12}>
        <table className="professorRatings-table">
          <thead>
            <tr>
              <th> Professor Name </th>
              <th> Room/ Class </th>
              <th> Ratings </th>
              {/* <th>  </th> */}
            </tr>
          </thead>

          <tbody>
            {ratings &&
              ratings.map(function (items, index) {
                return (
                  <tr key={index}>
                    <td>
                      <div className="professor-name">
                        {items.professorAvatar}
                        {items._id.prof}
                      </div>
                    </td>
                    <td data-label="Room/ Class"> {items._id.room} </td>
                    <td
                      data-label="Ratings"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {items.rating}{" "}
                      <Star sx={{ fontSize: "1.7em", color: "#F9A826" }} />
                    </td>
                    {/* <td> {items.icon} </td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Grid>
    </>
  );
}

export default DashboardProfessorratings;
