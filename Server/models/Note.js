const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    header:String,
    content:String
},{timestamps:true});

module.exports = mongoose.model("Notes",notesSchema);