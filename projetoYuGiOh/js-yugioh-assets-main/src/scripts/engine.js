// objeto de objetos
const state = {
    score: {
        // pontuação inicial do player
        playerScore: 0,

        // pontuação inicial do computador
        computerScore: 0,

        // elemento HTML onde os scores serão manipulados
        scoreBox: document.getElementById("score_points")
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    actions: {
        button: document.getElementById("next-duel"),
    },
}

const playerSides = {
    player1: "player-cards",
    computer: "computer-cards",
};

// constante criada para facilitar a concatenação do caminho para as imagens das cartas
const pathImages = "./src/assets/icons/"
// enumerar: listar algo de forma que seja possível resgatar de maneira fácilou dar sentido para algo que inicialmente não tem sentido. Foi criado o vetor "cardData" para isso
const cardData = [

    // objeto da carta "paper"
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        WinOf: [1],
        LoseOf: [2],
    },

    // objeto da carta "rock"
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        WinOf: [2],
        LoseOf: [0],
    },

    // objeto da carta "scissors"
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        WinOf: [0],
        LoseOf: [1],
    },
];

// função com o objetivo de servir um "id" aleatório
async function getRandomCardId() {
    // um número aleatório, arredondado para baixo (Math.floor), será gerado dentro do intervalo de 0 a "cardData.length"
    const randomIndex = Math.floor(Math.random() * cardData.length)
    return cardData[randomIndex].id;
}

// função que, para ser executada, precisa do "id" da carta e do lado que em que ela será colocada. Cria um elemento <img> com os atributos e classe especificados
async function createCardImage(IdCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");

    if (fieldSide === playerSides.player1) {

        cardImage.addEventListener("mouseover", () => {
        drawSelectCard(IdCard);
        });

        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"))
        });
    }

    

    return cardImage;
}

async function drawSelectCard(index) {
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Attribute : " + cardData[index].type;
}

// função para distribuir cartas no início
async function drawCards(cardNumbers, fieldSide) {
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

// Função principal que chamará outras funções e criará os estados de determinado jogo
function init() {
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
}

// primeira função que será chamada sempre. Ela chama o estado inicial do jogo
init()