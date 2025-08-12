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
    playerSides: {
        player1: "player-cards",
        player1BOX: document.querySelector("#player-cards"),
        computer: "computer-cards",
        computerBOX: document.querySelector("#computer-cards"),
    },
    actions: {
        button: document.getElementById("next-duel"),
    },
}

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

    if (fieldSide === state.playerSides.player1) {

        cardImage.addEventListener("mouseover", () => {
            drawSelectCard(IdCard);
        });

        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"))
        });
    }

    return cardImage;
}

async function setCardsField(cardId) {

    // remove todas as cartas antes
    await removeAllCardsImages();

    // sorteia uma carta laeatória para o computador
    let computerCardId = await getRandomCardId();

    // muda para "display = block" os dois elementos a seguir
    state.fieldCards.player.style.display = "block"
    state.fieldCards.computer.style.display = "block"

    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    let duelResults = await checkDuelResults(cardId, computerCardId)

    await updateScore();
    await drawButton(duelResults);
}

async function drawButton(text) {
    state.actions.button.innerText = text.toUpperCase();
    state.actions.button.style.display = "block"
}

async function updateScore() {
    state.score.scoreBox.innerText = `Win : ${state.score.playerScore} | Lose : ${state.score.computerScore}`;
}

async function checkDuelResults(playerCardId, computerCardId) {

    // início da variável em estado "neutro"
    let duelResults = "DRAW"

    // variável armazena a carta do player
    let playerCard = cardData[playerCardId];

    if (playerCard.WinOf.includes(computerCardId)) {
        duelResults = "WIN";
        state.score.playerScore++;
    }

    if (playerCard.LoseOf.includes(computerCardId)) {
        duelResults = "LOSE"
        state.score.computerScore++
    }

    // o áudio será chamado a depender do resultado
    await playAudio(duelResults)

    return duelResults
}

async function removeAllCardsImages() {

    // desestruturação: os dois elementos de "state.playerSides" estão sendo pegos e salvos em variáveis locais
    let { computerBOX, player1BOX } = state.playerSides;
    let imgElements = computerBOX.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    imgElements = player1BOX.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
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

// função com oobjetivo de resetar algumas configurações para iniciar uma nova partida. Se atualizar a página, as informações de vitórias e derrotas até então serão perdidas
async function resetDuel() {
    // esvazia a carta mostrada à esquerda
    state.cardSprites.avatar.src = ""
    state.actions.button.style.display = "none"

    state.fieldCards.player.style.display = "none"
    state.fieldCards.computer.style.display = "none"

    init();
}

async function playAudio(status) {
    const audio = new Audio(`./src/assets/audios/${status}.wav`)

    try {
        audio.play()
    } catch{};
}

// Função principal que chamará outras funções e criará os estados de determinado jogo
function init() {
    drawCards(5, state.playerSides.player1);
    drawCards(5, state.playerSides.computer);
}

// primeira função que será chamada sempre. Ela chama o estado inicial do jogo
init()