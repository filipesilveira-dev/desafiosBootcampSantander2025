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
    toggleTheme.classList.toggle("bi-brightness-high");
    //Faz a mesma coisa com a classe bi-moon-stars (ícone de lua). Quando uma classe é adicionada, a outra é removida, criando o efeito visual de troca de ícones.
    toggleTheme.classList.toggle("bi-moon-stars")
}

//"Escuta" o evento de clique no elemento toggleTheme. Quando o usuário clicar no botão, a função changeTheme será executada automaticamente.
toggleTheme.addEventListener("click", changeTheme);
