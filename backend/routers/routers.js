const express = require('express');
const router = express.Router();

const {
  createRegistrationController,
  displayRegistrationController,
  deleteRegistrationController,
  userLogInController,
} = require('../controller/registrationController');
router.post('/register/new-user', createRegistrationController);
router.get('/register', displayRegistrationController);
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
router.post('/rooms/feed', createActivityController);
router.get('/rooms/feed', displayActivityController);
router.delete('/rooms/feed/:id', deleteActivityController);
router.put('/rooms/feed/:id', updateActivityController);

const {
  createRoomController,
  displayRoomController,
  deleteRoomController,
  updateRoomController,
} = require('../controller/roomsController');
router.post('/rooms', createRoomController);
router.get('/rooms', displayRoomController);
router.delete('/rooms/room-create/:id', deleteRoomController);
router.put('/rooms/room-create/:id', updateRoomController);

const { teleController } = require('../controller/teleconController');
router.get('/telecon/create', teleController);
module.exports = router;
