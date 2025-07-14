let fuelPrice = 5.79;      // BRL/L
let perfomance = 10;    // Km/L
let distance = 100;     // Km

let totalPrice = (distance / perfomance) * fuelPrice

console.log (`O gasto total da viagem foi de R$ ${totalPrice.toFixed(2)} reais.`)