const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },

})

module.exports = mongoose.model("categorie", categorySchema);