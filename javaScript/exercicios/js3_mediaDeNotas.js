let score1 = 10;
let score2 = 5;
let score3 = 6;

let media = (score1 + score2 + score3) / 3;

if (media < 5) {
    console.log("Aluno(a) reprevado(a).")
} else if (media >= 5 && media < 7) {
    console.log("Aluno(a) de recuperação.")
} else {
    console.log("Aluno(a) passou de semestre.")
}