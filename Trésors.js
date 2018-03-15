class Trésors extends Case{

    function effect(joueur){
        var montant = Math.floor(Math.random() * Math.floor(2000)) - 1000 //Retourne valeur entre -1000 et 1000
        if(montant < 0){
            joueur.retirerSous(montant * -1)
        }else{
            joueur.ajouterSous(montant)
        }
    }
}