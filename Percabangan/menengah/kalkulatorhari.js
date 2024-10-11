// Fungsi untuk menentukan hari keberapa dalam tahun berdasarkan tanggal dan bulan yang diinput
function tentukanHariDalamTahun() {
    let tanggal = parseInt(prompt("Masukkan tanggal (1-31):"));
    let bulan = parseInt(prompt("Masukkan bulan (1-12):"));

    // Jumlah hari pada tiap bulan (asumsi Februari 28 hari)
    let hariPerBulan = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalHari = 0;

    // Menambahkan jumlah hari dari bulan-bulan sebelumnya
    for (let i = 0; i < bulan - 1; i++) {
        totalHari += hariPerBulan[i];
    }

    // Menambahkan tanggal hari pada bulan yang dimasukkan
    totalHari += tanggal;

    alert("Hari ke-" + totalHari + " dalam tahun berjalan.");
}

// Memulai kalkulator hari dalam tahun saat halaman dimuat
tentukanHariDalamTahun();