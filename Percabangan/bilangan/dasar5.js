// Menentukan nama hari berdasarkan nomor
let noHari = parseInt(prompt("Masukkan nomor hari (1-7):"));
let hari;

switch (noHari) {
    case 1: hari = "Senin"; break;
    case 2: hari = "Selasa"; break;
    case 3: hari = "Rabu"; break;
    case 4: hari = "Kamis"; break;
    case 5: hari = "Jumat"; break;
    case 6: hari = "Sabtu"; break;
    case 7: hari = "Minggu"; break;
    default: hari = "Nomor hari tidak valid!";
}

console.log("Hari ke-" + noHari + " adalah " + hari);