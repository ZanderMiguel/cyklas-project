const mongoose = require('mongoose');
const { RoomsSchema } = require('./model-createRoom');
const { RegistrationSchema } = require('./model-registration');
const UserSchema = new mongoose.Schema(
  {
    userType: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    image: { type: Buffer, required: true },
    emailAddress: { type: String, required: true, unique: true },
    RegID: { type: mongoose.Schema.Types.ObjectId, unique: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model('Users', UserSchema);
module.exports = UserModel;
