const fs = require('fs');
fs.readFile('./archivos/texto.txss', 'utf8', (error, datos)=>{
    if (error){
        console.log('error de lectura');
        throw error;
    } else {
        console.log(datos)
    }
});

