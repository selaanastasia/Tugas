let batasAwal = parseInt(prompt("Masukkan batas awal:"));
let batasAkhir = parseInt(prompt("Masukkan batas akhir:"));
let banyakGanjil = 0;

if (batasAwal % 2 === 0) {
    batasAwal++; // Jika batasAwal genap, mulai dari bilangan ganjil berikutnya
}

for (let i = batasAwal; i <= batasAkhir; i += 2) {
    banyakGanjil++; // Menghitung banyaknya bilangan ganjil
}

console.log("Banyaknya bilangan ganjil: " + banyakGanjil);