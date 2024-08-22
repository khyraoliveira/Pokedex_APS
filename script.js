function buscar() {
    let nome = document.querySelector('#nome').value.trim();

    // Verifica se o campo de entrada está vazio
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
        document.querySelector('#pokeNome').innerHTML = dados.name;
        document.querySelector('#pokeID').innerHTML = dados.id;
        document.querySelector('#pokeImg').src = dados.sprites.front_default;
        document.querySelector('#mensagem').innerHTML = ""; // Limpa a mensagem de erro, se houver
    })
    .catch(error => {
        document.querySelector('#mensagem').innerHTML = "Tente novamente. Pokémon não encontrado.";
        console.log(error);
    });
}
