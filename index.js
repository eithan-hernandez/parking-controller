
require("./src/config/config");

const express = require("express");
const app = express();


//app.use(require("./src/routes/routes.js"));


app.listen(Number(3030), () =>
  console.log(
    `API parking controller running in: ${3030}`
  )
);