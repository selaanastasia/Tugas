// Fungsi untuk menentukan kuadran berdasarkan titik (x, y)
function tentukanKuadran() {
    let x = parseFloat(prompt("Masukkan nilai x:"));
    let y = parseFloat(prompt("Masukkan nilai y:"));
    let kuadran;

    if (x > 0 && y > 0) {
        kuadran = "Kuadran I";
    } else if (x < 0 && y > 0) {
        kuadran = "Kuadran II";
    } else if (x < 0 && y < 0) {
        kuadran = "Kuadran III";
    } else if (x > 0 && y < 0) {
        kuadran = "Kuadran IV";
    } else if (x === 0 && y === 0) {
        kuadran = "Titik berada di pusat koordinat";
    } else if (x === 0) {
        kuadran = "Titik berada pada sumbu y";
    } else if (y === 0) {
        kuadran = "Titik berada pada sumbu x";
    }

    alert("Titik (" + x + ", " + y + ") berada di " + kuadran);
}

// Memulai kalkulator kuadran saat halaman dimuat
tentukanKuadran();