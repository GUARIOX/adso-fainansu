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
app.use(morgan('combined')); // la opcion dev de la informacion principal. Combined da mas detalle


// app.use('/api/v1/users', require('./api/v1/routes/users.routes'));
// app.use('/api/v1/articles', require('./api/v1/routes/articles.routes'));

// Starting de server
app.listen(app.get('port'), ()=>{
    console.log(`Server running on localhost:${app.get('port')}`);
})