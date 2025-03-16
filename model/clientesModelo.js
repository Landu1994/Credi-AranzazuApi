//Clientes Model.js
const conn = require('./conn/conexion');//verificar si estan bien las carpetas enrutadoras 


class clientesModelo {
    static obtenerEntero(dato, campo, callback) {
        const query = `SELECT * FROM clientes WHERE ?? = ?`;
        conn.query(query, [campo, dato], (err, result) => {
            if (err) {
                console.log(err);//mostrar el error
                return callback(err, null);
            }
            callback(null, result);
        });
    }

    static obtenerCadena(datos, campo, callback) {
        const query = `SELECT * FROM clientes WHERE ?? LIKE ?`;
        conn.query(query, [campo, `%${datos}%`], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result);
        });
    }

    static obtenerTodas( callback) {
        const query = `SELECT * FROM clientes `;
        conn.query(query, (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result);
        });
    }
    
    static insertarClientes( clientes, callback) {
        const query = `INSERT INTO clientes SET ?`;
        conn.query(query, [ clientes], (err, result) => { 
            if (err) {
                
               callback(err, null);
               console.error(err);
               return
            }
            callback(null, { mensaje: 'clientes agregado correctamente' });
        });
    }
    
    static editarClientes(id_cliente, nombre, email, telefono, direccion, fecha_registro, password, rol, callback) {
        const query = `UPDATE clientes SET nombre =?, email =?, telefono =?, direccion =?, fecha_registro =?, password =?, rol =? WHERE id_cliente =?`;
        conn.query(query, [nombre, email, telefono, direccion, fecha_registro, password, rol, id_cliente], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { mensaje: 'clientes modificado correctamente' });
        });
    }

    static eliminarClientes(id_cliente, callback) {
        const query = `DELETE FROM clientes WHERE id_cliente =?`;
        conn.query(query, [id_cliente], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { mensaje: 'clientes eliminado correctamente' });
        });
    }
}    

module.exports =clientesModelo;