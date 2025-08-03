// Arquivo criado para organizar os trecho de código referente à manipulação de API

// Requisição que traz a lista de pokémons
const pokeApi = {}

function convertPokeapiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    // faz uma nova requisição
    return fetch(pokemon.url)

        // converte a resposta obtida em um arquivo ".json", retornando já nesse formato
        .then((response) => response.json())
        .then(convertPokeapiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    // Requisição via HTTP: busca pela lista de pokémons. Caso receba a resposta (response), então executa o que está no ".then()"
    return fetch(url)

        // converte lista (resposta recebida) para .json
        .then((response) => response.json())

        // pega a lista dentro do arquivo json (os pokémons), mas apenas a parte de results, que é a que contém as informações desejadas (a lista de pokémons)
        .then((jsonBody) => jsonBody.results)

        // Com a lista de pokémons em mãos, eça em si não foi o suficiente. Precisava de mais detalhes. Esta linha de código transforma a lista de pokémons em uma nova lista (por meio do .map()) de promessas (fetch) de busca pelos detalhes. Um novo fetch (nova requisição) lá em "pokeApi.getPokemonDetail"
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))

        // pega a lista com as requisições de detalhes (detailRequests) recebida da linha anterior de código (já em formato .json) e espera todas as "promises" terminarem (Promise.all())
        .then((detailRequests) => Promise.all(detailRequests))

        // quando todas as requisiçoes de "pokeApi.getPokemonDetail" finalizarem, estaremos com a lista de detalhes dos pokémons em mãos ("pokemonDetails")
        .then((pokemonDetails) => pokemonDetails)

        // ação para caso dê algum erro no processo
        .catch((error) => console.error(error))
}

/* Quando várias requisições simultâneas são realizadas (uma para cada pokémon). O "Promise.All" vai trabalahar com uma lista (array) de requisições (cada requisição é um objeto dessa array). Ao final das requisições, caso tudo dê certo, o ".then()" retorna o restultado

 Promise.all([
     fetch('https://pokeapi.co/api/v2/pokemon/1'),
     fetch('https://pokeapi.co/api/v2/pokemon/2'),
     fetch('https://pokeapi.co/api/v2/pokemon/3'),
     fetch('https://pokeapi.co/api/v2/pokemon/4'),
 ]).then(results => {
     console.log(results);
 })*/