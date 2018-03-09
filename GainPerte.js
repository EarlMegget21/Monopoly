class GainPerte extends Case{

    constructor(node, booleen, nom, couleur){
        this.node = node
        if(booleen){    //Case Départ
            this.valeur = 200
        }else{
            this.valeur = -150
        }
        this.couleur=couleur
    }

    effect(joueur){
        //TODO: Ajouter this.valeur à l'argent du joueur
    }
}
