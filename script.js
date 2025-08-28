document.getElementById("btnLogin").addEventListener("click", function () {
    let usuario = document.getElementById("usuario").value.trim();
    let senha = document.getElementById("senha").value.trim();

    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // valida credenciais fixas
    if (usuario === "dvf@gmail.com" && senha === "1234") {
        alert("Login com sucesso!");
        window.location.href = "https://www.dvfvirtual.com.br/"; 
    } else {
        alert("Usuário ou senha incorretos!");
    }
});
