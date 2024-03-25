const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = express('path'); // const path = require('node:path');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const Job = require('./models/Job');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const PORT = 3000;

app.listen(PORT, function () {
    console.log(`EXPRESS NA PORTA: ${PORT}`);
});

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));

// HANDLE BAR
app.set('views', path.join(__dirname, 'views')); // const filePath = path.join(__dirname, 'data', 'file.txt');
app.engine('handlerbars', exphbs({ defaultLayout: 'main' })); // const filePath = path.join(__dirname, 'data', 'file.txt');
app.set('view engine', 'handlebars');

// STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public'))); // const filePath = path.join(__dirname, 'data', 'file.txt');

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

    let search = req.query.job;
    let query = '%'+search+'%';

    if (!search) {
        Job.findAll({
            order: [
                ['createedAt', 'DESC']
            ]
        })
            .then(jobs => {
                res.render('index', {
                    jobs_routes
                });
            }).catch(err => console.log(err));
    } else {
        Job.findAll({
            where: {title: {[Op.like]: search}},
            order: [
                ['createedAt', 'DESC']
            ]
        })
            .then(jobs => {
                res.render('index', {
                    jobs_routes, search
                });
            }).catch(err => console.log(err));
    }
});

// JOBS ROUTES
app.use('/jobs_routes', require('./routes/jobs_routes'));
