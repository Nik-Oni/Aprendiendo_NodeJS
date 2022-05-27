const fs = require('fs');

/* fs.copyFile('./archivos/archivo_original.txt', './archivos/archivo_nuevo.txt', (error)=>{
    if (error) {
        console.log('error al copiar')
    } else {
        console.log('copia exitosa')
    }
}) */

fs.unlink('./archivos/archivo_nuevo.txt', (error)=>{
    if (error) {
        console.log('error al eliminar')
    } else {
        console.log('eliminacion exitosa')
    }
})
