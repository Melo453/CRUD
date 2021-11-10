const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();


const customerRoutes = require('./routes/customer');



//configuracion
app.set('port', process.env.PORT || 2500);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));



app.use(morgan('dev'));

app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'pruebaCrud'
}, 'single'));


//rutas

app.use('/',customerRoutes);

app.use(express.static(path.join(__dirname, 'public')));
//puerto
app.listen(app.get('port'), () =>{
    console.log('servidor corriendo en el puerto',  app.get('port') );
});