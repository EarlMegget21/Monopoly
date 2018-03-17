var inc=-1;
class Chance extends Case{

    effect(joueur) {
        var deplacement = Math.floor(Math.random() * Math.floor(3)) + 1; //Déplacement compris entre 1 et 3 cases
        var alea = Math.floor(Math.random() * Math.floor(2)); //avant/arrière -> Retourne 0 ou 1
        if(alea === 0){
            Plateau.message += "\nChance! Vous reculez de " + deplacement + " cases.";   //recule
            deplacement=-deplacement;
        }else{
            Plateau.message += "\nChance! Vous avancez de " + deplacement + " cases.";
        }
        Plateau.caseEffect(joueur, deplacement);
    }

    getImage(){
        inc=(inc+1)%3;
        return "chance"+inc+".png";
    }
}