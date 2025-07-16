function sayMyName(name){
    return `Meu nome é ${name}` //se continuasse com "console.log" daria um erro
}

function verificarIdade(idade){
    if(idade < 18){
        console.log(sayMyName("Filipe") + " e eu sou menor de idade")
    } else {
        console.log(sayMyName("Filipe") + " e eu sou maior de idade")
    }
}

verificarIdade(18);
verificarIdade(17);