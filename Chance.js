var inc=-1;
class Chance extends Case{

    effect(joueur) {
        var deplacement = Math.floor(Math.random() * Math.floor(3)) + 1; //1 à 2 cases
        var alea = Math.floor(Math.random() * Math.floor(2)) - 1; //avant/arrière
        Plateau.message += "\nChance! Vous avancez de " + deplacement + " cases.";
        if(alea < 0){
            Plateau.message += "\nChance! Vous reculez de " + deplacement + " cases.";; //recule
            deplacement=-deplacement;
        }
        Plateau.caseEffect(joueur, deplacement);
    }

    getImage(){
        inc=(inc+1)%3;
        return "chance"+inc+".png";
    }
}