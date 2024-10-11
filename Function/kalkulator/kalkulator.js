// Fungsi untuk penjumlahan
function penjumlahan(bil1, bil2) {
    return bil1 + bil2;
}

// Fungsi untuk pengurangan
function pengurangan(bil1, bil2) {
    return bil1 - bil2;
}

// Fungsi untuk perkalian
function perkalian(bil1, bil2) {
    return bil1 * bil2;
}

// Fungsi untuk pembagian
function pembagian(bil1, bil2) {
    if (bil2 !== 0) {
        return bil1 / bil2;
    } else {
        return "Kesalahan: Tidak dapat membagi dengan nol.";
    }
}

// Fungsi untuk menjalankan kalkulator
function kalkulator() {
    let operasi = prompt("Pilih operasi yang diinginkan: \n1. Penjumlahan (+)\n2. Pengurangan (-)\n3. Perkalian (*)\n4. Pembagian (/)");

    // Meminta input dari pengguna
    let bil1 = parseFloat(prompt("Masukkan bilangan pertama:"));
    let bil2 = parseFloat(prompt("Masukkan bilangan kedua:"));
    let hasil;

    // Menentukan operasi yang dipilih dan menghitung hasilnya menggunakan function
    if (operasi === "+" || operasi === "1") {
        hasil = penjumlahan(bil1, bil2);
        alert("Hasil penjumlahan: " + bil1 + " + " + bil2 + " = " + hasil);
    } else if (operasi === "-" || operasi === "2") {
        hasil = pengurangan(bil1, bil2);
        alert("Hasil pengurangan: " + bil1 + " - " + bil2 + " = " + hasil);
    } else if (operasi === "*" || operasi === "3") {
        hasil = perkalian(bil1, bil2);
        alert("Hasil perkalian: " + bil1 + " * " + bil2 + " = " + hasil);
    } else if (operasi === "/" || operasi === "4") {
        hasil = pembagian(bil1, bil2);
        alert("Hasil pembagian: " + bil1 + " / " + bil2 + " = " + hasil);
    } else {
        alert("Operasi tidak valid.");
    }
}

// Memulai kalkulator saat halaman dimuat
kalkulator();