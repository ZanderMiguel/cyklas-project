const nodemailer = require('nodemailer');
const { RegistrationModel } = require('../models/model-registration');
const UserModel = require('../models/model-users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendEmail = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      emailAddress: req.body.receiver,
    });
    const userPass = user && (await RegistrationModel.findById(user.RegID));
    if (!user) {
      console.log('not a user');
      return res.json({ error: 'Email not found!' });
    }
    const token = jwt.sign(
      {
        id: user._id,
        RegID: user.RegID,
      },
      process.env.ACCESS_TOKEN,
      { expiresIn: '1h' }
    );
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'reypaner18@gmail.com', // generated ethereal user
        pass: 'mcuxjiydhqleadgb', // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Cyklas.tech" <reypaner18@gmail.com>', // sender address
      to: req.body.receiver, // list of receivers
      subject: 'Forgot password', // Subject line
      text: 'Change password', // plain text body
      html: `<a href='http://localhost:3000/changepassword/${token}'>
      <button type='submit'>click here</button></a>`, // html body
    });

    console.log(info);
    return res.json({ info });
  } catch (err) {
    console.log(err, 'bonak');
    return res.json({ error: err, status: 'error' });
  }
};
const changePassword = async (req, res) => {
  try {
    if (!req.headers.authorization) {
      return res.json({ error: 'Not authorized' });
    }
    const data = jwt.verify(
      req.headers.authorization,
      process.env.ACCESS_TOKEN
    );
    const password = req.body.password
      ? await bcrypt.hash(req.body.password, 10)
      : false;
    const userPass = await RegistrationModel.findById(data.RegID);
    if (await bcrypt.compare(req.body.oldPassword, userPass.password)) {
      await RegistrationModel.findByIdAndUpdate(data.RegID, { password });
      console.log('Password changed');
      return res.json({ status: 'success', message: 'password changed', data });
    } else {
      return res.json({
        status: 'error',
        message: 'Incorrect credentials',
        data,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({ status: 'error', message: 'Not Authorized' });
  }
};
module.exports = { sendEmail, changePassword };
