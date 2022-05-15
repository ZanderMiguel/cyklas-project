const ActivityModel = require('../models/model-activity');
const ActivitySubmitsModel = require('../models/model-activitySubmits');
const ClassRecordModel = require('../models/model-classRecords');
const GradingSystemModel = require('../models/model-gradingSystem');
const { QuestionModel } = require('../models/model-questions');
const { QuizlitModel } = require('../models/model-quizlit');

const createClassRecord = async (req, res) => {
  try {
    const classRecord = new ClassRecordModel(req.body);
    classRecord.save();
    console.log('Class Record Created');
    return res.json(classRecord);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const deleteClassRecord = async (req, res) => {
  try {
    await ClassRecordModel.findByIdAndDelete(req.body.crID);
    console.log('Class Record Deleted');
    return res.json({
      status: 'success',
      message: 'Class Record Deleted',
    });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const updateClassRecord = async (req, res) => {
  try {
    await ClassRecordModel.findByIdAndUpdate(req.body.crID, req.body);
    console.log('Class Record Updated');
    return res.json({ status: 'success', message: 'Class Record Updated' });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const applyGradingSystem = async (req, res) => {
  try {
    await ClassRecordModel.findByIdAndUpdate(req.body.crID, {
      gradingSystem: req.body.gradingSystem,
    });
    console.log('Grading System Applied');
    return res.json({ status: 'success', message: 'Grading System Updated' });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const displayClassRecord = async (req, res) => {
  try {
    const classRecord = await ClassRecordModel.find({
      'professor.profID': req.body.userID,
      room: { $elemMatch: { $eq: req.body.roomID } },
    });
    console.log('Class Record Dislayed');
    return res.json(classRecord.length > 0 ? classRecord : false);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const countActivity = async (req, res) => {
  try {
    const recordData = await ClassRecordModel.find({
      'professor.profID': req.body.userID,
      room: { $elemMatch: { $eq: req.body.roomID } },
    });
    const activityCategory = await QuizlitModel.findById(req.body.examID);
    const activityCount = await QuizlitModel.find({
      gsCategory: activityCategory.gsCategory,
      rooms: { $elemMatch: { $eq: req.body.roomID } },
    });

    const oldActivities = activityCount.filter((item) => {
      return item.gsCategory === activityCategory.gsCategory;
    });
    let grade = {};
    recordData.forEach((recordItem) => {
      console.log(recordItem);
      grade[recordItem.student.stdID] = [];
      req.body.scores.forEach(async (scores) => {
        recordItem.gradingSystem.filter((item, index) => {
          return Object.entries(item)[0][0] === activityCategory.gsCategory;
        });

        recordItem.gradingSystem.forEach((item) => {
          console.log(item);
          if (Object.entries(item)[0][0] === activityCategory.gsCategory) {
            grade[recordItem.student.stdID].push({
              [Object.entries(item)[0][0]]:
                (parseInt(Object.entries(item)[0][1]) +
                  parseInt(scores.score)) /
                oldActivities.length,
            });
          } else if (
            Object.entries(item)[0][0] !== activityCategory.gsCategory
          ) {
            grade[recordItem.student.stdID].push(item);
          }
          //console.log(grade[recordItem.student.stdID],recordItem.student.stdID)
        });
        //console.log(grade[recordItem.student.stdID])
        console.log(grade[recordItem.student.stdID]);
        await ClassRecordModel.updateOne(
          {
            'professor.profID': req.body.userID,
            room: { $elemMatch: { $eq: req.body.roomID } },
            'student.stdID': scores.stdID,
          },
          { gradingSystem: grade[recordItem.student.stdID] }
        );
      });
    });

    return res.json({
      status: 'success',
      message: 'success',
    });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const getOverall = async (req, res) => {
  try {
    const recordData = await ClassRecordModel.find({
      'professor.profID': req.body.userID,
      room: { $elemMatch: { $eq: req.body.roomID } },
    });
    const gsData = await GradingSystemModel.find({
      userID: req.body.userID,
      room: { $elemMatch: { $eq: req.body.roomID } },
    });
    let percent = {};
    gsData[0].Category.forEach((item) => {
      percent = {
        ...percent,
        [Object.entries(item)[0][0]]: Object.entries(item)[0][1],
      };
      //console.log(item)
    });
    let overall = {};
    recordData.forEach((students) => {
      overall[students.student.stdID] = 0;
      students.gradingSystem.forEach((item) => {
        overall[students.student.stdID] +=
          parseFloat(percent[Object.entries(item)[0][0]]) *
          (item[Object.entries(item)[0][0]] / 100);
        //console.log(percent[Object.entries(item)[0][0]],(item[Object.entries(item)[0][0]] / 100))
      });
    });

    return res.json(overall);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const recordActivity = async (req, res) => {
  try {
    const classRecord = await ClassRecordModel.find({
      room: { $elemMatch: { $eq: req.body.roomID } },
    });
    const gradingSystem = await GradingSystemModel.find({
      rooms: { $elemMatch: { $eq: req.body.roomID } },
    });

    const quizlit = await QuizlitModel.find({
      rooms: { $elemMatch: { $eq: req.body.roomID } },
      gsCategory: req.body.category,
    });
    const activity = await ActivityModel.find({
      rooms: { $elemMatch: { $eq: req.body.roomID } },
      activityType: req.body.activityCategory,
    });

    let totalActivityPoints = 0;
    activity.forEach((item) => {
      totalActivityPoints += item.activityPoints;
    });
    let totalQuizlitPoints = 0;

    quizlit.forEach(async (item) => {
      const quizQs = await QuestionModel.find({
        quizID: item._id,
      });
      quizQs.forEach((points) => {
        totalQuizlitPoints += parseInt(
          points.points.replace(' points', '').replace(' point', '')
        );
      });
    });
    const overAllPoints =
      totalActivityPoints + totalQuizlitPoints + req.body.maxPoints;
    req.body.scores.map(async (item) => {
      const { score, stdID } = item;
      let prevRecord;
      let gsApply = [];
      let gsIndex = 0;
      let gsKey;
      classRecord[0].gradingSystem.map((item, index) => {
        gsApply.push({
          [Object.entries(item)[0][0]]: Object.entries(item)[0][1],
        });
        if (Object.entries(item)[0][0] === req.body.category) {
          prevRecord = Object.entries(item)[0][1];
          gsIndex = index;
          gsKey = Object.entries(item)[0][0];
        }
      });
      let totalStdPoints = parseInt(score) + prevRecord;
      let average = parseFloat(totalStdPoints / overAllPoints);
      const percentage = average * 100;
      gsApply[gsIndex][gsKey] = percentage;
      await ClassRecordModel.updateMany(
        {
          room: { $elemMatch: { $eq: req.body.roomID } },
          'student.stdID': stdID,
        },
        {
          gradingSystem: gsApply,
        }
      );
      /*  await ActivitySubmitsModel.updateOne(
        {
          room: { $elemMatch: { $eq: req.body.activityID } },
          'submittedBy.userID': stdID,
        },
        { activityStatus: 'Graded', activityScore: score }
      ); */
      console.log(gsApply);
    });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
module.exports = {
  createClassRecord,
  deleteClassRecord,
  updateClassRecord,
  displayClassRecord,
  applyGradingSystem,
  countActivity,
  getOverall,
  recordActivity,
};
