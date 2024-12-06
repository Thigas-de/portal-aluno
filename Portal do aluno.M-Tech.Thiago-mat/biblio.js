// Lista de livros fictícios para demonstração
const books = [
    { title: "Aprendendo HTML", author: "João Silva", category: "Web Development" },
    { title: "CSS Avançado", author: "Maria Souza", category: "Web Development" },
    { title: "JavaScript Básico", author: "Carlos Lima", category: "Programming" },
    { title: "Banco de Dados", author: "Ana Ferreira", category: "Database" },
    { title: "Design de Interfaces", author: "Pedro Gonçalves", category: "UI/UX" },
];

// Função para mostrar os livros na tela
function displayBooks(filteredBooks) {
    const results = document.getElementById("results");
    results.innerHTML = ""; // Limpa os resultados anteriores

    if (filteredBooks.length === 0) {
        results.innerHTML = "<p>Nenhum livro encontrado.</p>";
        return;
    }

    filteredBooks.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Autor: ${book.author}</p>
            <p>Categoria: ${book.category}</p>
        `;
        results.appendChild(bookCard);
    });
}

// Função para pesquisar livros
function searchBooks() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = books.filter(
        book =>
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.category.toLowerCase().includes(query)
    );

    displayBooks(filteredBooks);
}

// Evento de clique no botão de pesquisa
document.getElementById("searchBtn").addEventListener("click", searchBooks);

// Mostra todos os livros ao carregar a página
window.onload = () => {
    displayBooks(books);
};
