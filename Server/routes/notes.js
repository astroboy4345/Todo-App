const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.get("/",async (req,res)=>{
    const notes = await Note.find();
    res.json(notes);
});



router.post("/",async (req,res)=>{
    const {header,content} = req.body;
    const newNote = new Note({header,content});
    const savedNote = await newNote.save();
    res.json(savedNote);
});

router.delete("/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});



module.exports = router;