const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

// app.use(cors({
//   origin: 'http://front_end_domain_origin'
// })); // PROD
app.use(cors()); // DEV
app.use(express.json());
app.use(routes);

app.listen(3333);