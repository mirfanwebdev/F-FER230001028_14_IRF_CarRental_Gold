import './style.css'

function SearchForm({ 
    name, 
    category, 
    price,
    isRented,
    isSubmit,
    handleChangeName,
    handleChangeCategory,
    handleChangeStatus,  
    handleChangePrice,
    handleIsSubmit,
}) {

    return (
        <div className="container-searchbar">
            <p>Pencarianmu</p>         
            <form onSubmit={handleIsSubmit}>
                <div>
                    <label>Nama Mobil</label>
                    <input onChange={handleChangeName} type="text" value={name} placeholder="innova"/>
                </div>
                <div>
                    <label>Kategori</label>
                    <select onChange={handleChangeCategory} id="category" name="category" value={category}>
                        <option value={''}>Masukkan Kapasitas Mobil</option>
                        <option value={'small'}>2-4 orang</option>
                        <option value={'medium'}>4-6 orang</option>
                        <option value={'large'}>6-8 orang</option>
                    </select>
                </div>
                <div>
                    <label>Harga</label>
                    <select onChange={handleChangePrice} id="price" name="price" value={price}>
                        <option value={''}>Harga sewa perhari</option>
                        <option value={'low'}>{`< Rp 400.000`}</option>
                        <option value={'medium'}>Rp 400.000 - Rp 600.000</option>
                        <option value={'high'}>{`> Rp 600.000`}</option>
                    </select>
                </div>
                <div>
                    <label>Status</label>
                    <select onChange={handleChangeStatus} id="isRented" name="isRented" value={isRented}>
                        <option value={''}>Disewa</option>
                        <option value={true}>Sudah disewa</option>
                        <option value={false}>Belum disewa</option>
                    </select>
                </div>
                {isSubmit ? 
                    <input className='submit-form edit' type='submit' value='Edit' /> :
                    <input className='submit-form' type='submit' value='Cari Mobil' />
                }
                
            </form>
        </div>
    )
}

export default SearchForm;