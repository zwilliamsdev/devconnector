const express = require("express"); // Backend framework
const mongoose = require("mongoose"); // MongoDB
const bodyParser = require("body-parser"); // Parse inputs from website
const app = express(); // Express object
const PORT = process.env.PORT || 5000; // Port for server to run on

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const post = require("./routes/api/posts");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", post);

app.get("/", (req, res) => res.send("Hello world!")); // test route
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
