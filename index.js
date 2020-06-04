const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

let pintoresRouter = require('./routes/pintor');

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));


app.use('/', pintoresRouter);

app.get('/popo', (req, res)=>{
    res.render('popo', {

        title:"Inicio"
    });
});

mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://derekfranco:asdfgmovieelm1234@francoderek-48qs5.gcp.mongodb.net/pintores?retryWrites=true&w=majority';
mongoose.connect(cadena,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Pos ya establecí la conexión jefe...D:');
})
.catch(err=> console.log(err));

app.listen(PUERTO, ()=>{
    console.log("Escuchando el puerto...");
});