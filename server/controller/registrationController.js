const { RegistrationModel } = require('../models/model-registration');
const UserModel = require('../models/model-users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();
let gfs;
const openDB = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI ||
      'mongodb+srv://reypanerz:pantheonq1w2e3@learningmonggodb.jhlar.mongodb.net/Classes?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const conn = mongoose.createConnection(
    process.env.MONGODB_URI ||
      'mongodb+srv://reypanerz:pantheonq1w2e3@learningmonggodb.jhlar.mongodb.net/Classes?retryWrites=true&w=majority'
  );
  conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: 'uploads',
    });
  });
};
openDB();
const EvaluationModel = require('../models/model-evaluation');
const createRegistration = async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId();
    const password = req.body.password
      ? await bcrypt.hash(req.body.password, 10)
      : false;

    if (password) {
      const addRegistration = new RegistrationModel({
        _id: id,
        password: password,
      });
      await addRegistration.save();
    }

    const googleUser = await UserModel.findOne({
      emailAddress: req.body.emailAddress,
    });
    if (googleUser) {
      const token = jwt.sign(
        {
          id: id,
        },
        process.env.ACCESS_TOKEN,
        { expiresIn: '1h' }
      );
      return res.json({
        existing: true,
        token,
        emailAddress: req.body.emailAddress,
      });
    }

    const addUser = await new UserModel({
      RegID: id,
      ...req.body,
    });

    await addUser.save();
    if (req.body.userType === 'Professor') {
      const evaluate = new EvaluationModel({
        professor: id,
        rating: 'No ratings yet',
      });
      await evaluate.save();
    }

    console.log('Done!');
    return res.json({
      status: 'success',
      message: 'Registratin Success!',
      addUser,
      existing: true,
    });
  } catch (error) {
    console.log('Something went wrong!' + error);
    return res.json({
      status: 'error',
      message: error,
      existing: false,
    });
  }
};

const userLogIn = async (req, res) => {
  try {
    const emailAddress = req.body.emailAddress;
    const password = req.body.password;
    const user = await UserModel.findOne({ emailAddress });
    const userPass = user && (await RegistrationModel.findById(user.RegID));
    if (!user) {
      return res.json({
        status: 'error',
        message: 'Invalid username or password!',
      });
    }

    if (
      (password && (await bcrypt.compare(password, userPass.password))) ||
      req.body.token
    ) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.ACCESS_TOKEN,
        { expiresIn: '1h' }
      );
      gfs.find().toArray((err, files) => {
        if (!files[0] || files.length === 0) {
          return 'No files available';
        }
        const myFile = [];
        console.log(user);
        files.forEach((item) => {
          if (item.filename.includes(user.image)) {
            console.log('meron');
            myFile.push({ file: item });
            gfs
              .openDownloadStream(item._id)
              .pipe(fs.createWriteStream(`./files/${item.filename}`));
          }
        });
        console.log(myFile);
        return res.json({
          status: 'success',
          token: token,
          data: {
            user,
            myFile,
            imageUrl: `http://localhost:5000/static/${myFile[0].file.filename}`,
          },
        });
      });
    }
  } catch (err) {
    return res.json({
      status: 'error',
      message: err,
    });
  }
};

const displayRegistration = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    return res.json(user);
  } catch (error) {
    console.log('Something went wrong!', error);
    return res.json({
      status: 'error',
      message: error,
    });
  }
};

const deleteRegistration = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    return res.json({ redirect: '/' });
  } catch (error) {
    console.log('Something went wrong!');
    return res.json({
      status: 'error',
      message: error,
    });
  }
};
const updateUserData = async (req, res) => {
  try {
    await UserModel.findByIdAndUpdate(req.body.userID, req.body);
    console.log('Logged in');
    return res.json({ status: 'success' });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};
module.exports = {
  createRegistrationController: createRegistration,
  displayRegistrationController: displayRegistration,
  deleteRegistrationController: deleteRegistration,
  userLogInController: userLogIn,
  updateUserData,
};
