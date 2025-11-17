const base_URL = "https://pokeapi.co/api/v2/";
const img_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";
const type_URL = "https://pokeapi.co/api/v2/type/1/"
const color_URL = "https://pokeapi.co/api/v2/pokemon-color/";
let pokeList;
let pokeImg;
let dataList = [];
let pokemonType = dataList[indexPokemon].types.;



async function init() {
  pokeList = await getPokemon();
  renderPokeCard(pokeList);
  console.log(pokeList);
  getPokeTypes(indexPokemon);
}

async function getPokemon() {
  const pokedex_URL = base_URL + "pokemon?limit=20&offset=0";
  const response = await fetch(pokedex_URL);
  const data = await response.json();

  for (let p of data.results) {
    console.log("P =", p)
    const pokemonRes = await fetch(p.url);
    const pokemonData = await pokemonRes.json();
    dataList.push(pokemonData);
    console.log("DETAIL:", dataList)
  }
  return dataList;
}


function renderPokeCard(pokemonImg) {
  let pokeCardRef = document.getElementById('card_section_content');
  for (let indexPokemon = 0; indexPokemon < dataList.length; indexPokemon++) {
    let pokemonImg = dataList[indexPokemon].sprites.other.home.front_default;
    pokeCardRef.innerHTML += getPokeCardTemplate(indexPokemon, pokemonImg);
  }
  console.log(pokemonImg)
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



console.log(indexPokemon)