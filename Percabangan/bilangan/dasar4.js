let x = parseInt(prompt("Masukkan bilangan a (a >= b dan a > 0):"));
let y = parseInt(prompt("Masukkan bilangan b (b > 0):"));

if (a >= b && b > 0) {
    console.log(x + " lebih besar dari " + y);
} else if (x < y) {
    console.log(x + " lebih kecil dari " + y);
} else {
    console.log(x + " sama dengan " + y);
}