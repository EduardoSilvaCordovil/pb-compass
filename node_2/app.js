let app = require('./config/server')
let rotaNoticias = require('./app/routes/noticias')(app);
let rotaHome = require('./app/routes/home')(app);
let rotaForm = require('./app/routes/formulario_inclusao_noticias')(app);

app.listen(4000, function () {
    console.log("SERVIDOR ON");
});