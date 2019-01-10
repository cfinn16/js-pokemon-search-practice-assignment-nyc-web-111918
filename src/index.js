document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE
  const pokemonContainer = document.querySelector("#pokemon-container")
  const searchInput = document.querySelector("#pokemon-search-input")
  // const htmlCode =
  const displayPokemon = POKEMON.forEach(function (pokemon) {
    return pokemonContainer.innerHTML += `<div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
          <div style="width:239px;margin:auto">
            <div class="pokemon-details">
            </div>
            <div style="width:96px;margin:auto">
              <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
            </div>
          </div>
        </div>
      </div>`
  })

  searchInput.addEventListener("input", function(event){
    pokemonContainer.innerHTML = ""
    const userInput = event.target.value
    const foundPokemon = POKEMON.filter(function (pokemon) {
      return pokemon.name.includes(userInput)
    })
    foundPokemon.forEach(function (pokemon) {
      return pokemonContainer.innerHTML += `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
            <div style="width:239px;margin:auto">
              <div class="pokemon-details">
              </div>
              <div style="width:96px;margin:auto">
                <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
              </div>
            </div>
          </div>
        </div>`
    })
  })

  pokemonContainer.addEventListener("click", function(event) {
    if (event.target.dataset.action === "flip") {
      const pokemonToFlip = POKEMON.find(function (pokemon) {
        return pokemon.id === parseInt(event.target.dataset.id);
      })

      if (event.target.src === pokemonToFlip.sprites.front) {
        event.target.src = pokemonToFlip.sprites.back
      } else if (event.target.src === pokemonToFlip.sprites.back) {
        event.target.src = pokemonToFlip.sprites.front
      }
    }

  // pokemonContainer.addEventListener("click", function(event) {
  //   if (event.target.class === "pokemon-frame") {
  //     const pokemonImgTag = pokemonContainer.querySelector("flip")
  //     const pokemondetails = POKEMON.find(function (pokemon) {
  //       return pokemonImgTag.id === parseInt(event.target.dataset.id);
  //     })
  //     console.log(pokemonImgTag);
  //     const divdiv = event.target.querySelector("pokemon-details")
  //     divdiv.innerHTML = "<p>Connor</p>"
  //   }
  // })



  })



})
