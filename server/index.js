const connectToMongo = require('./db');
connectToMongo();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
//Midleware to express deal with json file
app.use(express.json());

app.listen(port, () => {
  console.log(`Socialbook-Backend listening at http://localhost:${port}`);
});
