const express = require('express');
const app = express();
const PORT = 2001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Haloo, Selamat datang dii JelajahPo-!!')
});

app.listen(PORT, () => {
    console.log(`Server JelajahPo jalan di http://localhost:${PORT}`);
});