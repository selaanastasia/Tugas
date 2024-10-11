let batasAwal = parseInt(prompt("Masukkan batas awal:"));
let batasAkhir = parseInt(prompt("Masukkan batas akhir:"));

if (batasAwal % 5 !== 0) {
    batasAwal += 5 - (batasAwal % 5);
}

for (let i = batasAwal; i <= batasAkhir; i += 5) {
    console.log(i);
}