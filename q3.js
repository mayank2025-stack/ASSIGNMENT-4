let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}

let answer = -1;

for (let X = 0; X <= 100000; X++) {
    let value = N + X;
    if (value % K === 0 && isPalindrome(value)) {
        answer = X;
        break;
    }
}

alert(answer);
