var socket = io();

socket.on('connect', function() {
    console.log(`Conectado al servidor`);
});
// Esccha desconexión
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Juan',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del server:', resp);
});
// Escuchar información

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);

});