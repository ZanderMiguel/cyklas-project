import React from 'react';
import './Styles/ClassCards_table_stylesheet.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ClassCards_table = ({ roomsdata }) => {
  const [cc, setCC] = React.useState(null);
  React.useEffect(() => {
    axios
      .post('http://localhost:5000/cards', {
        stdID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        setCC(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <>
      <table className="classcards-table">
        <thead>
          <tr>
            <th> ROOM NAME </th>
            <th> FINAL GRADE </th>
            <th> ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {cc && 
            cc.map(function (items, index) {
              return (
                <tr key={index}>
                  <td data-label="Room Name">
                    {' '}
                    {items.classRecord[0].RoomName}{' '}
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
                        padding: '0.3em 1em',
                        fontWeight: '600',
                        fontSize: '0.9em',
                        boxShadow: 'none',
                        textTransform: 'Capitalize',
                        textDecoration: 'none',
                        '&: hover': {
                          boxShadow: 'none',
                        },
                      }}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td> Total Rooms: </td>
            <td data-label="Total Rooms"> {roomsdata && roomsdata.length} </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ClassCards_table;
