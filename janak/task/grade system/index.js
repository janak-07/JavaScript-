

let score = prompt("enter your marks");

let grade;

if (score >= 90 && score <= 100) {
    grade = " A";
}if (score >= 70 && score <= 89) {
    grade = " B";
} if (score >= 60 && score <= 69) {
    grade = " C";
} if (score >= 50 && score <= 59) {
    grade = " D";
} if (score >= 0 && score <= 49) {
    grade = " F";
}
document.write("your grade is",grade);