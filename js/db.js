const base_URL = "https://pokeapi.co/api/v2/";
const img_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";
const type_URL = "https://pokeapi.co/api/v2/type/1/"
const color_URL = "https://pokeapi.co/api/v2/pokemon-color/";

let pokeList;
let pokeImg;
let dataList = [];
const limit = 20;
let offset = 0;

let typeColors = {
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

const statColors = [
  "#4CAF50", 
  "#F44336",
  "#2196F3", 
  "#FFC107", 
  "#00BCD4",
  "#9C27B0"  
];
