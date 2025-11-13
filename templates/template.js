function getPokeCardTemplate(indexPokemon, pokemonImg, indexPokemonDialog) {
    return `<div class="pokecard_style" id="pokecard" onclick="showCardDialog('${indexPokemon}')";  tabindex="0" >
                    <div id="card_header" class="card_header">
                        <div id="card_number" class="card_number">${indexPokemon + 1}</div>
                        <div id="card_name" class="card_name">${pokeList[indexPokemon].name}</div>
                    </div>
                        <img class="card_img" src="${pokemonImg}" alt="">
                    <div id="card_footer" class="card_footer">stats</div>
                </div>
            </div>
`}

function getPokeCardDialogTemplate(indexPokemon, pokemonImg){
    return `<div class="pokecard_style"   >
                    <div class="card_header">
                        <div class="card_number">${indexPokemon}</div>
                        <div class="card_name">${pokeList[indexPokemon].name}</div>
                    </div>
                    <div>
                        <img class="card_img" src="${img_URL + (indexPokemon + 1) + ".png"}" alt="">
                    </div>
                    <div> 
                    <div class="card_footer">stats</div>
                </div>
                <ul>
                <li>       </li>
                <li>       </li>
                <li>       </li>
                </ul>
                </div>
            `}

