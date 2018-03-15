var Trésors = function(nom, node, couleur){

    this.prototype = new Case(node, nom, couleur)

    this.effect = function(joueur){
        var montant = Math.floor(Math.random() * Math.floor(2000)) - 1000 //Retourne valeur entre -1000 et 1000
        joueur.argent += montant
    }
}