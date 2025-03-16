//librerias y las manejamos con App.js
const express = require('express');
const bodyParser = require('body-parser');

// Ruta Archivo
const clientesRoutes = require('./routes/clientesRouter.js');


const cors = require('cors');
const app = express();


app.use(bodyParser.json());// for parsing application/json
 
app.use(cors({
  origin: 'http://localhost:9999/', // Ajusta esto según sea necesario
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


// Routes clientes
app.use('/', clientesRoutes);




// start the server

const PORT = 9999;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`); // para montar el servidor 
});