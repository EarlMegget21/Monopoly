var GainPerte = function(node, nom, couleur, boolean){

    this.prototype = new Case(node, nom, couleur)

    if(boolean){    //Case Départ
        this.valeur = 200
    }else{  //Taxe
        this.valeur = -150
    }

    this.effect = function(joueur){
        joueur.argent += this.valeur
    }
}
