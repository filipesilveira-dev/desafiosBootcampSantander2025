let etanolPrice = 5.10;      // BRL/L
let gasPrice = 5.80;      // BRL/L
let typeOfFuel = "etanol";
let perfomance = 10;    // Km/L
let distance = 100;     // Km

if(typeOfFuel === "gas"){
    let totalPrice = (distance / perfomance) * gasPrice
    console.log (`O gasto total da viagem foi de R$ ${totalPrice.toFixed(2)} reais.`)
} else if (typeOfFuel === "etanol"){
    perfomance = 8;
    let totalPrice = (distance / perfomance) * etanolPrice
    console.log (`O gasto total da viagem foi de R$ ${totalPrice.toFixed(2)} reais.`)
} else{
    console.log("Digite um tipo válido de combustível.")
}


