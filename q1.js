let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function hasZero(x) {
    return x.toString().includes('0');
}

function digitSum(x) {
    return x.toString().split('').reduce((sum, d) => sum + parseInt(d), 0);
}

let count = 0;

for (let x = L; x <= R; x++) {
    if (x % K === 0 && !hasZero(x)) {
        let sum = digitSum(x);
        if (isPrime(sum)) {
            count++;
        }
    }
}

alert(count);
