const express = require('express'); // Para incluir la fragmentación
const app = express(); // Instancia del framework Express
const bodyParser = require('body-parser'); // Permite leer el cuerpo para analizarlo en un objeto Json
const morgan = require('morgan'); // Moddleware que informa sobre las peticiones al servidor


//Validamos que no estemos en ambiente de producción
if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}

// Settings
app.set('port', process.env.PORT || 4000) // Se setea el puerto, toma 4000 si no esta configurado en ENV

// Middlewares
app.use(bodyParser.urlencoded({extended:false})); // Para recibir datos desde un Formulario
app.use(bodyParser.json()); // Para que el servidor pueda recibir formato Json
app.use(morgan('dev')); // la opcion dev de la informacion principal. Combined da mas detalle


app.use('/api/v1/users', require('./api/v1/routes/users.routes'));
app.use('/api/v1/registers', require('./api/v1/routes/registers.routes'));
app.use('/api/v1/currencies', require('./api/v1/routes/currencies.routes'));


// Starting de server
app.listen(app.get('port'), ()=>{
    console.log(`Server running on http://localhost:${app.get('port')}/api/v1/`);
});