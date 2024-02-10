const axios = require('axios');

async function makeRequests(method) {
    // Iniciar el temporizador
    console.time('Total time');

    try {
        const url = `http://localhost:3000/process?method=${method}&locktime=1000`;
        console.log(url);
        const responses = await Promise.all([axios.post(url), axios.post(url), axios.post(url)]);
        // Log the responses
        responses.forEach((response, i) => {
            console.log(`Response ${i + 1}:`, response.data);
        });

    } catch (error) {
        console.error('Error making requests:', error);
    }

    // Detener el temporizador y mostrar el tiempo total
    console.timeEnd('Total time');
}

// Invocar la función con el método proporcionado como argumento de la línea de comandos
const method = process.argv[2];
makeRequests(method);