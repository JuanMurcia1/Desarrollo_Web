const http = require('http');

// Creamos un servidor
const server = http.createServer((req, res) => {
  // Configuramos la respuesta del servidor
  res.statusCode = 200; // Estado de respuesta: OK
  res.setHeader('Content-Type', 'text/plain'); // Tipo de contenido: texto plano
  res.end('¡Hola, este es un servidor creado con Node.js!\n'); // Mensaje de respuesta
});

// Escuchamos en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('El servidor está escuchando en http://127.0.0.1:3000/');
});