// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')


const Classes = require('../models/model-class')

const createClass = async (req, res) => {
    // const professorName = req.body.professorName
    // const subjectName = req.body.subjectName
    // const subjectCode = req.body.subjectCode
    // const classTime = req.body.classTime
    // const classDay = req.body.classDay
    // const classTerm = req.body.classTerm

    try {
        // const result = await Classes.create({
        //     professorName,
        //     subjectCode,
        //     subjectName,
        //     classTime,
        //     classDay,
        //     classTerm
        // })
        // console.log("Class created!")
        const addClass = new Classes({
            professorName: req.body.professorName,
            subjectCode: req.body.subjectCode,
            subjectName: req.body.subjectName,
            classTime: req.body.classTime,
            classDay: req.body.classDay,
            classTerm: req.body.classTerm,
            course: req.body.course,
            yearAndSection: req.body.yearAndSection,
    })
        await addClass.save()
        console.log("Class created!")
        return res.redirect('/myClasses')
    } catch (error) {
        console.log("Something went wrong!" + error)
        return res.json({
            status: 'error',
            message: error
        })
        

    }

}

const displayClasses = async (req, res) => {
    try {
        const classes = await Classes.find().sort({ createdAt: -1 })
        console.log("Classes displayed!")
        return res.json(classes)
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
}
const enterClass = async (req, res) => {
    try {
        await Classes.findById(req.params.id)
        console.log("Entered the class!")
        return res.json({
            status: 'success',
            message: 'Entered the class',
        })
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
}
const deleteClass = async (req, res) => {
    try {
        await Classes.findByIdAndDelete(req.params.id)
        console.log("Class Deleted!")
        return res.json({ redirect: '/' })
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
}
module.exports = {
    createClassController: createClass,
    displayClassesController: displayClasses,
    enterClassController: enterClass,
    deleteClassController: deleteClass,
}