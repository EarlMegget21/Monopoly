class Tresors extends Case{

    effect(joueur){
        var montant = Math.floor(Math.random() * Math.floor(1000)) - 250; //Retourne valeur entre -250 et 750
        if(montant < 0){
            Plateau.message += "\nVous payez vos impôts s'élevant à " + (-montant) + " € ...";
            joueur.retirerSous(montant * -1)
        }else{
            Plateau.message += "\nVous jouez au casino et gagnez " + montant + " € !!";
            joueur.ajouterSous(montant)
        }
    }

    getImage(){
        return "caisse.gif";
    }
}