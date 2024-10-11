// Fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
    let luas = 0.5 * alas * tinggi;
    alert("Luas segitiga dengan alas " + alas + " dan tinggi " + tinggi + " adalah: " + luas);
}

// Fungsi untuk menghitung keliling lingkaran
function hitungKelilingLingkaran(jariJari) {
    let pilihanPi = parseInt(prompt("Pilih nilai Pi yang ingin digunakan:\n1. Pi = 3.14\n2. Pi = 22/7"));

    let pi;
    if (pilihanPi === 1) {
        pi = 3.14; // Nilai Pi sederhana
    } else if (pilihanPi === 2) {
        pi = 22 / 7; // Nilai Pi 22/7
    }  else {
        alert("Pilihan tidak valid, menggunakan Math.PI secara default.");
        pi = Math.PI;
    }

    let keliling = 2 * pi * jariJari;
    alert("Keliling lingkaran adalah: " + keliling);
}

// Fungsi untuk mengecek bilangan prima
function cekBilanganPrima(bilangan) {
    if (bilangan < 2) {
        alert(bilangan + " bukan bilangan prima.");
        return;
    }
    for (let i = 2; i <= Math.sqrt(bilangan); i++) {
        if (bilangan % i === 0) {
            alert(bilangan + " bukan bilangan prima.");
            return;
        }
    }
    alert(bilangan + " adalah bilangan prima.");
}

// Fungsi utama untuk memilih tugas
function main() {
    let pilihan = parseInt(prompt("Pilih fungsi yang ingin dijalankan:\n1. Hitung Luas Segitiga\n2. Hitung Keliling Lingkaran\n3. Cek Bilangan Prima"));

    switch (pilihan) {
        case 1:
            let alas = parseFloat(prompt("Masukkan alas segitiga: "));
            let tinggi = parseFloat(prompt("Masukkan tinggi segitiga: "));
            hitungLuasSegitiga(alas, tinggi);
            break;
        case 2:
            let jariJari = parseFloat(prompt("Masukkan jari-jari lingkaran: "));
            hitungKelilingLingkaran(jariJari);
            break;
        case 3:
            let bilangan = parseInt(prompt("Masukkan bilangan bulat: "));
            cekBilanganPrima(bilangan);
            break;
        default:
            alert("Pilihan tidak valid, silakan coba lagi.");
    }
}

// Memulai program
main();