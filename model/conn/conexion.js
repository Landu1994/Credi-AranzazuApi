const mysql = require('mysql2');

//crea la conexion a la base de datos
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'credi_aranzazu', // conexion a la base de datos
    charset: 'utf8', // agrega caracteres especiales de la base de datos 
});

conn.connect((err) =>{
    if(err) {
        console.error('Error de conexion: ' + err.stack );
        return;
    }
    console.log('Conectado a la base de datos');
});

module.exports = conn;

