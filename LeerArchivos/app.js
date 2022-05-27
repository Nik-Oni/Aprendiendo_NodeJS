const fs = require('fs');

const copiarArchivo = (rutaOriginal, nuevaRuta, archivoParaCopiar) => {
    fs.copyFile(rutaOriginal + '/' + archivoParaCopiar, nuevaRuta + '/' + archivoParaCopiar, (error) => {
        if (error) {
            console.log('Error al copiar')
        } else {
            eliminarArchivo(rutaOriginal, archivoParaCopiar)
            console.log('Copia exitosa')
        }
    })
}

const eliminarArchivo = (rutaOriginal, archivoParaEliminar)=>{
    fs.unlink(rutaOriginal + '/' + archivoParaEliminar, (error) => {
        if (error) {
            console.log('Error al eliminar')
        } else {
            console.log('Eliminacion exitosa')
        }
    })
}

copiarArchivo('./archivos','./otros_archivos','archivo_original.txt')
