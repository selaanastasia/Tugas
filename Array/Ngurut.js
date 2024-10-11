let jumlahElemen2 = parseInt(prompt("Masukkan jumlah elemen array:"));
let angka = [];

// Mengisi array angka dengan input dari pengguna
for (let i = 0; i < jumlahElemen2; i++) {
    angka[i] = parseFloat(prompt("Masukkan angka ke-" + (i + 1) + ":"));
}

function urutkanAngka(arr) {
    return arr.slice().sort((a, b) => a - b);
}

console.log("Array terurut: " + urutkanAngka(angka));