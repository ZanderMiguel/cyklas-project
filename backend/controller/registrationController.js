const Registration = require('../models/model-registration')

const createRegistration = async (req, res) => {
    try{

        const addRegistration = new Registration({
            userType:req.body.userType,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            image: req.body.image,
            emailAddress: req.body.emailAddress,
            gender: req.body.gender,
            mobileNo: req.body.mobileNo,
            username: req.body.username,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,

        }); 
        
        await addRegistration.save()
            console.log("Done!")
            return res.json({
                status: 'success',
                message: 'Registratin Success!'
            })
    } catch (error){
        console.log("Something went wrong!" + error)
        return res.json({
            status: 'error',
            message: error
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
    displayRegistrationController:displayRegistration,
    deleteRegistrationController:deleteRegistration
}
