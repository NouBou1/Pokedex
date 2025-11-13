const base_URL = "https://pokeapi.co/api/v2/";
const img_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";
const type_URL = "https://pokeapi.co/api/v2/type/1/"
const color_URL = "https://pokeapi.co/api/v2/pokemon-color/";
let pokeList;
let pokeImg;
let dataList = [];
let imgList = [];



async function init() {
  pokeList = await getPokemon();

  renderPokeCard(pokeList);
  // renderPokeCardDialog(pokeList);
  console.log(pokeList);
}

//  load mainpage
// async function getPokemon() {
//   let pokedex_URL = base_URL + "pokemon?limit=20&offset=0";
//   let response = await fetch(pokedex_URL);
//   let responseToJson = await response.json();
//   console.log(responseToJson);
//   return responseToJson.results;
// }

// async function getPokemon() {
//   const pokedex_URL = base_URL + "pokemon?limit=20&offset=0";
//   const response = await fetch(pokedex_URL);
//   const data = await response.json();

//   for (let p of data.results) {
//     const pokemonRes = await fetch(p.url);
//     const pokemonData = await pokemonRes.json();
//     dataList.push(pokemonData);
//   }

//   return dataList;
// }


// async function getPokemonImg() {
//   const img_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/";
//   const responseImg = await fetch(img_URL + (indexPokemon +1) + ".png");
//   const img = await responseImg.json();

//   for (const pic of img.results) {
//     const pokemonImgRes = await fetch(pic.url);
//     const pokemonImgData = await pokemonImgRes.json();
//     pokemonImgData.push(imgList);
//   }
//   // console.log(imgList)
//   return imgList;
// }


async function getPokemon(indexPokemon) {
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


function renderPokeCard(pokemonImg, indexPokemon) {
  let pokeCardRef = document.getElementById('card_section_content');
  for (let indexPokemon = 0; indexPokemon < dataList.length; indexPokemon++) {
    let pokemonImg = dataList[indexPokemon].sprites.other.home.front_default
    pokeCardRef.innerHTML += getPokeCardTemplate(indexPokemon, pokemonImg);
  }
  console.log(pokemonImg)
}

// img_URL + (indexPokemon + 1) + ".png";

// dialog
function renderPokeCardDialog(pokemonImg) {
  let pokeCardDialogRef = document.getElementById('dialog_content');
  pokeCardDialogRef.innerHTML = "";

  for (let indexPokemonDialog = 0; indexPokemonDialog < dataList.length; indexPokemonDialog++) {
    pokeCardDialogRef.innerHTML += getPokeCardDialogTemplate(indexPokemonDialog, pokemonImg);
  }
}



function showCardDialog(indexPokemon) {
  let cardDialogRef = document.getElementById('dialog_pokecard');
  cardDialogRef.showModal();
  renderPokeCardDialog(indexPokemon);
}

console.log({

  pokeListIsArray: Array.isArray(dataList),
  pokeListLen: dataList?.length,
 

});

