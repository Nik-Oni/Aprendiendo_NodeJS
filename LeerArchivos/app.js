const fs = require('fs');

fs.appendFile('./archivos/texto-nuevo.txt', '\n   Nuevos datos',(error)=>{
    if (error){
        console.log('error al escribir archivo');
    } else {
        console.log('archivo modificado exitosamente');
    }
})