import React from 'react'
import "./Styles/Dashboard_tableRoomsSchedules_stylesheet.css";

const dataTable = [
    {
        roomId: "0",
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        gradingSystem: "Default"
    },
    {
        roomId: "0",
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        gradingSystem: "Default"
    },
    {
        roomId: "0",
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        gradingSystem: "Default"
    },
    {
        roomId: "0",
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        gradingSystem: "Default"
    },
    {
        roomId: "0",
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        gradingSystem: "Default"
    },
    {
        roomId: "0",
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        gradingSystem: "Default"
    },
    {
        roomId: "0",
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        gradingSystem: "Default"
    },
    {
        roomId: "0",
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        gradingSystem: "Default"
    },
    {
        roomId: "0",
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        gradingSystem: "Default"
    },
    {
        roomId: "0",
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        gradingSystem: "Default"
    }
];

function Dashboard_tableRoomsSchedules() {
  return (
    <div>
        <div class = "header">
            <h1> Rooms and Classes Schedules </h1>
            <div class = "flexgrow-box"></div>
            <button class = "viewall-btn"> View All </button> 
        </div>
        
        <table class = "rooms-table" >
            <thead>
              <tr>
                <th> Room ID </th>
                <th> Room Name </th>
                <th> Course </th>
                <th> Year and Section </th>
                <th> Class Day </th>
                <th> Class Time </th>
                <th> Grading System </th>
                <th> Actions </th>
              </tr>
            </thead>

            <tbody>
            {dataTable.map(function(items, index) {
                return (
                <tr key = {index}>
                    <td data-label = "Room ID"> {items.roomId} </td>
                    <td data-label = "Room Name"> {items.roomName} </td>
                    <td data-label = "Course"> {items.roomCourse} </td>
                    <td data-label = "Year and Section"> {items.roomYearSec} </td>
                    <td data-label = "Class Day"> {items.classDay} </td>
                    <td data-label = "Class Time"> {items.classTime} </td>
                    <td data-label = "Grading System"> {items.gradingSystem} </td>
                    <td data-label = ""> 
                        <button class = "edit-btn"> View </button> 
                        <button class = "leave-btn"> Leave </button> 
                    </td>
                </tr>
                )
            })}
              
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard_tableRoomsSchedules