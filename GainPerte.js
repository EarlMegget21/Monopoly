class GainPerte extends Case{

    constructor(node, booleen){
        this.node = node
        if(booleen){    //Case Départ
            this.valeur = 200
        }else{
            this.valeur = -150
        }
    }

    effect(joueur){
        //TODO: Ajouter this.valeur à l'argent du joueur
    }
}