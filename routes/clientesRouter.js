// Clientes Router.js
const express = require('express');
const router = express.Router();
const ClientesController =  require('../controller/clientesControlador.js');

// Define the routes for GET, POST, PUT, DELETE 
router.get('/clientes', ClientesController.obtenerPorCampoEntero);
router.get('/clientes/cadena', ClientesController.obtenerPorCampoCadena);
router.get('/clientes/todos', ClientesController.obtenerTodos);
router.post('/clientes',ClientesController.agregarClientes);
router.put('/clientes',ClientesController.actualizarClientes);
router.delete('/clientes',ClientesController.eliminarClientes);

module.exports = router;