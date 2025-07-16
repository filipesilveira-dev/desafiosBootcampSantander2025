function calculateImc(weight, height) {
    return weight / (height * height)
}

function classificationImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso."
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal."
    } else if (imc >= 25 && imc < 30) {
        return "Acima do peso."
    } else if (imc >= 30 && imc < 40) {
        return "Obeso."
    } else if (imc >= 40) {
        return "Obesidade grave."
    } else {
        return "Valor inválido."
    }
}

let weight = 77;    //kg
let height = 1.73;  //m
let imc = calculateImc(weight, height)

console.log(imc.toFixed(2))
console.log(classificationImc(imc))
    
