const GoogleAuth = require('../models/model-googleAuth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client("90759507047-37dohu0dq74j6oui4b6hvb3tj4vpphkm.apps.googleusercontent.com");

const googlelogin = async (req, res) => {
    try {
        const  tokenId  = req.body.tokenId;

        const response = await client.verifyIdToken({ idToken: tokenId, audience: "90759507047-37dohu0dq74j6oui4b6hvb3tj4vpphkm.apps.googleusercontent.com" })
        const { email_verified, given_name,  family_name,  picture,  email } = response.payload;
        
        const firstName = given_name
        const lastName = family_name
        const image = picture
        const emailAddress = email
        console.log(response)

        if (email_verified) {
            const user = await GoogleAuth.findOne({ emailAddress: email })
            if (user) {
                const token = tokenId
                return res.json({
                    status: 'success',
                    token: token
                })
            }else{
                let newUser = new GoogleAuth({ firstName, lastName, image, emailAddress, });
                await newUser.save()
                return res.json({
                    status: 'success',
                    message: 'User registered successfully'
                })
            }

        }
 
    } catch (err) {
        console.log(err)
        return res.json({ status: 'Failed', message: err })
    }
}

module.exports = {
    googlelogin:googlelogin
}