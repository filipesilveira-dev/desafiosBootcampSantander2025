const toggleTheme = document.getElementById("toggleTheme");
//Busca no HTML um elemento que tenha id="toggleTheme" (provavelmente um botão) e armazena na constante toggleTheme.
const rootHtml = document.documentElement;
//Captura o elemento <html> da página (a raiz do documento) e armazena em rootHtml. É aqui que o atributo do tema será controlado.

//Declara uma função chamada changeTheme que será executada quando o usuário clicar no botão.
function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
    //Lê o valor atual do atributo data-theme no elemento <html>.

    if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light"); //Se o tema atual for "dark", então muda para "light"
    } else {
        rootHtml.setAttribute("data-theme", "dark") //Senão (qualquer outro valor, incluindo "light"), muda para "dark"
    }

    //Alterna a classe bi-brightness-high no botão. Se a classe existir, remove; se não existir, adiciona.
    toggleTheme.classList.toggle("bi-sun");
    //Faz a mesma coisa com a classe bi-moon-stars (ícone de lua). Quando uma classe é adicionada, a outra é removida, criando o efeito visual de troca de ícones.
    toggleTheme.classList.toggle("bi-moon-stars")
}

//"Escuta" o evento de clique no elemento toggleTheme. Quando o usuário clicar no botão, a função changeTheme será executada automaticamente.
toggleTheme.addEventListener("click", changeTheme);


//Interatividade na seção de Cursos
const accordionHeaders = document.querySelectorAll(".accordion__header");
//variável criada para receber todos os elementos com class (".") "accordion__header". No caso se trata de um vetor, por possuir mais de um elemento.

//Para percorrer os elementos presentes no vetor "accordionHeaders", utiliza-se a função "forEach"
accordionHeaders.forEach(header => {    //para cada "header" presente na lista do vetor será adicionado um "eventListener" o qual "escutará" o evento "click". "Header" aqui assume então o papel de cada elemento da lista "accordionHeaders", ou seja de cada elemento com class = "accordion__header".
    header.addEventListener("click", () => {    //ao "escutar um click", será executada imediatamente a arrow function abaixo
        const accordionItem = header.parentElement; //salva em uma variável o elemento pai de "header"
        const accordionActive = accordionItem.classList.contains("active"); // variável que receberá a informação sobre o "accordion__item", por meio de "classList", se ele possui ou não a classe "active", ou seja verifica se o accordion está ativo ("active") ou não.

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
        //se o "accordionActive" for verdadeiro, então é para remover o "active". Se for falso, é para adicionar um "active" como classe. Na prática e nesse projeto, isso significa que quando estiver com "active" o elemento em questão terá um comportamento estabelecido em css (display: flex), se não tiver com "active", "display: none". Com o javascript, é criado o evento de, ao clicar em determinado elemento, o "status" de ativo muda, alterando o comportamento dsse elemento.
    })
})
