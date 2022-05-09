const express = require('express');
const fileRouter = express.Router();

const {
  createActivityController,
  displayActivityController,
  deleteActivityController,
  updateActivityController,
  findActivity,
  submitActivity,
} = require('../controller/createActivityController');
module.exports = (upload) => {
  fileRouter.post(
    '/activity/create',
    upload.single('media'),
    createActivityController
  );
  fileRouter.post('/activity', displayActivityController);
  fileRouter.delete('/actiity/delete/:id', deleteActivityController);
  fileRouter.put('/activity/update/:id', updateActivityController);
  fileRouter.post('/activity/get', findActivity);
  return fileRouter;
};
