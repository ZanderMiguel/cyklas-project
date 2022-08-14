const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//router.post('/activity/submit', multiparty, uploadNewFile, submitActivity);
const {
  createRoomController,
  displayRoomController,
  deleteRoomController,
  updateRoomController,
  findRoom,
  getMembersData,
  leaveRoom,
  getAllStudents,
  removeAll,
} = require('../controller/roomsController');
router.post('/rooms/create', createRoomController);
router.post('/rooms', displayRoomController);
router.delete('/rooms/delete', deleteRoomController);
router.put('/rooms/update', updateRoomController);
router.post('/rooms/my-room', findRoom);
router.post('/get/members', getMembersData);
router.put('/room/leave', leaveRoom);
router.put('/room/remove-all', removeAll);
router.post('/room/get/student-length', getAllStudents);
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
  displayQuizlitOfStudents,
} = require('../controller/quizlitController');
router.post('/quizlit/create', createQuizlitController);
router.put('/quizlit/update', updateQuizlitController);
router.delete('/quizlit/delete', deleteQuizlitController);
router.post('/quizlit', findQuizlitController);
router.post('/myQuizlit', displayQuizlitOnQuizlit);
router.post('/roomQuizlit', displayQuizlitOnRoom);
router.post('/quizlit/student', displayQuizlitOfStudents);
const {
  createQuestionController,
  updateQuestionController,
  deleteQuestionController,
  findQuestionController,
} = require('../controller/questionsController');
router.post('/question/create', bodyParser.json(), createQuestionController);
router.put('/question/update', bodyParser.json(), updateQuestionController);
router.delete('/question/delete', bodyParser.json(), deleteQuestionController);
router.post('/question', bodyParser.json(), findQuestionController);

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
  displayAllAnswers,
  createGameAnswer,
} = require('../controller/answersController');
router.post('/answers/create', createAnswer);
router.post('/answers', displayAnswer);
router.put('/answers/update', updateScore);
router.post('/answers/all', displayAllAnswers);
router.post('/answer/quizgame', createGameAnswer);
const {
  createGradingSystem,
  updateGradingSystem,
  deleteGradingSystem,
  displayGradingSystem,
  findRoomGS,
} = require('../controller/gradingSystemController');
router.post('/gradingSystem/create', createGradingSystem);
router.post('/gradingSystem', displayGradingSystem);
router.put('/gradingSystem/update', updateGradingSystem);
router.delete('/gradingSystem/delete', deleteGradingSystem);
router.post('/gradingSystem/record', findRoomGS);
const {
  createClassRecord,
  deleteClassRecord,
  updateClassRecord,
  displayClassRecord,
  applyGradingSystem,
  countActivity,
  getOverall,
  recordActivity,
} = require('../controller/classRecordController');
router.post('/records/create', createClassRecord);
router.post('/records', displayClassRecord);
router.put('/records/update', updateClassRecord);
router.delete('/records/delete', deleteClassRecord);
router.put('/records/applyGS', applyGradingSystem);
router.post('/records/return-grade', countActivity);
router.post('/records/overall', getOverall);
router.post('/records/activity/return', recordActivity);
const {
  createClassCard,
  displayClassCard,
  findClassCard,
} = require('../controller/classCardController');
router.post('/cards/create', createClassCard);
router.post('/cards', displayClassCard);
router.post('/cards/getData', findClassCard);

const {
  displayRatings,
  createEvaluation,
  getOverallRate,
} = require('../controller/evaluationController');
router.post('/evaluation/create', createEvaluation);
router.get('/ratings/display', displayRatings);
router.get('/find/rate', getOverallRate);

const { sendEmail, changePassword } = require('../controller/emailController');
router.post('/email/send', sendEmail);
router.post('/password/change', changePassword);

module.exports = router;
