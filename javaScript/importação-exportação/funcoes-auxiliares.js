function gets(){
    return 10;
}

function print(text){
    console.log(text);
}

//module.exports - objeto
//gets e print - atributos do objeto
//funções (gets() e print()) dentro de um objeto = método
module.exports = {gets, print} //exporta essas duas funções, por meio do objeto module.exports