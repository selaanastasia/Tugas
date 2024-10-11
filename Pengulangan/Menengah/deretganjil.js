let batasAwal = parseInt(prompt("Masukkan batas awal:"));
let batasAkhir = parseInt(prompt("Masukkan batas akhir:"));
let jumlahGanjil = 0;

if (batasAwal % 2 === 0) {
    batasAwal++; // Jika batasAwal genap, mulai dari bilangan ganjil berikutnya
}

for (let i = batasAwal; i <= batasAkhir; i += 2) {
    jumlahGanjil += i; // Menambahkan bilangan ganjil ke jumlah total
}

console.log("Jumlah deret bilangan ganjil: " + jumlahGanjil);