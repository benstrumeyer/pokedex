// script.js

async function main() {
  const allPokemon = await fetchAllPokemon();
  console.log(allPokemon); // Array of 151 pokemon objects

  // Write your code here
}

// Make a request to the pokeApi and get data on the first 151 pokemon
async function fetchAllPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();

  const promises = data.results.map(async (p) => {
    const res = await fetch(p.url);
    const pokemon = await res.json();

    return {
      name: pokemon.name,
      id: pokemon.id,
      sprite: pokemon.sprites.front_default,
      isFavorite: false,
      canEvolve: true,
      abilities: pokemon.abilities.map(a => a.ability.name),
      hasHiddenAbility: pokemon.abilities.some(a => a.is_hidden),
      cry: pokemon.cries.latest,
      height: pokemon.height,
      weight: pokemon.weight,
      base_experience: pokemon.base_experience,
      types: pokemon.types.map(t => t.type.name)
    };
  });
  return await Promise.all(promises);
}

main();
