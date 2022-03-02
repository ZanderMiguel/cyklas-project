const express = require('express');
const router = express.Router();

const {
  createRegistrationController,
  displayRegistrationController,
  deleteRegistrationController,
  userLogInController,
} = require('../controller/registrationController');
router.post('/register', createRegistrationController);
//router.get('/register/list', displayRegistrationController);
router.delete('/register/:id', deleteRegistrationController);
router.post('/login', userLogInController);

const {
  googlelogin,
  googleAccountsController,
} = require('../controller/googleAuthController');
router.post('/googlelogin', googlelogin);
router.get('/getUsers', googleAccountsController);

const {
  createActivityController,
  displayActivityController,
  deleteActivityController,
  updateActivityController,
} = require('../controller/createActivityController');
router.post('/activity/create', createActivityController);
router.get('/activity', displayActivityController);
router.delete('/actiity/delete/:id', deleteActivityController);
router.put('/activity/update/:id', updateActivityController);

const {
  createRoomController,
  displayRoomController,
  deleteRoomController,
  updateRoomController,
} = require('../controller/roomsController');
router.post('/rooms/create', createRoomController);
router.get('/rooms', displayRoomController);
router.delete('/rooms/delete/:id', deleteRoomController);
router.put('/rooms/update/:id', updateRoomController);

const { teleController } = require('../controller/teleconController');
router.get('/telecon/create', teleController);
module.exports = router;
