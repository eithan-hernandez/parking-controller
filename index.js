
require("./src/config/config");

const express = require("express");
const app = express();


//app.use(require("./src/routes/routes.js"));

W
app.listen(Number(process.env.PORT || 3000), () =>
  console.log(
    `API parking controller running in: ${process.env.PORT || 3000}`
  )
);