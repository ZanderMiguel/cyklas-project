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

const {createRegistrationController, displayRegistrationController,deleteRegistrationController,userLogInController} = require('../controller/registrationController')
router.post('/register/new-user',createRegistrationController)
router.get('/register',displayRegistrationController)
router.delete('/register/:id',deleteRegistrationController)
router.post('/login', userLogInController)

const{googlelogin,googleAccountsController} =  require('../controller/googleAuthController')
router.post('/googlelogin', googlelogin)
router.get('/getUsers', googleAccountsController)

const {createActivityController,displayActivityController,deleteActivityController,updateActivityController}=require('../controller/createActivityController')
router.post('/rooms/feed',createActivityController)
router.get('/rooms/feed',displayActivityController)
router.delete('/rooms/feed/:id',deleteActivityController)
router.put('/rooms/feed/:id', updateActivityController)

const {createRoomController,displayRoomController,deleteRoomController, updateRoomController}=require('../controller/roomsController')
router.post('/rooms/room-create',createRoomController)
router.get('/rooms',displayRoomController)
router.delete('/rooms/room-create/:id',deleteRoomController)
router.put('/rooms/room-create/:id', updateRoomController)

module.exports = router