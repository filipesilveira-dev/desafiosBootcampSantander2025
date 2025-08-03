// Arquivo criado para organizar os trecho de código referente à manipulação de API

// Requisição que traz a lista de pokémons
const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    // faz uma nova requisição
    return fetch(pokemon.url)

        // converte a resposta obtida em um arquivo ".json"
        .then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    // busca pela lista de pokémons. Caso receba, então executa o que está no ".then()"
    return fetch(url)

        // converte lista para .json
        .then((response) => response.json())

        // pega a lista dentro do arquivo json (os pokémons), mas apenas a parte de results, que é a que contém as onformações desejadas
        .then((jsonBody) => jsonBody.results)

        // transforma a lista de pokémons em uma nova lista (por meio do .map()) de promessas (fetch) de busca pelo detalhe. Um novo fetch (nova requisição) lá em "pokeApi.getPokemonDetail"
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))

        // pega a lista com as requisições de detalhes (detailRequests) e espera todas as "promises" terminarem
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