/*
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
Crie um método (função dentro da classe) que, dada a quantidade de quilômetros e o preço do combustível nos retorne o valor gasto em reais para realizar este percurso.
*/
class Carro{
    marca;      //atributo
    cor;        //atributo
    gastoMedio; //atributo  L/Km

    constructor(marca, cor, gastoMedio){    //informações obrigatórias para qualificar um instância
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoViagem(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedio * precoCombustivel
    }
}

const uno = new Carro("Fiat", "vermelho", 1/12)
const palio = new Carro("Fiat", "preto", 1/10)
console.log(uno.calcularGastoViagem(100, 6.03).toFixed(2))
console.log(palio.calcularGastoViagem(100, 6.03).toFixed(2))
