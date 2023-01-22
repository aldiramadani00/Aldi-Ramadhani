const express = require('express');
const app = express();
const port = 80;
 
app.use(express.json());
app.get('/sensor1', (req, res) => {
    res.send({sensor1 : '200', sensor2: '300'});
});

app.get('/sensorpost', (req, res) => {
    res.send("Data yang terkirim adalah " + req.body.suhu);
});

app.get('/sensor2', (req, res) => {
    res.send('Ini Halaman Home');
});

app.get('/sensor3', (req, res) => {
    res.send('Silahkan Coba Lagi');
});

app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});