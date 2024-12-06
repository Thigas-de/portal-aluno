// scripts.js

// Notificação ao baixar documentos
document.addEventListener('DOMContentLoaded', () => {
    const downloadLinks = document.querySelectorAll('.btn');

    downloadLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita o comportamento padrão de redirecionar imediatamente
            const documentName = event.target.closest('.document-item').querySelector('h3').textContent;

            // Exibe uma mensagem de notificação
            alert(`Você está prestes a baixar: ${documentName}`);

            // Redireciona para o download após confirmação
            setTimeout(() => {
                window.location.href = link.href;
            }, 500); // Pequeno atraso para mostrar a notificação
        });
    });
});

// Destaque na navegação
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            navLinks.forEach(nav => nav.classList.remove('active')); // Remove o destaque de todos
            event.target.classList.add('active'); // Adiciona o destaque ao link clicado
        });
    });
});
