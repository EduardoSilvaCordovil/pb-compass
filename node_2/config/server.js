let express = require('express');
let app = express();

app.set('view enginne', 'ejs');
app.set('views', '.app/views');

module.exports = app;