/*
Descrição
O Mestre dos Magos tem uma loja de itens mágicos e precisa de um sistema para verificar o estoque antes de vender um item.  O programa deve receber o nome do item, a quantidade disponível no estoque e a quantidade solicitada pelo cliente.

🛠️ Requisitos Técnicos
✅ Criar uma função chamada verificarEstoque() que recebe três parâmetros:

nomeItem (string)
quantidadeDisponivel (inteiro)
quantidadeSolicitada (inteiro)
A função deve retornar uma string com a mensagem correspondente.
✅ O programa deve garantir que os valores informados para quantidade sejam números inteiros válidos. Caso contrário, deve exibir "Erro: Quantidades devem ser numeros inteiros."

Entrada
O programa recebe três entradas:

Nome do item (string) → Nome do item mágico que o cliente deseja comprar.
Quantidade disponível (inteiro) → Número de unidades disponíveis no estoque.
Quantidade solicitada (inteiro) → Número de unidades que o cliente deseja comprar.
💡 Observação:

Caso o usuário forneça um valor inválido para a quantidade (exemplo: uma palavra ao invés de um número), o programa deve exibir uma mensagem de erro.
Saída
Após processar os dados, o programa deve imprimir uma única mensagem, que pode ser:

"Pedido realizado" → Se houver estoque suficiente.
"Estoque insuficiente" → Se não houver estoque suficiente.
"Erro: Quantidades devem ser numeros inteiros." → Se o usuário inserir valores inválidos para as quantidades.
Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
Pocao de Cura
10
5

Pedido realizado
Bola de Cristal
3
5

Estoque insuficiente
Varinha Magica
sete
3

Erro: Quantidades devem ser numeros inteiros

Atenção: É extremamente importante que as entradas e saídas sejam exatamente iguais às descritas na descrição do desafio de código.
*/

// Lendo as entradas do usuário
let nomeItem = "Pocao de Cura";
let quantidadeDisponivel = parseInt(10);
let quantidadeSolicitada = parseInt(5);

// TODO: Implemente aqui uma função verificarEstoque() que recebe três parâmetros 
function verificarEstoque(nomeItem, quantidadeDisponivel, quantidadeSolicitada){
    if (isNaN(quantidadeDisponivel) || isNaN(quantidadeSolicitada)) {
        return "Erro: Quantidades devem ser numeros inteiros";
    } else if (quantidadeDisponivel >= quantidadeSolicitada) {
        return "Pedido realizado";
    } else {
        return "Estoque insuficiente";
    } 
}

// TODO: Chame a função e imprima o resultado:
console.log(verificarEstoque("Pocao de Cura", 10, 5))