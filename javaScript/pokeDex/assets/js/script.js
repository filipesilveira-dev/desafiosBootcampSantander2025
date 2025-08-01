// Arquivo destinado ao trecho de código que envolve a manipulação de elemetnos HTML

// Função destinada a converter a lista de pokemons da API (.json) em elemento HTML
function convertPokemonToLi(pokemon) {
    return `
	<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
<img src="/javaScript/pokeDex/assets/images/bulbasaur-seeklogo.png" alt="${pokemon.name}">
                </div>
            </li>
`
}

const pokemonList = document.getElementById('pokemonList')

/*
 Instruções na liinha abaixo:
    1 - Foi requisitada via http a lista de pokémons (pokeApi.getPokemons())
    2 - A lista foi recebida (.then(pokemons))
    3 - Pegue a lista de pokemons ('pokemons')
    4 - Mapeie os pokémons e converta numa list de <li>, elemento HTML (.map(convertPokemonToLi))
    5 - Junte todos os <li> sem separador(.join(''))
    6 - O resultado será um elemento HTML. Concatene no arquivo.html recebido pela variável 'pokemonList' (pokemonList.innerHTML +=). Obs: o '+=' implica que será adicionado um novo elemento preservando o que foi colocado antes
 */

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})

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
