const http = require('http');
const servidor = http.createServer(function(peticion,respuesta){
  respuesta.writeHead(200, {'Content-Type': 'text/html'});
  respuesta.write('respuesta para la direccion: ' + peticion.url);

  console.log('petición web');
})
servidor.listen(3000);
console.log('Ejecutanado servidor NodeJS');