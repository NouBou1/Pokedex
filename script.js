const base_URL = "https://pokeapi.co/api/v2/";
const img_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";
const type_URL = "https://pokeapi.co/api/v2/type/1/"
const color_URL = "https://pokeapi.co/api/v2/pokemon-color/";

let pokeList;
let pokeImg;
let dataList = [];
const limit = 20;
let offset = 0;

let typeColors ={
    bug: { icon: "./assets/icons/bug.svg", color: "#A6B91A" },
    dark: { icon: "./assets/icons/dark.svg", color: "#705746" },
    dragon: { icon: "./assets/icons/dragon.svg", color: "#6F35FC" },
    electric: { icon: "./assets/icons/electric.svg", color: "#F7D02C" },
    fairy: { icon: "./assets/icons/fairy.svg", color: "#D685AD" },
    fighting: { icon: "./assets/icons/fighting.svg", color: "#C22E28" },
    fire: { icon: "./assets/icons/fire.svg", color: "#EE8130" },
    flying: { icon: "./assets/icons/flying.svg", color: "#A98FF3" },
    ghost: { icon: "./assets/icons/ghost.svg", color: "#735797" },
    grass: { icon: "./assets/icons/grass.svg", color: "#7AC74C" },
    ground: { icon: "./assets/icons/ground.svg", color: "#E2BF65" },
    ice: { icon: "./assets/icons/ice.svg", color: "#96D9D6" },
    normal: { icon: "./assets/icons/normal.svg", color: "#A8A77A" },
    poison: { icon: "./assets/icons/poison.svg", color: "#A33EA1" },
    psychic: { icon: "./assets/icons/psychic.svg", color: "#F95587" },
    rock: { icon: "./assets/icons/rock.svg", color: "#B6A136" },
    steel: { icon: "./assets/icons/steel.svg", color: "#B7B7CE" },
    water: { icon: "./assets/icons/water.svg", color: "#6390F0" },
}

async function init() {
  pokeList = await getPokemon();
  renderPokeCard();
  console.log(pokeList);
}

async function getPokemon() {
  const pokedex_URL = `${base_URL}pokemon?limit=${limit}&offset=${offset}`;

  try {
    const response = await fetch(pokedex_URL);
    if (!response.ok) {
      throw new Error(`API response Not OK: ${response.status}`);
    }
    const data = await response.json();
    for (let p of data.results) {
      try {
        const pokemonRes = await fetch(p.url);
        if (!pokemonRes.ok) {
          throw new Error(`loading issue  ${p.name}: ${pokemonRes.status}`);
        }
        const pokemonData = await pokemonRes.json();
        dataList.push(pokemonData);
      } catch (pokemonError) {
        console.error("problem Pokemon:", pokemonError);
      }
    }
    offset += limit;
    return dataList;

  } catch (error) {
    console.error("issue in getPokemon():", error);
    return [];
  }
}

async function getNextPokemon() {
    pokeList = await getPokemon();   
    renderPokeCard();
  
}

function renderPokeCard(pokemonImg) {
  let pokeCardRef = document.getElementById('card_section_content');
  pokeCardRef.innerHTML = "";
  for (let indexPokemon = 0; indexPokemon < dataList.length; indexPokemon++) {
    let pokemonImg = dataList[indexPokemon].sprites.other.home.front_default;
    pokeCardRef.innerHTML += getPokeCardTemplate(indexPokemon, pokemonImg);
  }
}

function renderPokeCardDialog(indexPokemon) {
  const pokeCardDialogRef = document.getElementById('dialog_content');
  pokeCardDialogRef.innerHTML = "";
  const pokemon = dataList[indexPokemon];
  const dialogImg = pokemon.sprites.other.home.front_default;
  pokeCardDialogRef.innerHTML = getPokeCardDialogTemplate(indexPokemon, dialogImg);
}

function showCardDialog(indexPokemon) {
  let cardDialogRef = document.getElementById('dialog_pokecard');
  cardDialogRef.showModal();
  renderPokeCardDialog(indexPokemon);
}

function searchPokemon() {
  
}