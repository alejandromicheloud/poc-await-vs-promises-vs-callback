const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('API is working properly');
});

app.post('/process', async (req, res) => {
    // method: await, promises, callback
    const method = req?.query?.method || 'async';
    let timeout = req?.query?.locktime || 1000;
    timeout = parseInt(timeout);

    switch (method) {
        case 'await':
            async function doWorkAwait(timeout) {
                const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
                await wait(timeout);
                return 'await';
            }
            await doWorkAwait(timeout);
            res.send(`Process finished method: ${method} timeout: ${timeout} timestamp: ${new Date().toISOString()}`)
            break;
        case 'promises':
            const doWorkPromises = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('promises');
                    }, timeout);
                });
            };
            doWorkPromises().then(result => res.send(`Process finished method: ${method} timeout: ${timeout} timestamp: ${new Date().toISOString()}`));
            break;
        case 'callback':
            const doWorkCallback = (cb) => {
                setTimeout(() => {
                    cb('callback');
                }, timeout);
            };
            doWorkCallback((result) => res.send(`Process finished method: ${method} timeout: ${timeout} timestamp: ${new Date().toISOString()}`));
            break;
        default:
            setTimeout(() => {
                res.send(`Process finished method: ${method} timeout: ${timeout}`);
            }, timeout);
            break;

    }
});

app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});