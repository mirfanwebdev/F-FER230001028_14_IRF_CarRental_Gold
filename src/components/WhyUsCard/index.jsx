import './style.css'

function WhyUsCard() {
    const cardList = [
        {
            title: 'Mobil Lengkap',
            desc: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat',
        },
        {
            title: 'Harga Murah',
            desc: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain',
        },
        {
            title: 'Layanan 24 Jam',
            desc: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu',
        },
        {
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
                        <p>{list.title}</p>
                        <p>{list.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyUsCard;