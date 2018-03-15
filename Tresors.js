class Tresors extends Case{

    effect(joueur){
        console.log("Vous êtes sur la case " + this.nom)
        var montant = Math.floor(Math.random() * Math.floor(2000)) - 500 //Retourne valeur entre -500 et 1500
        if(montant < 0){
            console.log("Vous perdez " + (-montant) + "€")
            joueur.retirerSous(montant * -1)
        }else{
            console.log("Vous gagnez " + montant + "€")
            joueur.ajouterSous(montant)
        }
    }
}