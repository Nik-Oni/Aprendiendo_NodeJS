const fs = require('fs');


fs.copyFile('./archivos/archivo_original.txt', './archivos/archivo_nuevo.txt', (error)=>{
    if (error) {
        console.log('error al copiar')
    } else {
        console.log('copia exitosa')
    }
})
