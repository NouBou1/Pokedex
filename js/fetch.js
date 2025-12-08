const base_URL = "https://pokeapi.co/api/v2/";
const img_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";
const type_URL = "https://pokeapi.co/api/v2/type/1/"
const color_URL = "https://pokeapi.co/api/v2/pokemon-color/";

let pokeList;
let dataList = [];
const limit = 20;
let offset = 0;


async function getPokemon() {
  const pokedex_URL = `${base_URL}pokemon?limit=${limit}&offset=${offset}`;

  try {
    const response = await fetch(pokedex_URL);
    if (!response.ok) {
      throw new Error(`response Not OK: ${response.status}`);
    }
    const data = await response.json();
    for (let p of data.results) {
      try {
        const pokemonRes = await fetch(p.url);
        if (!pokemonRes.ok) {
          throw new Error(`loading issue`);
        }
        const pokemonData = await pokemonRes.json();
        dataList.push(pokemonData);
      } catch (pokemonError) {
        console.error( pokemonError);
      }
    }
    offset += limit;
    return dataList;

  } catch (error) {
    console.error( error);
    return [];
  }
}

async function getNextPokemon() {
  showSpinner();
  pokeList = await getPokemon();
  renderPokeCard();
  setTimeout(() => {
    hideSpinner();

  }, 1500);
}
