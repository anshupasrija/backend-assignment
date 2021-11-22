const express    = require("express");
const axios = require('axios');
const bodyParser = require("body-parser");

const { step1 , step2 } = require('./routes/controller')

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({extended:false}));
app.use( bodyParser.json());


app.get('/api/ping', step1)
app.get('/api/posts/:tags/:sortBy?/:direction?', step2);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});