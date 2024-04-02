const express = require("express");
const cors = require("cors");
var app = express();
app.use(cors());
// Bodyparser is needed for post requests

app.use("/user/abc", require("./routes/users"));

app.listen(3001, () => {
  console.log(`Server running on port 3001`);
});
