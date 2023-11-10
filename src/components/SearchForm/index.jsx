function SearchForm() {
    return (
        <div>
            <p>Pencarianmu</p>         
            <form>
                <div>
                    <label>Nama Mobil</label>
                    <input type="text" placeholder="innova"/>
                </div>
                <div>
                    <label>Kategori</label>
                    <select id="category" name="category">
                        <option>Masukkan Kapasitas Mobil</option>
                        <option value='small'>2-4 orang</option>
                        <option value='medium'>4-6 orang</option>
                        <option value='large'>6-8 orang</option>
                    </select>
                </div>
                <div>
                    <label>Status</label>
                    <select id="isRented" name="isRented">
                        <option>Disewa</option>
                        <option value='true'>Sudah disewa</option>
                        <option value='false'>Belum disewa</option>
                    </select>
                </div>
                <input type="submit" value='Cari Mobil' />
            </form>
        </div>
    )
}

export default SearchForm;