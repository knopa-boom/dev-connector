const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect  DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send({ msg: "This has CORS enabled 🎈" });
});

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
