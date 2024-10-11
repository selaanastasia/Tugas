let batasAwal = parseInt(prompt("Masukkan batas awal:"));
let batasAkhir = parseInt(prompt("Masukkan batas akhir:"));

if (batasAwal % 2 === 0) {
    batasAwal++;
}

for (let i = batasAwal; i <= batasAkhir; i += 2) {
    console.log(i);
}