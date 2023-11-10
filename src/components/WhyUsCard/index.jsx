import './style.css'

function WhyUsCard() {
    const cardList = [
        {
            icon: 'bi bi-hand-thumbs-up-fill',
            title: 'Mobil Lengkap',
            desc: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat',
        },
        {
            icon: 'bi bi-tag',
            title: 'Harga Murah',
            desc: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain',
        },
        {
            icon: 'bi bi-clock',
            title: 'Layanan 24 Jam',
            desc: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu',
        },
        {
            icon: 'bi bi-award',
            title: 'Sopir Profesional',
            desc: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu',
        },
    ]
    return(
        <div className='container-why'>
            <h2>Why Us?</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
            <div className='container-card-whyus'>
                {cardList.map((list) => (
                    <div className='card-why' key={list.id}>
                        <div>
                        <i class={list.icon}></i>
                        </div>
                        <p>{list.title}</p>
                        <p>{list.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyUsCard;