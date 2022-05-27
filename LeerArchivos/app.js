const fs = require('fs');
//const contenido = fs.readFileSync('./archivos/texto.txt', 'utf8');
const contenido = fs.readFile('./archivos/texto.txt', 'utf8', (error, datos)=>{
    console.log(datos);
});

console.log(contenido)
