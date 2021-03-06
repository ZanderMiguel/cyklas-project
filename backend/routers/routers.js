const express = require('express');
const router = express.Router();

const {
  createRegistrationController,
  displayRegistrationController,
  deleteRegistrationController,
  userLogInController,
} = require('../controller/registrationController');
router.post('/register', createRegistrationController);
router.post('/getUser', displayRegistrationController);
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
router.post('/rooms', displayRoomController);
router.delete('/rooms/delete', deleteRoomController);
router.put('/rooms/update', updateRoomController);

const {
  createFeedController,
  displayFeedController,
  deleteFeedController,
  updateFeedController,
} = require('../controller/feedController');
router.post('/feed/create', createFeedController);
router.get('/feed', displayFeedController);
router.delete('/feed/delete/:id', deleteFeedController);
router.put('/feed/update/:id', updateFeedController);

const {
  createAnnounce,
  displayAnnounce,
  deleteAnnounce,
  updateAnnounce,
} = require('../controller/announcementController');
router.post('/announce/create', createAnnounce);
router.post('/announce', displayAnnounce);
router.delete('/announce/delete', deleteAnnounce);
router.put('/announce/update', updateAnnounce);

const {
  createComment,
  displayComment,
  deleteComment,
  updateComment,
} = require('../controller/commentController');
router.post('/comment/create', createComment);
router.post('/comment', displayComment);
router.delete('/comment/delete', deleteComment);
router.put('/comment/update', updateComment);
const { teleController } = require('../controller/teleconController');
router.get('/telecon/create', teleController);

const {
  createQuizlitController,
  updateQuizlitController,
  deleteQuizlitController,
  findQuizlitController,
  displayQuizlitOnQuizlit,
  displayQuizlitOnRoom,
} = require('../controller/quizlitController');
router.post('/quizlit/create', createQuizlitController);
router.put('/quizlit/update', updateQuizlitController);
router.delete('/quizlit/delete', deleteQuizlitController);
router.post('/quizlit', findQuizlitController);
router.post('/myQuizlit', displayQuizlitOnQuizlit);
router.post('/roomQuizlit', displayQuizlitOnRoom);

const {
  createQuestionController,
  updateQuestionController,
  deleteQuestionController,
  findQuestionController,
} = require('../controller/questionsController');
router.post('/question/create', createQuestionController);
router.put('/question/update', updateQuestionController);
router.delete('/question/delete', deleteQuestionController);
router.post('/question', findQuestionController);

const {
  addMembers,
  acceptRequest,
  declineRequest,
  displayRequests,
} = require('../controller/roomRequestController');
router.post('/requests/to-join', addMembers);
router.post('/requests/accept', acceptRequest);
router.delete('/requests/decline', declineRequest);
router.post('/requests', displayRequests);

const {
  createGroup,
  displayGroups,
  deleteGroup,
} = require('../controller/groupsController');
router.post('/groups/create', createGroup);
router.post('/groups', displayGroups);
router.delete('/groups/delete', deleteGroup);

const {
  createAnswer,
  displayAnswer,
  updateScore,
} = require('../controller/answersController');
router.post('/answers/create', createAnswer);
router.post('/answers', displayAnswer);
router.put('/answers/update', updateScore);

const {
  createGradingSystem,
  updateGradingSystem,
  deleteGradingSystem,
  displayGradingSystem,
} = require('../controller/gradingSystemController');
router.post('/gradingSystem/create', createGradingSystem);
router.post('/gradingSystem', displayGradingSystem);
router.put('/gradingSystem/update', updateGradingSystem);
router.delete('gradingSystem/delete', deleteGradingSystem);

const {
  createClassRecord,
  deleteClassRecord,
  updateClassRecord,
  displayClassRecord,
} = require('../controller/classRecordController');
router.post('/records/create', createClassRecord);
router.post('/records', displayClassRecord);
router.put('/records/update', updateClassRecord);
router.delete('/records/delete', deleteClassRecord);

const {
  createClassCard,
  displayClassCard,
} = require('../controller/classCardController');
router.post('/cards/create', createClassCard);
router.post('/cards', displayClassCard);

module.exports = router;
