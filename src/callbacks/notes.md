# Función Callback

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

```
function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar);
```

[mdn web docs](https://developer.mozilla.org/es/docs/Glossary/Callback_function)

## Estados de XMLHttpRequest

- 0 → Se ha inicializado.
- 1 → Loading (cargando).
- 2 → Se ha cargado.
- 3 → Procesamiento si existe alguna descarga.
- 4 → Completado.

[mdn web docs](https://developer.mozilla.org/es/docs/Web/HTTP/Status)