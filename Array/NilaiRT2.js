let jumlahElemen = parseInt(prompt("Masukkan jumlah elemen array:"));
let nilai = [];

// Mengisi array nilai dengan input dari pengguna
for (let i = 0; i < jumlahElemen; i++) {
    nilai[i] = parseFloat(prompt("Masukkan nilai ke-" + (i + 1) + ":"));
}

function hitungRataRata(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

console.log("Rata-rata: " + hitungRataRata(nilai));