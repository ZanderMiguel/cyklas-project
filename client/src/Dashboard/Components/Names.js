import React from 'react';
import { Typography, Avatar } from '@mui/material'
import Box from '@mui/material/Box'



function Names(props) {

  /*   const i = [{
      avatar: <Avatar alt="Blue" src={Blue} />,
      place: "1st",
      studentsName: "Chris Hemsworth",
      YandS: "BSCS 2A"
  
    },
    {
      avatar: <Avatar alt="Blue" src={Blue} />,
      place: "1st",
      studentsName: "Chris Hemsworth",
      YandS: "BSCS 2A"
    },
    {
      avatar: <Avatar alt="Blue" src={Blue} />,
      place: "1st",
      studentsName: "Chris Hemsworth",
      YandS: "BSCS 2A"
    },
    {
      avatar: <Avatar alt="Blue" src={Blue} />,
      place: "1st",
      studentsName: "Chris Hemsworth",
      YandS: "BSCS 2A"
    },
    {
      avatar: <Avatar alt="Blue" src={Blue} />,
      place: "1st",
      studentsName: "Chris Hemsworth",
      YandS: "BSCS 2A"
    }] */

  return <div style={{ marginTop: "20px", height: props.height, width: "100%", border: "1px solid red", boxShadow: "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px", overflowY: "scroll", overflowX: "hidden"}}>

    <box elevation={12}>
      {props.item.map(function (items, index) {
        const { avatar, place, studentsName, YandS, yr_crs, room, day, time, place2, profName, Rating } = items
        return (
          <div key={index} style={{
            display: "grid", backgroundColor: "#F8F8F8", border: "2px solid blue", width: '100%',
            gridTemplateColumns: `${props.index === 2 ? 'repeat(3,1fr)' : 'repeat(4,1fr)'}`
          }}>
            <div style={{ margin: 'auto' }}>
              {avatar || yr_crs || place2}
            </div>
            <div style={{ margin: 'auto' }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#767580", fontSize: "15px", }}>


                {place || room || profName}
              </Typography>
            </div>



            <div style={{ margin: 'auto' }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#767580", fontSize: "15px" }}>
                {studentsName || day || Rating}
              </Typography>
            </div>

            <div style={{ margin: 'auto' }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#767580", fontSize: "15px" }}>
                {YandS || time}
              </Typography>
            </div>
          </div>
          
        )
      })}

        </box>


  </div >;
}

export default Names;
