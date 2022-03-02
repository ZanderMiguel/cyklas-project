const {RegistrationModel} = require('../models/model-registration');
const UserModel = require('../models/model-users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const mongoose = require('mongoose')
const client = new OAuth2Client(
  '90759507047-37dohu0dq74j6oui4b6hvb3tj4vpphkm.apps.googleusercontent.com'
);

const createRegistration = async (req, res) => {


    try {
        
        const id = mongoose.Types.ObjectId()
        console.log(id)
        const password = await bcrypt.hash(req.body.password, 10)
        const addRegistration = new RegistrationModel({
            _id: id,
            password: password

        });
        const addUser = await new UserModel({
          RegID: id,
          userType: req.body.userType,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          image: req.body.image,
          emailAddress: req.body.emailAddress,
          gender: req.body.gender
        })
        await addRegistration.save()
        await addUser.save()
        console.log("Done!")
        return res.json({
            status: 'success',
            message: 'Registratin Success!'
        })
    } catch (error) {
        console.log("Something went wrong!" + error)
        return res.json({
            status: 'error',
            message: error
        })
    }
}

const userLogIn = async (req, res) => {
  try{
  const emailAddress = req.body.emailAddress;
  const password = req.body.password;
  const user = await UserModel.findOne({ emailAddress });
  const userPass = await RegistrationModel.findById(user.RegID)
  if (!user) {
    return res.json({
      status: 'error',
      message: 'Invalid username or password!',
    });
  }
  if (await bcrypt.compare(password, userPass.password)) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.ACCESS_TOKEN,
      { expiresIn: '1h' }
    );
    return res.json({
      status: 'succes',
      token: token,
    });
  }}catch(err){
    console.log(err)
    return res.json({
      status: 'error',
      message: err
    })
  }
};

const displayRegistration = async (req, res) => {
    try {
        const registration = await UserModel.find().sort({ createdAt: -1 })
        console.log("Users Displayed")
        return res.json(registration)
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
}

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

module.exports = {
  createRegistrationController: createRegistration,
  displayRegistrationController: displayRegistration,
  deleteRegistrationController: deleteRegistration,
  userLogInController: userLogIn,
};
