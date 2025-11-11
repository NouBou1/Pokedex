function getPokeCardTemplate(indexPokemon, pokeList, pokemonImg) {
    return `<div class="pokecard" id="pokecard" onclick="showCardDialog()";  tabindex="0" >
                    <div id="card_header" class="card_header">
                        <div id="card_number" class="card_number">${indexPokemon + 1}</div>
                        <div id="card_name" class="card_name">${pokeList[indexPokemon].name}</div>
                    </div>
                        <img class="card_img" src="${pokemonImg}" alt="">
                    <div id="card_footer" class="card_footer">stats</div>
                </div>
            </div>
`}

function getPokeCardDialogTemplate(indexPokemonDialog, pokeList, pokemonImg){
    return `<div   >
                    <div >
                        <div>${indexPokemonDialog + 1}</div>
                        <div>${pokeList[indexPokemonDialog].name}</div>
                    </div>
                    <div>
                        <img src="${pokemonImg}" alt="">
                    </div>
                    <div>stats</div>
                </div>
            </div>
            `}

