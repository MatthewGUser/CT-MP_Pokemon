// Custom JavaScript for interacting with the PokeAPI
function fetchPokemon() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${input}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const pokemonDetails = `
        <h3>${data.name.toUpperCase()}</h3>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p><strong>Types:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
        <p><strong>Abilities:</strong> ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
        <p><strong>Height:</strong> ${data.height} decimetres</p>
        <p><strong>Weight:</strong> ${data.weight} hectograms</p>
      `;
      document.getElementById('pokemon-details').innerHTML = pokemonDetails;
    })
    .catch(error => {
      document.getElementById('pokemon-details').innerHTML = '<p>No Pokémon found.</p>';
    });
}
