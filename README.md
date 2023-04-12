# Curso de Asincronismo con JavaScript

Javascript es síncrono y no bloqueante, con un bucle de eventos (concurrencia), implementado con un único hilo para sus interfaces de I/O.

## Javascript es single-threaded

Aún con múltiples procesaadores, solo se puede ejecutar tareas en un solo hilo, llamado el hilo principal.

### Conceptos

#### Bloqueante

Una tarea no devuelve el control hasta que se ha completado.

#### No bloqueante

Una tarea se devuelve inmediantamente con independencia del resultado. Si se completó, devuelve los datos. Si no, un error.

#### Síncrono

Las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea.

#### Asíncrono

Las tareas pueden ser realizadas más tarde, lo que hace posible que una respuesta sea procesada en diferido.

## Concurrencia en Javascript

Utiliza un modelo de concurrencia basado en un "loop de eventos".

### Conceptos

#### EventLoop

El bucle de eventos es un patrón de diseño que espera y distribuye eventos o mensajes en un programa.

#### Callbacks

Una función que se pasa como argumento de otra función y que será invocada.

#### Promesas (ES&)

Funciones no bloqueantes y asíncrona la cual puede retornar un valor ahora, en el futuro o nunca.

#### Async / Await (ES2017)

Permite estructurar una función asincrónica sin bloqueo de una manera similar a una función sincróna ordinaria.
___

Javascript acaba de convertirse en Multi-Threaded con la capacidad de realizar múltiples tareas simultáneamente.

Esto cambia la definición de Javascript...

Javascript es asíncrono y no bloqueante, con un bucle de eventos (concurrencia) impleentado con un único hilo para sus interfaces de I/O.
