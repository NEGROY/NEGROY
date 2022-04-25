
require ('includes/coneion.js');

const express = require('express');
const port = (process.env.port || 3000);
const app = express();

app.set('port',port)

app.use('/api',require('rutas'))

app.listen(app.get('port'),(e)=>{
    if(e){
        console.log('error iniciar server ' +e)
    }else{
        console.log('servidor nice' +port)
    }
})