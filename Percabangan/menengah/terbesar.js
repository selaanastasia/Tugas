// Menentukan bilangan terbesar dari dua buah bilangan x dan y
let x = parseFloat(prompt("Masukkan bilangan pertama (x):"));
let y = parseFloat(prompt("Masukkan bilangan kedua (y):"));

if (x > y) {
    alert(x + " adalah bilangan terbesar.");
} else if (x < y) {
    alert(y + " adalah bilangan terbesar.");
} else {
    alert("Kedua bilangan sama besar.");
}