function getPokeCardTemplate(indexPokemon, pokemonImg, pokemonType) {
    return `
    <div class="pokecard_style" id="pokecard" onclick="showCardDialog('${indexPokemon}')";  tabindex="0" >
                    <div id="card_header" class="card_header">
                        <div id="card_number" class="card_number">${indexPokemon + 1}</div>
                        <div id="card_name" class="card_name">${pokeList[indexPokemon].name}</div>
                    </div>
                        <img class="card_img" src="${pokemonImg}" alt="">
                    <div id="pokemon_type" class="card_footer">${pokemonType}</div>
                    <div> </div>
                </div>
            </div>
`}


function getPokeCardDialogTemplate(indexPokemon, dialogImg) {
  return `
    <div>
      <div class="card_header">
        <div class="card_number">${indexPokemon + 1}</div>
        <div class="card_name">${pokeList[indexPokemon].name}</div>
      </div>
      <div>
        <img class="card_img" src="${dialogImg}" alt="${pokeList[indexPokemon].name}">
      </div>
      <div class="card_footer">stats</div>
      <ul>
        <li>       </li>
        <li>       </li>
        <li>       </li>
      </ul>
    </div>
  `}