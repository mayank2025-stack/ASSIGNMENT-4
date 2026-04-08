let a = parseInt(prompt("Enter correct answers:"));
let b = parseInt(prompt("Enter partially correct answers:"));
let c = parseInt(prompt("Enter wrong answers:"));

let score = 3 * a + b - 2 * c;

if (score < 0) {
    score = 0;
}

if (a + b + c > 50) {
    score -= 10;
}

let status = (score >= 60) ? "PASS" : "FAIL";

alert(score + ", " + status);
