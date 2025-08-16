// Lê a força do dragão e converte para inteiro
const forca = parseInt(45);

// Lê o elemento do dragão
const elemento = "Raio";

// Definição dos prefixos baseados no elemento 
const prefixos = {
    "Fogo": ["Pyro", "Drak"],
    "Gelo": ["Frost", "Glacius"],
    "Raio": ["Volt", "Storm"],
    "Terra": ["Geo", "Titan"]
};

// TODO: Determine o prefixo e sufixo:


function selecionarPrefixo(forca, elemento) {
    if (forca < 50) {
        const prefixo = prefixoMenor(forca, elemento)
        return prefixo
    } else if (forca >= 50) {
        const prefixo = prefixoMaior(forca, elemento)
        return prefixo
    }
}

//console.log(selecionarPrefixo(forca,elemento))

function prefixoMenor(forca, elemento) {
    if (forca < 50 && elemento === "Fogo") {
        return prefixos["Fogo"][0]
    } else if (forca < 50 && elemento === "Gelo") {
        return prefixos["Gelo"][0]
    } else if (forca < 50 && elemento === "Raio") {
        return prefixos["Raio"][0]
    } else if (forca < 50 && elemento === "Terra") {
        return prefixos["Terra"][0]
    }
}

function prefixoMaior(forca, elemento) {
    if (forca >= 50 && elemento === "Fogo") {
        return prefixos["Fogo"][1]
    } else if (forca >= 50 && elemento === "Gelo") {
        return prefixos["Gelo"][1]
    } else if (forca >= 50 && elemento === "Raio") {
        return prefixos["Raio"][1]
    } else if (forca >= 50 && elemento === "Terra") {
        return prefixos["Terra"][1]
    }
}

function sufixoDragao(forca) {
    if (forca < 50) {
        return "thor"
    }
    if (forca >= 50) {
        return "zar"
    }
}
//TODO: Exiba o nome do dragão

function mostrarNome(){
    console.log(selecionarPrefixo(forca, elemento) + sufixoDragao(forca))
}

mostrarNome()

// function nomeDragao(prefixoDragao,sufixoDragao){
//   return `${prefixoDragao}${sufixoDragao}`
// }

//}

