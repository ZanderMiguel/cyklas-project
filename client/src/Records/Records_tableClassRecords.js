import React from 'react'
import { Avatar } from "@mui/material";
import AvatarIcon from "../assets/ImageJaven/Avatar.png";
import "./Styles/Records_tableClassRecords_stylesheet.css";
import { WorkspacePremium } from '@mui/icons-material';

const dataTable = [
    {
        studentAvatar: <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }}/>,
        studentName: "Paul Rudd",
        overallGrade: "93.2%",
        attendance: "100",
        activities: "96%",
        quizzes: "99.8%",
        recitations: "95%",
        classPerformance: "97.1%",
        majorExam: "96/100",
        classStanding: <WorkspacePremium sx={{ fontSize: '1.7em', color: '#F9A826' }}/>
    },
    {
        studentAvatar: <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }}/>,
        studentName: "Tom Holland",
        overallGrade: "90.7%",
        attendance: "100",
        activities: "94%",
        quizzes: "93.2%",
        recitations: "94%",
        classPerformance: "96.1%",
        majorExam: "94/100",
        classStanding: <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }}/>
    },
    {
        studentAvatar: <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }}/>,
        studentName: "Tom Hiddleston",
        overallGrade: "89%",
        attendance: "100",
        activities: "93.7%",
        quizzes: "93.1%",
        recitations: "93%",
        classPerformance: "95.8%",
        majorExam: "93/100",
        classStanding: <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }}/>
    },
    {
        studentAvatar: <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }}/>,
        studentName: "Robert Downey Jr.",
        overallGrade: "89.9%",
        attendance: "100",
        activities: "90%",
        quizzes: "91.6%",
        recitations: "93%",
        classPerformance: "93.5%",
        majorExam: "90/100",
        classStanding: <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }}/>
    },
    {
        studentAvatar: <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }}/>,
        studentName: "Sebastian Stann",
        overallGrade: "84%",
        attendance: "85",
        activities: "92.9%",
        quizzes: "89.2%",
        recitations: "80%",
        classPerformance: "91.9%",
        majorExam: "86/100",
        classStanding: <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }}/>
    },
    {
        studentAvatar: <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }}/>,
        studentName: "Paul Rudd",
        overallGrade: "93.2%",
        attendance: "100",
        activities: "96%",
        quizzes: "99.8%",
        recitations: "95%",
        classPerformance: "97.1%",
        majorExam: "96/100",
        classStanding: <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }}/>
    },
    {
        studentAvatar: <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }}/>,
        studentName: "Tom Holland",
        overallGrade: "90.7%",
        attendance: "100",
        activities: "94%",
        quizzes: "93.2%",
        recitations: "94%",
        classPerformance: "96.1%",
        majorExam: "94/100",
        classStanding: <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }}/>
    },
    {
        studentAvatar: <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }}/>,
        studentName: "Tom Hiddleston",
        overallGrade: "89%",
        attendance: "100",
        activities: "93.7%",
        quizzes: "93.1%",
        recitations: "93%",
        classPerformance: "95.8%",
        majorExam: "93/100",
        classStanding: <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }}/>
    },
    {
        studentAvatar: <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }}/>,
        studentName: "Robert Downey Jr.",
        overallGrade: "89.9%",
        attendance: "100",
        activities: "90%",
        quizzes: "91.6%",
        recitations: "93%",
        classPerformance: "93.5%",
        majorExam: "90/100",
        classStanding: <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }}/>
    },
    {
        studentAvatar: <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }}/>,
        studentName: "Sebastian Stann",
        overallGrade: "84%",
        attendance: "85",
        activities: "92.9%",
        quizzes: "89.2%",
        recitations: "80%",
        classPerformance: "91.9%",
        majorExam: "86/100",
        classStanding: <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }}/>
    }
];

function Records_tableClassRecords() {
  return (
    <>
        <table class = "records-table" >
            <thead>
              <tr>
                <th> Student Name </th>
                <th> Overall Grade </th>
                <th> Attendance </th>
                <th> Activities </th>
                <th> Quizzes </th>
                <th> Recitations </th>
                <th> Class Performance </th>
                <th> Major Exam </th>
                <th> Class Standing </th>
              </tr>
            </thead>

            <tbody>
            {dataTable.map(function(items, index) {
                return (
                <tr key = {index}>
                    <td> 
                        <div class = "student-name">
                            {items.studentAvatar}
                            {items.studentName}
                        </div>
                    </td>
                    <td data-label = "Overall Grade"> {items.overallGrade} </td>
                    <td data-label = "Attendance"> {items.attendance} </td>
                    <td data-label = "Activities"> {items.activities} </td>
                    <td data-label = "Quizzes"> {items.quizzes} </td>
                    <td data-label = "Recitations"> {items.recitations} </td>
                    <td data-label = "Class Performance"> {items.classPerformance} </td>
                    <td data-label = "Major Exam"> {items.majorExam} </td>
                    <td data-label = "Class Standing"> {items.classStanding} </td>
                </tr>
                )
            })}
              
            </tbody>

            <tfoot>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> Total Students: </td>
                    <td  data-label = "Total Students"> 5 </td>
                </tr>
            </tfoot>
        </table>
    </>
  )
}

export default Records_tableClassRecords