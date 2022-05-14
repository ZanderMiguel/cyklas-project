import React from 'react';
import { Avatar } from '@mui/material';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';
import './LivequizStudentrankingsTableStylesheet.css';
import { WorkspacePremium } from '@mui/icons-material';
import {
  Grid
} from '@mui/material';

const dataTable = [
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
    }
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
