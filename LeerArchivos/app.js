const fs = require('fs');

fs.copyFile('./archivos/archivo_original.txt', './otros_archivos/archivo_original.txt', (error)=>{
    if (error) {
        console.log('error al copiar')
    } else {
        fs.writeFile('./archivos/confirmacion.txt', 'archivo copiado Ok', (error)=>{
            console.log('proceso finalizado')
        })
        console.log('copia exitosa')
    }
})

/* fs.unlink('./archivos/archivo_nuevo.txt', (error)=>{
    if (error) {
        console.log('error al eliminar')
    } else {
        console.log('eliminacion exitosa')
    }
}) */
