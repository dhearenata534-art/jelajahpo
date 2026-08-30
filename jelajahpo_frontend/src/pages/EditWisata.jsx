import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditWisata() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nama_wisata: "",
        deskripsi: "",
        harga_tiket: "",
        id_kategori: ""
    });

    const [loading, setLoading] = useState(true);

    const [kategori, setKategori] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2001/kategori")
            .then((res) => res.json())
            .then((data) => {
                setKategori(data);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
    fetch("http://localhost:2001/kategori")
        .then((res) => res.json())
        .then((data) => {
            if (data.length > 0) {
                setFormData({
                    nama_wisata: data[0].nama_wisata || "",
                    deskripsi: data[0].deskripsi || "",
                    harga_tiket: data[0].harga_tiket || "",
                    id_kategori: data[0].id_kategori || ""
                });
            } else {
                alert("Data wisata tidak ditemukan");
                navigate("/wisata");
            }

            setLoading(false);
        })
        .catch((err) => console.error(err));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(`http://localhost:2001/wisata/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const konfirmasi = window.confirm(
            "Sudah yakin mau menyimpan perubahan ini?"
        );

        if (!konfirmasi) {
            return;
        }

        alert("Wisata berhasil diperbarui!");
        navigate("/wisata");
    };

    if (loading) {
        return <div className="container mt-4">Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h2>Edit Wisata</h2>

            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <label className="form-label">Nama Wisata</label>
                    <input
                        type="text"
                        name="nama_wisata"
                        value={formData.nama_wisata}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Deskripsi</label>
                    <textarea
                        name="deskripsi"
                        value={formData.deskripsi}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Masukkan Deskripsi Produk"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Harga Tiket</label>
                    <input 
                        type="number"
                        name="harga_tiket"
                        value={formData.harga_tiket}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Masukkan Harga"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Kategori</label>
                    <select
                        className="form-select"
                        name="id_kategori"
                        value={formData.id_kategori}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-- Pilih Kategori --</option>

                        {kategori.map((item) => (
                            <option
                                key={item.id_kategori}
                                value={item.id_kategori}
                            >
                                {item.kategori}
                            </option>
                        ))}
                    </select> 
                </div>

                <button
                    type="submit"
                    className="btn btn-success me-2"
                >
                    Simpan Perubahan
                </button>
            </form>
        </div>
    );
}

