//Require Libs
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//App Init
const app = express();

//Call Routes
const userRoute = require('./Routes/user.route.js')

//Middlewares
const corsOptions = { origin: "https://gc-api-dev.fl0.io/api/getUser/" };
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.use('/api', userRoute)

//Mont Server
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on: http://localhost:${port}`)
})

