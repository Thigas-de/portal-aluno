// Carregamento da nova foto de perfil
document.getElementById("uploadProfilePicture").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profileImage").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Salvar alterações de configurações
document.getElementById("settingsForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulação de salvamento (adapte para seu backend)
    console.log("Alterações salvas:");
    console.log("Nome de usuário:", username);
    console.log("E-mail:", email);
    console.log("Senha:", password ? "Alterada" : "Não alterada");

    alert("Configurações salvas com sucesso!");
});
