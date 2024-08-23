function buscar() {
    let nome = document.querySelector('#nome').value.trim();

    // Faz a verificação se o campo de entrada está vazio mesmo
    if (nome === "") {
        document.querySelector('#mensagem').innerHTML = "Digite um nome de Pokémon.";
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Pokémon não encontrado");
        }
        return response.json();
    })
    .then(dados => {
        document.querySelector('#pkmName').innerHTML = "Nome: " + dados.name.charAt(0).toUpperCase() + dados.name.slice(1);
        document.querySelector('#pkmId').innerHTML = "ID: " + dados.id;
        document.querySelector('#pkmImg').src = dados.sprites.front_default;
        document.querySelector('#mensagem').innerHTML = ""; // Limpa a mensagem de erro, se tiver né kakaka
    })
    .catch(error => {
        document.querySelector('#mensagem').innerHTML = "Tente novamente. Pokémon não encontrado.";
        console.log(error);
    });
}
