//let price = 0;
let numParcel = "2x";

function debit(price) {
    price = price - (price * 0.1);
    console.log(`R$ ${price.toFixed(2)}`);
}

function cashPix(price) {
    price = price - (price * 0.15);
    console.log(`R$ ${price.toFixed(2)}`);
}

function parcel(price) {
    if (numParcel === "2x") {
        price = price / 2;
        console.log(`Duas parcelas de R$ ${price.toFixed(2)}`);
    } else if (numParcel === "3x") {
        price = (price + (price * 0.1)) / 3;
        console.log(`Três parcelas de R$ ${price.toFixed(2)}`);
    } else if (numParcel === "4x") {
        price = (price + (price * 0.1)) / 4;
        console.log(`Quatro parcelas de R$ ${price.toFixed(2)}`);
    } else if (numParcel === "5x") {
        price = (price + (price * 0.1)) / 5;
        console.log(`Cinco parcelas de R$ ${price.toFixed(2)}`);
    } else {
        console.log("Escolha uma forma de pagamento válida");
    }
}

debit(200);
cashPix(200);
parcel(200);

/*
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)));
}

 
*/