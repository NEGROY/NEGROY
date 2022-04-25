const mysql = require('mysql');

//DEBES DE MODIFICAR LA RUTA DESPUES 

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'tienda'
});

conexion.connect((err)=> {
    if(err){
        console.log('ERROR '+err)
    }else{
        console.log('NICE !!')
    }
});

module.exports = conexion;