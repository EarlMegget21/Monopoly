function Chance(nom, node){

    this.case = new Case(node, nom, null)

    this.effect = function(joueur) {
        var numCase = Math.floor(Math.random() * Math.floor(41))
        joueur.position = numCase
    }
}