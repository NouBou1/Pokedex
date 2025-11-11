const base_URL = "https://pokeapi.co/api/v2/";
const img_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/";
const type_URL = "https://pokeapi.co/api/v2/type/1/"
const color_URL = "https://pokeapi.co/api/v2/pokemon-color/";
const pokeList = [];

async function init() {
  const pokeList = await getPokemon();
  renderPokeCard(pokeList);
  // renderPokeCardDialog(pokeList);
  console.log(pokeList)
}
//  load mainpage
async function getPokemon() {
  let pokedex_URL = base_URL + "pokemon?limit=20&offset=0";
  let response = await fetch(pokedex_URL);
  let responseToJson = await response.json();
  console.log(responseToJson);
  return responseToJson.results;
}


function renderPokeCard(pokeList) {
  let pokeCardRef = document.getElementById('card_section_content');
  for (let indexPokemon = 0; indexPokemon < pokeList.length; indexPokemon++) {
    let pokemonImg = img_URL + (indexPokemon + 1) + ".png";
    pokeCardRef.innerHTML += getPokeCardTemplate(indexPokemon, pokeList, pokemonImg);
  }
}


// dialog

function renderPokeCardDialog(pokeList, pokemonImg) {
    let pokeCardDialogRef = document.getElementById('dialog_content');
    pokeCardDialogRef.innerHTML = "";
    
    for (let indexPokemonDialog = 0; indexPokemonDialog < pokeList.length; indexPokemonDialog++) {
        pokeCardDialogRef.innerHTML += getPokeCardDialogTemplate(indexPokemonDialog, pokeList, pokemonImg);
    }
}


function showCardDialog() {
  let cardDialogRef = document.getElementById('dialog_pokecard');

  cardDialogRef.showModal();
  renderPokeCardDialog(pokeList);

}


console.log({
  pokeListIsArray: Array.isArray(pokeList),
  pokeListLen: pokeList?.length,
  dialogExists: !!document.getElementById('dialog_pokecard'),
  contentExists: !!document.getElementById('dialog_content')
});