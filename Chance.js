class Chance extends Case{

    effect(joueur) {
        var numCase = Math.floor(Math.random() * Math.floor(41))
        joueur.position = numCase
    }
}