// Menentukan nilai indeks akhir mahasiswa
let uts = parseFloat(prompt("Masukkan nilai UTS (35%):"));
let uas = parseFloat(prompt("Masukkan nilai UAS (45%):"));
let tugas = parseFloat(prompt("Masukkan nilai Tugas (20%):"));

let NA = (uts * 0.35) + (uas * 0.45) + (tugas * 0.20); // Hitung Nilai Akhir

let indeks;
if (NA >= 80 && NA <= 100) {
    indeks = "A";
} else if (NA >= 70 && NA < 80) {
    indeks = "B";
} else if (NA >= 50 && NA < 70) {
    indeks = "C";
} else if (NA >= 40 && NA < 50) {
    indeks = "D";
} else if (NA < 40) {
    indeks = "E";
}

alert("Nilai Akhir: " + NA + "\nIndeks: " + indeks);