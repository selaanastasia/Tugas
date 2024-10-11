let jumlahElemen3 = parseInt(prompt("Masukkan jumlah elemen array:"));
let angkaTerbesar = [];

// Mengisi array angka dengan input dari pengguna
for (let i = 0; i < jumlahElemen3; i++) {
    angkaTerbesar[i] = parseFloat(prompt("Masukkan angka ke-" + (i + 1) + ":"));
}

function cariAngkaTerbesar(arr) {
    return Math.max(...arr);
}

console.log("Angka terbesar: " + cariAngkaTerbesar(angkaTerbesar));