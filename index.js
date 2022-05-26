
require("./src/config/config");

const express = require("express");
const app = express();



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require("./src/routes/routes.js"));

app.listen(Number(process.env.PORT || 3000), () =>
  console.log(
    `API parking controller running in: ${process.env.PORT || 3000}`
  )
);