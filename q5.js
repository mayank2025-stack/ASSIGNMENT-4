let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));

let m = 0;
let sum = 0;
let divisor = seed + 2;

while (sum < N) {
    m++;
    if (m % divisor !== 0) {
        sum += m;
    }
}

alert(m + " " + sum);
