document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulação de validação (adapte para seu back-end)
    if (email === "thiago@escola.com" && password === "123456") {
        alert("Login bem-sucedido!");
        window.location.href = "portal-aluno2.html"; // Altere para o link do portal do aluno
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
});
