//Clientes Controller.js
const { response } = require('express');
const ClientesModel = require('../model/clientesModelo.js');


class ClientesControlador {
    static obtenerPorCampoEntero(req, res) {
        const { id_cliente } = req.query;
        ClientesModel.obtenerEntero(id_cliente, 'id_cliente', (err, results) => { // Corrección aquí
            
            if (err) {
                console.log(err)
                return res.status(500).json({ error: 'Error al obtener los datos' });
            }
            res.json({ data: results });
        });
    }


    static obtenerPorCampoCadena(req, res) {
        const { dato, campo } = req.query;
        ClientesModel.obtenerEntero(dato, campo, (err, results) => {
            if (err) return res.status(500).json({ error: 'Error al obtener los datos' });
         res.json({ data: results });
        });
    }

    static obtenerTodos(req, res) {
        
        ClientesModel.obtenerTodas((err, results) => {
            if (err) return res.status(500).json({ error: 'Error al obtener los datos' });
            res.json({ data: results });
        });
    }


    static agregarClientes(req, res) {
        
        const { id_cliente, nombre, email, telefono, direccion, fecha_registro, password, rol} = req.body; // obtener datos del body 
        const clientes ={ //objeto que organiaza los datos
            id_cliente,
            nombre,
            email, 
            telefono,
            direccion,
            fecha_registro,
            password,
            rol

            
        }
        ClientesModel.insertarClientes( clientes , (err, response) => {
            if (err) {
                res.status(500).json({ error: 'Error al agregar cliente' });
                console.log(err);
                return;
            } 
            res.json(response);
        });
    }

    static actualizarClientes(req, res) {
        const { id_cliente, nombre, email, telefono, direccion, fecha_registro, password, rol } = req.body;
        ClientesModel.editarClientes(id_cliente, nombre, email, telefono, direccion, fecha_registro, password, rol, (err, response) => {
            if (err) return res.status(500).json({ error: 'Error al actualizar clientes' });
            res.json(response);
        });
    }
    
    static eliminarClientes(req, res) {
        const { id_cliente } = req.body;
        ClientesModel.eliminarClientes(id_cliente, (err, response) => {
            if (err) return res.status(500).json({ error: 'Error al eliminar clientes' });
            res.json(response);
        });
    }

}

module.exports = ClientesControlador;