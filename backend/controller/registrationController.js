const Registration = require('../models/model-registration');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client("90759507047-37dohu0dq74j6oui4b6hvb3tj4vpphkm.apps.googleusercontent.com");

const createRegistration = async (req, res) => {

    try {

        const password = await bcrypt.hash(req.body.password, 10)
        const addRegistration = new Registration({
            userType: req.body.userType,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            image: req.body.image,
            emailAddress: req.body.emailAddress,
            gender: req.body.gender,
            mobileNo: req.body.mobileNo,
            username: req.body.username,
            password: password,

        });

        await addRegistration.save()
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
    const emailAddress = req.body.emailAddress
    const password = req.body.password
    const user = await Registration.findOne({ emailAddress })
    console.log(password)
    if (!user) {
        return res.json({
            status: 'error',
            message: 'Invalid username or password!'
        })
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({
            id: user._id,
            userName: user.userName
        }, process.env.ACCESS_TOKEN, { expiresIn: '1h' })
        return res.json({
            status: 'succes',
            token: token
        })
    }
}

const displayRegistration = async (req, res) => {
    try {
        const registration = await Registration.find().sort({ createdAt: -1 })
        console.log("registration data displayed!")
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
        await Registration.findByIdAndDelete(req.params.id)
        console.log(req.params.id)
        return res.json({ redirect: '/' })
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
}



module.exports = {
    createRegistrationController: createRegistration,
    displayRegistrationController: displayRegistration,
    deleteRegistrationController: deleteRegistration,
    userLogInController: userLogIn,
    
}
