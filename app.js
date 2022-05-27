const http=require('http');

const servidor =http.createServer( (peticion, respuesta)=>{
    respuesta.writeHead(200, {'Content-type': 'text/html'});
    respuesta.write('Respuesta para la direccion: ' + peticion.url)
    console.log('peticion web');
});
servidor.listen(3000);
console.log('Ejecutando servidor NodeJS');