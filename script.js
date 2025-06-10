// script.js

async function main() {
  // Challenge 1: Combine two strings
  const first = "Poke";
  const second = "mon";
  console.log("Challenge 1: Combine two strings");

  // Challenge 2: Use a template string to make a sentence
  const name = "Pikachu";
  console.log("Challenge 2: Use a template string to make a sentence");

  // Challenge 3: Use string methods (toUpperCase)
  const nameUpper = "bulbasaur";
  console.log("Challenge 3: Use string methods (toUpperCase)");

  // Challenge 4: Create an array with the items "Bulbasaur", "Squirtle", and "Charmander"
  console.log("Challenge 4: Create a simple array");

  // Challenge 5: Using that array, use the array notation to access "Charmander"
  const starters2 = ["Bulbasaur", "Charmander", "Squirtle"];
  console.log("Challenge 5: Access an element in an array");

  // Challenge 6: Add a new Pokémon to the array
  const starters3 = ["Bulbasaur", "Charmander", "Squirtle"];
  console.log("Challenge 6: Add a new Pokémon to the array");

  // Challenge 7: Remove the last pokemon from the array
  console.log("Challenge 7: Use .push and .pop with arrays");

  // Challenge 8: Use a for loop to print names
  const team = ["Bulbasaur", "Charmander", "Squirtle"];
  console.log("Challenge 8: Use a for loop to print all of the pokemon names in the team");

  // Challenge 9: Now do it with a for...of loop
  const wildPokemon = ["Pidgey", "Rattata", "Zubat"];
  console.log("Challenge 9: Use a for...of loop");

  // Challenge 10: Create an object for Pikachu with name, type, and base experience
  console.log("Challenge 10: Object with basic stats");

  // Challenge 11: Access object properties using the dot notation
  const pikachu2 = {
    name: "Pikachu",
    type: "electric",
    base_experience: 112
  };
  console.log("Challenge 11: Access object properties");

  // Challenge 12: Use dot notation to update a property
  const pikachu3 = {
    name: "Pikachu",
    isFavorite: false
  };
  console.log("Challenge 12: Use dot notation to update isFavorite to true");

  // From here on, you will have access to the allPokemon, which is an array of 151 pokemon objects
  const allPokemon = await fetchAllPokemon();
  console.log(allPokemon); 

  // Challenge 13: Loop through allPokemon and print names
  console.log("Challenge 13: Loop through allPokemon and print names");

  // Challenge 14: Filter allPokemon that have a weight of 300 or higher
  console.log("Challenge 14: Filter allPokemon that have a weight of 300 or higher");

  // Challenge 15: Use the array .find method to find a Pokémon by name in allPokemon and return the full pokemon object
  console.log("Challenge 15: Use the array .find method to find a Pokémon by name in allPokemon and return the full pokemon object");

  // Challenge 16: Create a new array of allPokemon using .map, outputting an array containing the base experience for each pokemon
  console.log("Challenge 16: Create a new array of allPokemon using .map, outputting an array containing the base experience for each pokemon.");

  // Challenge 17: Use reduce to sum total base experience of allPokemon
  console.log("Challenge 17: Use reduce to sum total base experience of allPokemon");

  // Challenge 18: Sort allPokemon by weight ascending
  console.log("Challenge 18: Sort allPokemon by weight ascending");

  // Challenge 19: Find the heaviest Pokémon
  console.log("Challenge 19: Find the heaviest Pokémon");

  // Challenge 20: Count the total number of abilities across all Pokémon
  console.log("Challenge 20: Count the total number of abilities across all Pokémon");

  // Challenge 21: Create a list of all unique abilities from allPokemon
  console.log("Challenge 21: Create a list of all unique abilities from allPokemon");

  // Challenge 22: Make a list of all pokémon whose name starts with the letter 'b'
  console.log("Challenge 22: Find Pokémon whose name starts with the letter 'b'");

  // Challenge 23: Declare variables using let, const, and var, and explain the differences
  console.log("Challenge 23: Declare variables with let, const, and var");

  // Challenge 24: Use typeof to check the data types of different variables
  console.log("Challenge 24: Use typeof to check variable types");

  // Challenge 25: Use logical operators (&&, ||) to filter Pokémon that are both electric type and have base experience > 100
  console.log("Challenge 25: Use logical operators");

  // Challenge 26: Use a while loop to print the first 10 Pokémon names
  console.log("Challenge 26: Use a while loop");

  // Challenge 27: Loop through an object’s properties using for...in
  console.log("Challenge 27: Loop through object properties using for...in");
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
      abilities: pokemon.abilities.map(a => a.ability.name),
      hasHiddenAbility: pokemon.abilities.some(a => a.is_hidden),
      cry: pokemon.cries?.latest,
      height: pokemon.height,
      weight: pokemon.weight,
      base_experience: pokemon.base_experience,
      types: pokemon.types.map(t => t.type.name)
    };
  });
  return await Promise.all(promises);
}

main();
