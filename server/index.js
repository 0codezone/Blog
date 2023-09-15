const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const app = express();
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 8801;
// ------------------------------------------------------------
dotenv.config();
app.use(express.json()); // to get data in json format otherwise id shows blank object
app.use(cors());
app.use("/file", express.static(path.join(__dirname, "/images")));

// ------------------------------------------------------------
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// --------------------------------------------------------
//Setting storage engine
const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    // cb(null, `${Date.now()}--${file.originalname}`);
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storageEngine });
// app.use("/file", express.static("images")); //make images folder public

app.post("/api/upload", upload.single("file"), (req, res) => {
  // if (req.file) {
  //   res.send("Single file uploaded successfully");
  // } else {
  //   res.status(400).send("Please upload a valid image");
  // }
  // ---------------------or
  res.status(200).json({
    success: 1,
    profile_url: `http://localhost:8801/profile/${req.file.filename}`,
  });
});
// --------------------------------------------------------
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, () => {
  console.log(`Backend is running at port ${PORT}`);
});
