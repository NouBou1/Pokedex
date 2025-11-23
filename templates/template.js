
function getPokeCardTemplate(indexPokemon, pokemonImg) {
  const types = pokeList[indexPokemon].types;
  const type1 = types[0]?.type?.name;
  const type2 = types[1]?.type?.name;
  const icon1 = typeColors[type1]?.icon;
  const icon2 = typeColors[type2]?.icon
  const mainType = types[0]?.type?.name;
  const cardColor = typeColors[mainType]?.color;
  return `
    <div class="pokecard_style" id="pokecard"  style="background-color: ${cardColor};" onclick="showCardDialog('${indexPokemon}')";  tabindex="0" >
                    <div id="card_header" class="card_header">
                        <div id="card_number" class="card_number">${indexPokemon + 1}</div>
                        <div id="card_name" class="card_name">${pokeList[indexPokemon].name}</div>
                    </div>
                        <img class="card_img" src="${pokemonImg}" alt="">
                    <div id="pokemon_type" class="card_footer type-icons">
                    <div>${type1}${type2 ? " , " + type2 : ""}</div>
                     <div  class="card_footer type-icons">
        <img class="type-icon" src="${icon1}" alt="${type1}">
        ${icon2 ? `<img class="type-icon" src="${icon2}" alt="${type2}">` : ""}
      </div>
                    
                    </div>
                </div>
            </div>
`}


function getPokeCardDialogTemplate(indexPokemon, dialogImg) {
  const types = pokeList[indexPokemon].types;
  const mainType = types[0]?.type?.name;
  const cardColor = typeColors[mainType]?.color;
  const abilities = pokeList[indexPokemon].abilities;
  const ability1 = abilities[0]?.ability?.name;
  const ability2 = abilities[1]?.ability?.name;
  return `
    <div style="background-color: ${cardColor};">
      <div class="card_header">
        <div class="card_number">${pokeList[indexPokemon].id}</div>
        <div class="card_name">${pokeList[indexPokemon].name}</div>
      </div>
      <div>
        <img class="card_img" src="${dialogImg}" alt="${pokeList[indexPokemon].name}">
      </div>
      <div class="card_footer">stats</div>
      <section id="main_details">
     <table>
      <tr>
        <td>Height :</td> <td>  ${pokeList[indexPokemon].height}  dm</td>
      </tr>
      <tr>
        <td>Weight :</td>  <td>  ${pokeList[indexPokemon].weight}  kg</td>
      </tr>
      <tr>
        <td>Experience : </td> <td> ${pokeList[indexPokemon].base_experience}</td>
      </tr>
      <tr>
        <td>Abilities : </td> <td>${ability1}${ability2 ? ", " + ability2 : ""}</td>
      </tr>
      </table>

      <div  class=btn_section>
      <button>zurück</button>
      <button>vor</button>
      </div>
      </section>

    </div>
  `}



