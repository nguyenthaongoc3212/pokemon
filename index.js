function lowerCaseName(string) {
    return string.toLowerCase();
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }//viet hoa chu cai dau
const getPokemon = () =>{
    const name = document.getElementById("pokemonName").Value;
    const pokemonName = lowerCaseName(name);
fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((Response) =>Response.json())
.then((data) => 
{
    document.querySelector(".pokemonBox").innerHTML=
    `
    <div>
       <img>
          src="${data.sprites.other["official-artwork"].front_default}"
          alt ="Pokemon name"/>
          </div>
          <div class="pokemonInfos">
          <h1>${data.name}</h1>
          <p>Can nang: ${data.weight}</p>
          </div
    `;
})
.catch((err) => {
    document.querySelector(".pokemonBox").innerHTML=
    `<h4> Khong tim thay pokemon </h4>`
})

}