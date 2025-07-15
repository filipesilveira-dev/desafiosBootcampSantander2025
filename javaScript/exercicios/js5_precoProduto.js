let price = 100;
let payment = "5x";

if (payment === "debt") {
    price = price - (price * 0.1);
    console.log(`R$ ${price.toFixed(2)}`);
} else if (payment === "pix" || payment === "cash") {
    price = price - (price * 0.15);
    console.log(`R$ ${price.toFixed(2)}`);
} else if (payment === "2x") {
    price = price / 2;
    console.log(`Duas parcelas de R$ ${price.toFixed(2)}`);
} else if (payment === "3x") {
    price = (price + (price * 0.1)) / 3;
    console.log(`Três parcelas de R$ ${price.toFixed(2)}`);
} else if (payment === "4x") {
    price = (price + (price * 0.1)) / 4;
    console.log(`Quatro parcelas de R$ ${price.toFixed(2)}`);
}else if (payment === "5x") {
    price = (price + (price * 0.1)) / 5;
    console.log(`Cinco parcelas de R$ ${price.toFixed(2)}`);
}else {
    console.log("Escolha uma forma de pagamento válida");
}