// Menentukan jenis akar persamaan kuadrat berdasarkan diskriminan
let a = parseFloat(prompt("Masukkan koefisien x^2 (a):"));
let b = parseFloat(prompt("Masukkan koefisien x (b):"));
let c = parseFloat(prompt("Masukkan konstanta (c):"));

let D = (b * b) - (4 * a * c); // Rumus diskriminan

if (D > 0) {
    alert("Akar-akar persamaan adalah real dan berbeda.");
} else if (D === 0) {
    alert("Akar-akar persamaan adalah real dan sama.");
} else {
    alert("Akar-akar persamaan adalah imajiner.");
}