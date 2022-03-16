/* 
quando clicar no pokémon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1 - listagem;
2 - cartão pokémon;

- precisamos criar duas variáveis no JS para trabalhar com elemnetos da tela

- vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons;

- remover a classe aberto só do cartão que está aberto;

-clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual catão mostrar;

-remover a classe ativo que marca o pokémon selecionado;

-adicionar classe ativo no item da lista selecionado;

*/

// precisamos criar duas variáveis no JS para trabalhar com elemnetos da tela

const listatSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartaoPokemon')

listatSelecaoPokemons.forEach(pokemon => {
    // vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons;
    pokemon.addEventListener('click', () => {
        console.log(pokemon)
        // Remover a classe aberto só do cartão que está aberto;
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // Clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual catão mostrar;

        const idPokemonselecionado = pokemon.attributes.id.value
        const idDocartaoPokemonParaAbrir= 'cartao'+idPokemonselecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDocartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')
    
        // Remover a classe ativo que marca o pokémon selecionado;
        
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // Adicionar classe ativo no item da lista selecionado;

        const pokemonSelecioadoNaListagem = document.getElementById(idPokemonselecionado)
        pokemonSelecioadoNaListagem.classList.add('ativo')  
    })
})
