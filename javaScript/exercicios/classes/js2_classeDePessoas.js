/*
Crie uma classe para repreentar pessoas;
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso /altura * altura);
Instancie uma pessoa chamada José que tenha 70kg, 1.75 de altura e peça a José dizer o valor do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(peso, altura) {
        return `Meu nome é ${this.nome} e meu IMC é ${this.peso / (this.altura * this.altura)}`
    }

    classificarImc(peso, altura) {
        const imc = this.peso / (this.altura * this.altura);
        if (imc < 18.5) {
            return "Estou Abaixo do peso."
        } else if (imc >= 18.5 && imc < 25) {
            return "Estou n peso normal."
        } else if (imc >= 25 && imc < 30) {
            return "Estou acima do peso."
        } else if (imc >= 30 && imc < 40) {
            return "Estou obeso."
        } else if (imc >= 40) {
            return "Estou com obesidade grave."
        } else {
            return "Valor inválido."
        }
    }
}

const pessoa1 = new Pessoa("José", 70, 1.75);
const pessoa2 = new Pessoa("Filipe", 77, 1.73)

console.log(pessoa1.calcularImc());
console.log(pessoa1.classificarImc());
console.log(pessoa2.calcularImc());
console.log(pessoa2.classificarImc());