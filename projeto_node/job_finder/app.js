const express    = require('express');
const app        = express();
const db         = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function() {
console.log(`EXPRESS NA PORTA: ${PORT}`);
});

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));

// DB CONECTION
db
.authenticate()
.then(() => {
    console.log("Conectado ao banco");
})
.catch(err => {
    console.log("Erro ao conectar", err);
});

// ROUTES
app.get('/', (req, res) => {
    res.send("FUNCIONANDO!!!");
});

// JOB ROUTES
app.use('/jobs_routes', require('./routes/jobs_routes'));
