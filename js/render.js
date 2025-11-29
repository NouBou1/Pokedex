
function renderPokeCard() {
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
  pokeCardDialogRef.innerHTML = getPokeCardDialogTemplate(indexPokemon, dialogImg, pokemon);
}

function renderSearch(indexList) {
  let pokeCardRef = document.getElementById('card_section_content');
  pokeCardRef.innerHTML = "";

  for (let indexSearch = 0; indexSearch < indexList.length; indexSearch++) {
    const indexPokemon = indexList[indexSearch];
    let searchImg = dataList[indexPokemon].sprites.other.home.front_default;
    pokeCardRef.innerHTML += getPokeCardTemplate(indexPokemon, searchImg);
  }
}
