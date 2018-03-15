class Chance extends Case{

    function effect(joueur) {
        var numCase = Math.floor(Math.random() * Math.floor(3)) + 1
        joueur.position = numCase
    }
}