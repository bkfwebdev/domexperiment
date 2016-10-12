var allHeroesRoot = document.getElementById("justiceavengers");
    var allHeroes = document.getElementById("justiceavengers").cloneNode(true);
    var DCHeroes = allHeroes.getElementsByClassName("dc");
    var MarvelHeroes = allHeroes.getElementsByClassName("marvel");
    currentCase = "All";
    document.getElementById("heroes").onclick = function() {
        while (justiceavengers.hasChildNodes()) {
            justiceavengers.removeChild(justiceavengers.childNodes[0]);
        }
        var loopHeroes = null;
        if (currentCase == 'All') {
            currentCase = 'Marvel';
            loopHeroes = MarvelHeroes;
        } else if (currentCase == 'Marvel') {
            currentCase = 'DC';
            loopHeroes = DCHeroes;
        } else if (currentCase == 'DC') {
            currentCase = 'All';
            // Problem was 'allHeroes' contains the parent '<ul>'
            loopHeroes = allHeroes.getElementsByTagName('li');
        }
        document.getElementById('listType').innerText = currentCase + ' Heroes';

        for (x=0; x<loopHeroes.length; x++) {
            allHeroesRoot.appendChild(loopHeroes[x].cloneNode(true));
        }
    }