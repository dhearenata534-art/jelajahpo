const express = require('express');
const cors = require('cors')
const app = express();
const mysql = require('mysql2');
const PORT = 2001;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jelajahpo_db'
});

app.use(cors());
app.use(express.json());

db.connect(err => {
    if (err) {
        console.error('Gagal konek ke database:', err);
    } else {
        console.log('Berhasil konek ke database JelajahPo');
    }
});


app.get('/', (req, res) => {
    res.send('Haloo, Selamat datang dii JelajahPo API🔥')
});

// ======================= GET Wisata ========================== //
app.get('/wisata', (req, res) => {
    const sql = 'SELECT * FROM wisata';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});
// ============================================================= //

// ======================= POST Wisata ========================== //
app.post('/wisata', (req, res) => {
    const { nama_wisata, deskripsi, harga_tiket, id_kategori } = req.body;

    if (!nama_wisata || !harga_tiket) {
        return res.status(400).json({ message: 'Nama Wisata dan harga Tiket harus diisi dulu yaa!!' })
    }

    if (!deskripsi) {
        return res.status(400).json({ message: 'Deskripsi harus diisi dulu yaa!!' })
    }

    const sql = 'INSERT INTO wisata (nama_wisata, deskripsi, harga_tiket, id_kategori, tgl_input) VALUES (?, ?, ?, ?, NOW())';
    db.query(sql, [nama_wisata, deskripsi, harga_tiket, id_kategori], (err, result) => {
        if (err) return res.status(500).json({ error: err.sqlMessage });
        res.json ({
            message: 'Wisata sudah berhasil ditambahkan!',
            id_wisata: result.insertId
        });
    });
});
// ============================================================= //


// ======================= GET Kategori ========================== //
app.get('/kategori', (req, res) => {
    const sql = 'SELECT * FROM kategori';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});
// ============================================================= //


app.listen(PORT, () => {
    console.log(`Server JelajahPo jalan di http://localhost:${PORT}`);
});