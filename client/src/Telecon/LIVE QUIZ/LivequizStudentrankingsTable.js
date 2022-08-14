import React from 'react';
import { Avatar } from '@mui/material';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';
import './LivequizStudentrankingsTableStylesheet.css';
import { WorkspacePremium } from '@mui/icons-material';
import { Grid } from '@mui/material';

const dataTable = [
  {
    studentAvatar: (
      <Avatar
        src="https://lh3.googleusercontent.com/TNo6UYYG1eGog_t1no7SAUS8N1kVfG_WRmowf4UX0qZB5o_Qric0YZSyNq_76rOpBePhHEJ9PMgtvfIb=s220-rw"
        sx={{ height: '2em', width: '2em' }}
      />
    ),
    studentName: 'Zander Miquel Mirador',
    points: '13 points',
    rank: <WorkspacePremium sx={{ color: 'white', fontSize: '2em' }} />,
  },
  {
    studentAvatar: (
      <Avatar
        src="https://frozen-mountain-12506.herokuapp.com/static/hiquiana.pngb195655de2f6c5fd6341c9ec3115cc1d.png"
        sx={{ height: '2em', width: '2em' }}
      />
    ),
    studentName: 'Cedric Hiquiana',
    points: '8 points',
    rank: <WorkspacePremium sx={{ color: 'white', fontSize: '2em' }} />,
  },
  {
    studentAvatar: (
      <Avatar
        src="https://frozen-mountain-12506.herokuapp.com/static/rellama.png637ff8f15e8977ccb7e19ac4429e09f1.png"
        sx={{ height: '2em', width: '2em' }}
      />
    ),
    studentName: 'Charles Rellama',
    points: '5 points',
    rank: <WorkspacePremium sx={{ color: 'white', fontSize: '2em' }} />,
  },
  /*{
        studentAvatar: (
            <Avatar src={AvatarIcon} sx={{ height: '2em', width: '2em' }} />
        ),
        studentName: 'Sebastian Stann',
        points: "95 points",
        rank: <WorkspacePremium sx = {{ color: "white", fontSize: "2em"}}/>
    },
    {
        studentAvatar: (
            <Avatar src={AvatarIcon} sx={{ height: '2em', width: '2em' }} />
        ),
        studentName: 'Sebastian Stann',
        points: "95 points",
        rank: <WorkspacePremium sx = {{ color: "white", fontSize: "2em"}}/>
    },
    {
        studentAvatar: (
        <Avatar src={AvatarIcon} sx={{ height: '2em', width: '2em' }} />
        ),
        studentName: 'Sebastian Stann',
        points: "95 points",
        rank: <WorkspacePremium sx = {{ color: "white", fontSize: "2em"}}/>
    },
    {
        studentAvatar: (
        <Avatar src={AvatarIcon} sx={{ height: '2em', width: '2em' }} />
        ),
        studentName: 'Sebastian Stann',
        points: "95 points",
        rank: <WorkspacePremium sx = {{ color: "white", fontSize: "2em"}}/>
    },
    {
        studentAvatar: (
        <Avatar src={AvatarIcon} sx={{ height: '2em', width: '2em' }} />
        ),
        studentName: 'Sebastian Stann',
        points: "95 points",
        rank: <WorkspacePremium sx = {{ color: "white", fontSize: "2em"}}/>
    } */
];

function LivequizStudentrankingsTable() {
  return (
    <>
      <Grid item xs={12}>
        <table className="livequizStudentRankings-table">
          <thead>
            <tr>
              <th> Student Name </th>
              <th> Points </th>
              <th> Rank </th>
            </tr>
          </thead>

          <tbody>
            {dataTable.map(function (items, index) {
              return (
                <tr key={index}>
                  <td>
                    <div className="student-name">
                      {items.studentAvatar}
                      {items.studentName}
                    </div>
                  </td>
                  <td data-label="Points"> {items.points} </td>
                  <td data-label="Rank"> {items.rank} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Grid>
    </>
  );
}

export default LivequizStudentrankingsTable;