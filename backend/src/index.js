const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();

app.use(cors({
//  origin : '' = qual endereço pra acessar a aplicação
}));
app.use(express.json());
app.use(routes);


/**
 * SQL : MySQl, Oracle, SQLite etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder : table(users).select('*').where()
  */






app.listen(4444);