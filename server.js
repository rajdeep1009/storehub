const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

//connect database
connectDB();

//init middleware for parsing request body
app.use(express.json({ extended: false }));

//Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//serve static assets in production
if(process.env)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
