// Menentukan bilangan terbesar dari tiga buah bilangan x, y, z
let x = parseFloat(prompt("Masukkan bilangan pertama (x):"));
let y = parseFloat(prompt("Masukkan bilangan kedua (y):"));
let z = parseFloat(prompt("Masukkan bilangan ketiga (z):"));

let terbesar;

if (x > y && x > z) {
    terbesar = x;
} else if (y > x && y > z) {
    terbesar = y;
} else {
    terbesar = z;
}

alert("Bilangan terbesar adalah: " + terbesar);