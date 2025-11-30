
function getPokeCardTemplate(indexPokemon, pokemonImg) {
  const types = pokeList[indexPokemon].types;
  const type1 = types[0]?.type?.name;
  const type2 = types[1]?.type?.name;
  const icon1 = typeColors[type1]?.icon;
  const icon2 = typeColors[type2]?.icon
  const mainType = types[0]?.type?.name;
  const cardColor = typeColors[mainType]?.color;
  return `
          <div class="pokecard_style" id="pokecard"  style="background-color: ${cardColor};"  onclick="showCardDialog(${indexPokemon})";  tabindex="0" >
              <div id="card_header" class="card_header">
                  <div id="card_number" class="card_number">${pokeList[indexPokemon].id}</div>
                  <div id="card_name" class="card_name">${pokeList[indexPokemon].name.toUpperCase()}</div>
              </div>
                  <img class="card_img" src="${pokemonImg}" alt="">
                  
              <div id="pokemon_type" class="card_footer type-icons">
              <div class="type_container">
                    <div>${type1}${type2 ? " , " + type2 : ""}</div>
                  <div  class="card_footer type-icons">
                    <img class="type-icon" src="${icon1}" alt="${type1}">
                    ${icon2 ? `<img class="type-icon" src="${icon2}" alt="${type2}">` : ""}
                  </div>
                </div>
              </div>
              </div>
          </div>
`}


function getPokeCardDialogTemplate(indexPokemon, dialogImg, pokemon) {
  const types = pokeList[indexPokemon].types;
  const mainType = types[0]?.type?.name;
  const cardColor = typeColors[mainType]?.color;
  const shinyImg = pokemon?.sprites?.other?.dream_world.front_default;
  const abilities = pokeList[indexPokemon].abilities;
  const ability1 = abilities[0]?.ability?.name;
  const ability2 = abilities[1]?.ability?.name;

  const stats = getStats(pokeList[indexPokemon].stats);


  return `
    <div class="card_bg" style="background-color: ${cardColor};">
      <div class="card_header">
        <div class="card_number">${pokeList[indexPokemon].id}</div>
        <div class="card_name">${pokeList[indexPokemon].name.toUpperCase()}</div>
        <button id="close_dialog_btn" onclick="closeCardDialog()">X</button>
      </div>

      <div class="img_container">
        <img class="card_img" src="${dialogImg}" alt="${pokeList[indexPokemon].name}">
      </div>

    
      <div class="card_tabs">
        <button class="tab_btn active" onclick="switchDialogTab('main', this)">Main</button>
        <button class="tab_btn" onclick="switchDialogTab('stats', this)">Stats</button>
        <button class="tab_btn" onclick="switchDialogTab('shiny', this)">Cartoon</button>
      </div>

      
      <section id="dialog_tab_main" class="dialog_tab active">
        <table>
          <tr>
            <td>Height :</td> <td>${pokeList[indexPokemon].height} dm</td>
          </tr>
          <tr>
            <td>Weight :</td> <td>${pokeList[indexPokemon].weight} kg</td>
          </tr>
          <tr>
            <td>Experience :</td> <td>${pokeList[indexPokemon].base_experience}</td>
          </tr>
          <tr>
            <td>Abilities :</td>
            <td>${ability1}${ability2 ? ", " + ability2 : ""}</td>
          </tr>
        </table>
      </section>

      <section id="dialog_tab_stats" class="dialog_tab">
        ${stats}
      </section>

     
      <section id="dialog_tab_shiny" class="dialog_tab shiny_tab" >
        <img class="card_img" style="height: 200px;" src="${shinyImg}" alt="${pokeList[indexPokemon].name} shiny">
      </section>

      <div class="btn_section">
      
        <button class="btn_arrows" onclick="showCardDialog(${indexPokemon - 1})"><img src="./assets/icons/btn-icon/arrow-left-solid-full.svg" alt=""></button>
        <button class="btn_arrows" onclick="showCardDialog(${indexPokemon + 1})"><img src="./assets/icons/btn-icon/arrow-right-solid-full.svg" alt=""></button>
      </div>
    </div>
    
  `;
}

function getStatTemplate(indexStats, stats) {
  const statName = stats[indexStats].stat.name;
  const base = stats[indexStats].base_stat;
  let width = base;
  if (base > 100) {
    width = 100;
  }

  const color = statColors[indexStats % statColors.length];

  return `
      <div>${statName.toUpperCase()}: ${base}</div>
      <div class="w3-light-grey" style="border-radius:12px;">
        <div style="border-radius:12px; height:18px;width:${width}%;background:${color}"></div>
      </div>
    `
}


