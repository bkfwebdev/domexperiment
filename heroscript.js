console.log("script is running");
var allHeroesRoot = document.getElementById("justiceavengers");
var allHeroes = document.getElementById("justiceavengers").cloneNode(true);
var DCHeroes = allHeroes.getElementsByClassName("dc");
var MarvelHeroes = allHeroes.getElementsByClassName("marvel");
currentCase = "all" 
document.getElementById("heroes").onclick = function()
{
while (justiceavengers.hasChildNodes()) {justiceavengers.removeChild(justiceavengers.childNodes[0]);}
for (x=0; x <= (allHeroes.length-1); x++){allHeroesRoot.appendChild(MarvelHeroes[x]);}
}
