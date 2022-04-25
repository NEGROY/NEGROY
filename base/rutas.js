const rutas = require('express').Router()
const conexion = require('./includes/conexion')
const coneion = require('./includes/conexion')

route.get('/',(req, res)=>{
    let sql = 'select * from '
    conexion.query(sql,(err, rows, fields)=>{
         if(err) throw err;
         else{
             res.json(rows)
         }
    })
})

/* AGREGAMOS RUTAS
rutas.get('/', function(req, res){
    res.send('hola desde aqui')
});
*/


module.exports = rutas;