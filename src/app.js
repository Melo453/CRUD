const express = require('express');
const app = express();

//configuracion
app.set('port', process.env.PORT || 2500);
app.set('view engine', 'ejs');

//vistas





//puerto
app.listen(app.get('port'), () =>{
    console.log('servidor corriendo en el puerto',  app.get('port') );
});