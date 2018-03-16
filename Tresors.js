class Tresors extends Case{

    effect(joueur){
        var montant = Math.floor(Math.random() * Math.floor(1000)) - 250 //Retourne valeur entre -250 et 750
        if(montant < 0){
            Plateau.message = "Vous perdez " + (-montant) + "€"
            console.log('afficher');//Plateau.afficherMessage()
            joueur.retirerSous(montant * -1)
        }else{
            Plateau.message = "Vous gagnez " + montant + "€"
            console.log('afficher');//Plateau.afficherMessage()
            joueur.ajouterSous(montant)
        }
    }

    getImage(){
        return "caisse.gif";
    }
}