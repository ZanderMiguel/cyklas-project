import React from 'react';
import starRating from '../assets/Images/starRating.png'
import Table from './Components/Table'
import { Avatar } from '@mui/material'
import Blue from '../assets/Images/avatar_male.png'
import Paper from '@mui/material/Paper'
function Dashboard() {
  const i = [
     [{
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
    },
    {
      avatar: <Avatar alt="Blue" src={Blue} />,
      place: "1st",
      studentsName: "Chris Hemsworth",
      YandS: "BSCS 2A"
    }]
  , [{
      yr_crs: "BSCS4A",
      room: 'Embedded Programming',
      day: 'Monday',
      time: '1:30 PM - 4:30 PM'
    }, {
      yr_crs: "BSCS4A",
      room: 'Embedded Programming',
      day: 'Monday',
      time: '1:30 PM - 4:30 PM'
    }, {
      yr_crs: "BSCS4A",
      room: 'Embedded Programming',
      day: 'Monday',
      time: '1:30 PM - 4:30 PM'
    }, {
      yr_crs: "BSCS4A",
      room: 'Embedded Programming',
      day: 'Monday',
      time: '1:30 PM - 4:30 PM'
    }, {
      yr_crs: "BSCS4A",
      room: 'Embedded Programming',
      day: 'Monday',
      time: '1:30 PM - 4:30 PM'
    },]
  , [{
      place2: '1st',
      profName: 'Solayao',
      Rating: <img src={starRating} alt="" />
    }, {
      place2: '1st',
      profName: 'Solayao',
      Rating: <img src={starRating} alt="" />
    }, {
      place2: '1st',
      profName: 'Solayao',
      Rating: <img src={starRating} alt="" />
    }, {
      place2: '1st',
      profName: 'Solayao',
      Rating: <img src={starRating} alt="" />
    },
    ]
  

  ]
  const heading = [[{avt: "Avatar", plc: "Place", sn: 'Student Name', yc: "Year And Course"}],
  [{yc2: 'Year And Course', rm: "Room Name", day: "Day", time: "Time"}],
  [{plc2: "Place", pn: "Professor Name", av: "Average Rating"}]
]
  return (
    <Paper elevation={5}>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', height: '100vh', gridTemplateRows: 'repeat(2,1fr)'}}>

      {i.map((item,idx)=>{
        return <Table item={item} heading={heading[idx]} index={idx} gridRow={idx===0 ? '1/3' : idx===1 ? '1/2': '2/3'} height = {idx===0 ? '80%' : idx===1 ? '65%': '60%'} height1 = {idx===0 ? '92.5%': idx==1 ? '85%': '85%'}/>
        
      })}
    </div>
    </Paper>
  );
}

export default Dashboard;

