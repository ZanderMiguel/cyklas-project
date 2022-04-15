import React from 'react'
import "./Styles/Dashboard_table_stylesheet.css";

const dataTable = [
    {
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        professorName: "Mark Andrei"
    },
    {
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        professorName: "Mark Andrei"
    },
    {
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        professorName: "Mark Andrei"
    },
    {
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        professorName: "Mark Andrei"
    },
    {
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        professorName: "Mark Andrei"
    },
    {
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        professorName: "Mark Andrei"
    },
    {
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        professorName: "Mark Andrei"
    },
    {
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        professorName: "Mark Andrei"
    },
    {
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        professorName: "Mark Andrei"
    },
    {
        roomName: "Embedded Programming",
        roomCourse: "BSCS",
        roomYearSec: "3A",
        classDay: "Saturday",
        classTime: "10:00 AM",
        professorName: "Mark Andrei"
    }
];

function Dashboard_table() {
  return (
    <div>
        <div className = "header">
            <h1> Rooms and Classes Schedules </h1>
        </div>
        
        <table className = "rooms-table" >
            <thead>
              <tr>
                <th> Room Name </th>
                <th> Course </th>
                <th> Year and Section </th>
                <th> Class Day </th>
                <th> Class Time </th>
                <th> Professor </th>
                <th> Actions </th>
              </tr>
            </thead>

            <tbody>
            {dataTable.map(function(items, index) {
                return (
                <tr key = {index}>
                    <td data-label = "Room Name"> {items.roomName} </td>
                    <td data-label = "Course"> {items.roomCourse} </td>
                    <td data-label = "Year and Section"> {items.roomYearSec} </td>
                    <td data-label = "Class Day"> {items.classDay} </td>
                    <td data-label = "Class Time"> {items.classTime} </td>
                    <td data-label = "Professor"> {items.professorName} </td>
                    <td data-label = ""> 
                        <button className = "view-btn"> View </button> 
                        <button className = "leave-btn"> Leave </button> 
                    </td>
                </tr>
                )
            })}
              
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard_table