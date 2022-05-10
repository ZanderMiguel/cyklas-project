const express = require('express');
const fileRouter = express.Router();

const {
  createActivityController,
  displayActivityController,
  deleteActivityController,
  updateActivityController,
  findActivity,
  downloadFileByClick,
  createActivityComment,
} = require('../controller/createActivityController');

const {
  submitActivity,
  displaySubmittedActivity,
} = require('../controller/activitySubmitsController');

module.exports = (upload) => {
  fileRouter.post(
    '/activity/create',
    upload.array('file', 999),
    createActivityController
  );
  fileRouter.post('/activity', displayActivityController);
  fileRouter.delete('/actiity/delete/:id', deleteActivityController);
  fileRouter.put('/activity/update/:id', updateActivityController);
  fileRouter.post('/activity/get', findActivity);
  fileRouter.get('/activity/download/:file', downloadFileByClick);
  fileRouter.put('/activity/create/comment', createActivityComment);

  fileRouter.post(
    '/activity/submit',
    upload.array('file', 999),
    submitActivity
  );
  fileRouter.post('/activity/get/submit', displaySubmittedActivity);

  return fileRouter;
};
