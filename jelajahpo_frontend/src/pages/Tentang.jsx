export default function Tentang() {
    return (
        <div className="container py-5">
            <div
                className="card border-0 shadow-lg mx-auto"
                style={{
                    maxWidth: "700px",
                    borderRadius: "20px",
                    overflow: "hidden"
                }}
            >
                <div
                    className="p-4 text-white"
                    style={{
                        background: "linear-gradient(135deg, #404b5a, #87c1ff)"
                    }}
                >
                    <h2 className="fw-bold mb-1">Tentang Saya</h2>
                    <p className="mb-0">
                        Kenali saya dan destinasi wisata favorit saya
                    </p>
                </div>

                <div className="card-body p-4">
                    <div className="mb-3">
                        <h5 className=" fw-bold" style={{color: "#304b69"}}>👤 Nama</h5>
                        <p className="mb-0">Dhea Renata</p>
                    </div>

                    <div className="mb-3">
                        <h5 className="fw-bold" style={{color: "#304b69"}}>🎓 Kelas</h5>
                        <p className="mb-0">XII RPL 1</p>
                    </div>

                    <div className="mb-4">
                        <h5 className="fw-bold" style={{color: "#304b69"}}>
                            📍 Destinasi Wisata Favorit
                        </h5>
                        <p className="mb-0">Yogyakarta</p>
                    </div>

                    <div
                        className="p-3"
                        style={{
                            backgroundColor: "#eaf4ff",
                            borderRadius: "12px",
                            borderLeft: "5px solid #304b69"
                        }}
                    >
                        <p className="mb-0 text-secondary">
                            Halo, saya Dhea. Saya merupakan siswi jurusan Rekayasa Perangkat Lunak yang memiliki ketertarikan pada teknologi dan dunia digital. Saya juga senang mengenal berbagai tempat wisata dan budaya di Indonesia. Salah satu tempat yang ingin saya kunjungi lagi adalah Yogyakarta, kota yang terkenal dengan keindahan, budaya, dan berbagai destinasi menariknya.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}