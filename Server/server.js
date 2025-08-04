const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const notesRoute = require("./routes/notes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{console.log("MongoDB Connected Successfully")})
.catch(err=> console.error("Mongo Error : ",err));

//Routes
app.use("/api/notes", notesRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});