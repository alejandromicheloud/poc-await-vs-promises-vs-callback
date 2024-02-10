# Simple Node.js Express API - await vs promises vs callback

Este proyecto es una API simple creada con Node.js y Express para comparar el comportamiento en el uso de await vs promises vs callback en procesos asíncronos de backend.

## Funcionalidades

La API tiene un solo endpoint (`/process`) que acepta dos parámetros de consulta:

- `method`: El método de procesamiento a utilizar. Puede ser 'await', 'promises', 'callback', o cualquier otro valor (que se maneja con un setTimeout).
- `locktime`: El tiempo (en milisegundos) que el método de procesamiento debe "bloquear" antes de responder.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```

## Iniciar API

```bash
node index.js
```

## Pruebas con método await

```bash
node requests-await.js await
node requests-await.js promises
node requests-await.js callback
```

## Requestbench output example

```bash
node .\requestbench.js await
http://localhost:3000/process?method=await&locktime=1000
Response 1: Process finished method: await timeout: 1000 timestamp: 2024-02-10T11:17:34.003Z
Response 2: Process finished method: await timeout: 1000 timestamp: 2024-02-10T11:17:34.005Z
Response 3: Process finished method: await timeout: 1000 timestamp: 2024-02-10T11:17:34.006Z
Total time: 1.100s
```
