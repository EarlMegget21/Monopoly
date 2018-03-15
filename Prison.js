var Prison = function(node, nom, couleur){

    this.prototype = new Case(node, nom, couleur)

    this.effect = function(joueur){
        joueur.prison = 3
    }
}