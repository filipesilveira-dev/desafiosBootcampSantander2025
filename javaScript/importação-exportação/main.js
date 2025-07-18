/*com essa importação, as funões gets e print do outro arquivo podem ser utilizadas aqui
const funcoes = require('./funcoes-auxiliares'); 
*/

/*
ATIVIDADE:

Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 a 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98
*/

const { gets, print } = require('./funcoes-auxiliares'); //estrutura de object destructuring

print(gets());