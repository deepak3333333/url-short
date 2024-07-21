const { default: mongoose } = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: { type: String, required: true },
    redirectedUrl: { type: String, required: true },
    visitedHistory: [{ time: { type: Date } }],
}, { timestamps: true });

const URL=mongoose.model("rul2",urlSchema)
module.exports=URL
