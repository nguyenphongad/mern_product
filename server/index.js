const express = require('express');
const dotenv = require('dotenv').config();
const { default: mongoose } = require('mongoose');
const routes = require('./src/routes/index');
const bodyPaser = require('body-parser');

const app = express();

app.use(bodyPaser.json());

routes(app);


//connect mongodb
mongoose
    .connect(process.env.MONGO_URL_TIKI)
    .then(() => { console.log("connect database success") })
    .catch((err) => { console.log("connect failed! " + err) })


const port = 2000;
app.listen(port, () => { console.log("server is running port " + port) })

