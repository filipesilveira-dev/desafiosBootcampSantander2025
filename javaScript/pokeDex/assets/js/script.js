// Arquivo destinado ao trecho de código que envolve a manipulação de elemetnos HTML

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

// constante criada ser parâmetro apenas os 151 primeiros pokémons
const maxRecords = 151
// constante ligada ao limite de pokémons por página
const limit = 30
// variável para estipular a partir de qual quantidida de pokémons mostrados serão mostrados mais. Por exemplo, se forem mostrados 30 pokémons ao iniciar a página, com o clicar no botão de ver mais pokémons, é desejado que apareça do 31 em diante
let offset = 0;

/* Função destinada a converter os tipos de pokémon
 function convertPokemonTypesToLi(pokemonTypes) {
     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
 }*/

// Função destinada a converter a lista de pokemons da API (.json) em elemento HTML
function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
`
}

/*
 Instruções na liinha abaixo:
    1 - Foi requisitada via http a lista de pokémons (pokeApi.getPokemons())
    2 - A lista foi recebida (.then(pokemons))
    3 - Pegue a lista de pokemons ('pokemons')
    4 - Mapeie os pokémons e converta numa list de <li>, elemento HTML (.map(convertPokemonToLi))
    5 - Junte todos os <li> sem separador(.join(''))
    6 - O resultado será um elemento HTML. Concatene no arquivo.html recebido pela variável 'pokemonList' (pokemonList.innerHTML +=). Obs: o '+=' implica que será adicionado um novo elemento preservando o que foi colocado antes
 */

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

/*
Novas funcionalidades:

.map(convertPokemonToLi) = funciona como um 'for' que para cada elemento (objeto, no caso) que mapeia (passa) chama a função 'convertPokemonToLi'. Essa função retorna uma estrutura HTML com o pokemos.name do objeto. Então serão retornados tantos elementos HTML quantos objetos a lista possuir. Vantegem: código mais enxuto.

.join('') = por padrão, o .map() separa os elementos por ",". Para não seprar com nada, foi acrescida uma string vazia
*/

/* const listItems = []

 for (let i = 0; i < pokemons.length; i++) {
     const pokemon = pokemons[i];
     listItems.innerHTML += convertPokemonToLi(pokemon);
 }

console.log(listItems)*/

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNextpage = offset + limit

    if(qtdRecordsWithNextpage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})