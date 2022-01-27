const express = require('express')
const router = express.Router()

const {createClassController,
    displayClassesController,
    enterClassController,
    deleteClassController} = require('../controller/classController')
const {teleController} = require('../controller/teleconController')
router.post('/myClasses/create',createClassController)
router.get('/myClasses',displayClassesController)
router.delete('/myClasses/:id',deleteClassController)
router.get('/enter-class/:id',enterClassController)
router.get('/telecon/create',teleController)

const {createRegistrationController, displayRegistrationController,deleteRegistrationController} = require('../controller/registrationController')
router.post('/register',createRegistrationController)
router.get('/register',displayRegistrationController)
router.delete('/register/:id',deleteRegistrationController)

const {createActivityController,displayActivityController,deleteActivityController,updateActivityController}=require('../controller/createActivityController')
router.post('/rooms/feed',createActivityController)
router.get('/rooms/feed',displayActivityController)
router.delete('/rooms/feed/:id',deleteActivityController)
router.put('/rooms/feed/:id', updateActivityController)

const {createRoomController,displayRoomController,deleteRoomController, updateRoomController}=require('../controller/roomsController')
router.post('/rooms/room-create',createRoomController)
router.get('/rooms/room-create',displayRoomController)
router.delete('/rooms/room-create/:id',deleteRoomController)
router.put('/rooms/room-create/:id', updateRoomController)

module.exports = router