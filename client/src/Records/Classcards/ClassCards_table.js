import React from "react";
import "./Styles/ClassCards_table_stylesheet.css";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import NoClasscards from "../../assets/ImageJaven/NoClasscards.png";

const ClassCards_table = ({ roomsdata }) => {
  const [cc, setCC] = React.useState(null);
  React.useEffect(() => {
    axios
      .post("http://localhost:5000/cards", {
        stdID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        setCC(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <>
      <div
        style={{
          minWidth: "100%",
          overflowX: "auto",
          margin: "0.5em 0em 1em 0em",
        }}
      >
        <table className="classcards-table">
          <thead>
            <tr>
              <th> Room Name </th>
              <th> Final Grade </th>
              <th> Actions</th>
            </tr>
          </thead>

          <tbody>
            {cc && cc.length > 0 ? (
              cc.map(function (items, index) {
                return (
                  <tr key={index}>
                    <td data-label="Room Name">
                      {" "}
                      {items.classRecord[0].RoomName}{" "}
                    </td>
                    <td data-label="FINAL Grade"> {items.overall} </td>
                    <td data-label="Actions">
                      <Button
                        // disabled
                        component={Link}
                        to={`/Evaluation/${items._id}`}
                        variant="contained"
                        children="Evaluate"
                        sx={{
                          padding: "0.3em 1em",
                          fontWeight: "600",
                          fontSize: "0.9em",
                          boxShadow: "none",
                          textTransform: "Capitalize",
                          textDecoration: "none",
                          "&: hover": {
                            boxShadow: "none",
                          },
                        }}
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <Box
                sx={{
                  width: "145%",
                  height: "70vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src={NoClasscards}
                  alt="No Classcards"
                  style={{
                    height: "17em",
                    margin: "0em 0em 1.5em 0em",
                  }}
                />
                <Typography
                  children="You do not have any grade on your room(s)."
                  sx={{
                    fontSize: "1.2em",
                    fontWeight: "600",
                    color: "#3F3D56",
                    marginBottom: "0.3em",
                  }}
                />

                <Typography
                  children="Maybe your professor(s) are currently checking your records."
                  sx={{
                    fontSize: "1em",
                    fontWeight: "500",
                    color: "#8E8E8E",
                  }}
                />
              </Box>
            )}
          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td> Total Rooms: </td>
              <td data-label="Total Rooms">
                {" "}
                {roomsdata && roomsdata.length}{" "}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default ClassCards_table;
