const express = require('express');
const fileRouter = express.Router();

const {
  createActivityController,
  displayActivityController,
  deleteActivityController,
  updateActivityController,
  findActivity,
  submitActivity,downloadFileByClick
} = require('../controller/createActivityController');
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
  fileRouter.get('/activity/download/:file',downloadFileByClick)
  return fileRouter;
};
