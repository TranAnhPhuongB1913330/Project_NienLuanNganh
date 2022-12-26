const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    admin: {
        type: Boolean,
        require: true,
        default: false
    }
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;