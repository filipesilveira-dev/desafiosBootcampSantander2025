/*
Descrição
O Mestre dos Magos quer um dicionário digital de feitiços. O sistema deve permitir que o usuário busque um feitiço pelo nome e receba sua descrição correspondente. Caso o feitiço não esteja no dicionário, o sistema deve informar que "Feitico nao encontrado".

Entrada
O programa receberá um único valor:

Nome do feitiço (string) a ser pesquisado.
Os valores de teste serão fixos, ou seja, o dicionário sempre conterá os mesmos feitiços pré-definidos.
O dicionário contém os seguintes feitiços e descrições:

Feitiço	Descrição
Lumus	Cria uma luz na ponta da varinha
Expelliarmus	Desarma o oponente, fazendo com que ele solte o que estiver segurando
Expecto Patronum	Invoca um Patrono, uma manifestacao mágica que afasta Dementadores
Wingardium Leviosa	Faz objetos levitarem
Alohomora	Destranca portas e objetos trancados
Saída
O programa deve exibir a descrição do feitiço caso ele esteja no dicionário.
Caso o feitiço não esteja cadastrado, exibir exatamente: Feitico nao encontrado
Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
Avada	Feitico nao encontrado
Lumus	Cria uma luz na ponta da varinha
Expecto Patronum	Invoca um Patrono, uma manifestação mágica que afasta Dementadores
Atenção: É extremamente importante que as entradas e saídas sejam exatamente iguais às descritas na descrição do desafio de código.
*/

// TODO: Implemente um dicionário de feitiços pré-definido, simule um JSON:
let list = {

    nome: ["Lumus", "Expelliarmus", "Expecto Patronum", "Wingardium Leviosa", "Alohomora"],
    descricao: ["Cria uma luz na ponta da varinha", "Desarma o oponente, fazendo com que ele solte o que estiver segurando", "Invoca um Patrono, uma manifestacao mágica que afasta Dementadores", "Faz objetos levitarem", "Destranca portas e objetos trancados"]
}

// TODO: Adicione uma função buscarFeitico, para buscar a descrição de um feitiço e retornar caso não seja encontado:
function buscarFeitico(feitico) {    
    for (let i = 0; i < list.nome.length; i++) {//programa para percorrer a chave nome
        let spell = list.nome[i]                //uma variável recebe cada valor contido na chave (5 no total)                   
        if (feitico === spell) {                //cada elemento da lista (chave nome)é comparado com aquilo que se deseja achar
            let descricao = list.descricao[i];  //uma variável "descricao" é criada para receber o valor na posição equivalente na chave "descricao" (mesmo nome da variável, mas são coisas diferentes)
            return `${descricao}`               //se achar, retorna o outro elemento na mesma posição (posição definida pelo valor do contador "let i")
        }      
    }

    return "Feitico nao encontrado" //se nada for retornado no laço de repetição, retorna esse frase
}

const feitico = "Expecto Patronum".trim(); // o trim() remove espaços extras

console.log(buscarFeitico(feitico));