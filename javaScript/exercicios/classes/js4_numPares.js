/*
crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par
*/

let list = [5,10,9,89,6,54,1,11,2]

for(let i = 0; i < list.length; i ++){
    let num = list[i];
    if(num % 2 === 0){
        console.log (num);
    } 
}
