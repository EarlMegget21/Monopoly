class Chance extends Case{

    effect(joueur) {
        var deplacement = Math.floor(Math.random() * Math.floor(3)) + 1
        var alea = Math.floor(Math.random() * Math.floor(2)) - 1
        if(alea < 0){
            deplacement = -deplacement
        }
        Console.log("Déplacement de " + deplacement + " cases")
        //TODO: Afficher que le joueur se déplace de <déplacement> case
        Plateau.casesEffect(joueur, deplacement)
    }
}