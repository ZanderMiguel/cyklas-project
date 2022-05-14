const express = require('express');
const fileRouter = express.Router();

const {
  createActivityController,
  displayActivityController,
  deleteActivityController,
  updateActivityController,
  findActivity,
  downloadFileByClick,
  previewFileByClick,
  createActivityComment,
  displayActivityComment,
  deleteController,
} = require('../controller/createActivityController');

const {
  submitActivity,
  displaySubmittedActivity,
  getAllActivities,
} = require('../controller/activitySubmitsController');

module.exports = (upload) => {
  fileRouter.post(
    '/activity/create',
    upload.array('file', 999),
    createActivityController
  );
  fileRouter.post('/activity', displayActivityController);
  fileRouter.delete('/activity/delete', deleteActivityController);
  fileRouter.put('/activity/update/:id', updateActivityController);
  fileRouter.post('/activity/get', findActivity);
  fileRouter.get('/activity/download/:file', downloadFileByClick);
  fileRouter.get('/activity/preview/:file', previewFileByClick);
  fileRouter.put('/activity/create/comment', createActivityComment);
  fileRouter.post('/activity/get/comment', displayActivityComment);
  fileRouter.put('/activity/delete/comment', deleteController);

  fileRouter.post(
    '/activity/submit',
    upload.array('file', 999),
    submitActivity
  );
  fileRouter.post('/activity/get/submit', displaySubmittedActivity);
  fileRouter.post('/activity/get-handedout', getAllActivities);
  return fileRouter;
};
