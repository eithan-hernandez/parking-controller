
require("./src/config/config");

const express = require("express");
const app = express();


//app.use(require("./src/routes/routes.js"));

app.listen(Number(process.env.PORT), () =>
  console.log(
    `API parking controller running in: ${process.env.PORT}`
  )
);