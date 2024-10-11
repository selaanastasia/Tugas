let n = parseInt(prompt("Masukkan jumlah bilangan Fibonacci yang ingin ditampilkan:"));

function deretFibonacci(n) {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo.slice(0, n);
}

console.log("Deret Fibonacci: " + deretFibonacci(n));