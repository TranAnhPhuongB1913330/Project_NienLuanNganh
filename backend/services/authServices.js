const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config/envConfig");

module.exports.hasdedPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    const hasded = await bcrypt.hash(password, salt);

    return hasded;
}

module.exports.comparePassword = async (password, dbPassword) => {
    return await bcrypt.compare(password, dbPassword);  
}
module.exports.createToken = (user) => {
    return jwt.sign(user, JWT_SECRET,{
        expiresIn: '7d'
    });
}