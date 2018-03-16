var inc=-1;
class Chance extends Case{

    effect(joueur) {
        var deplacement = Math.floor(Math.random() * Math.floor(3)) + 1
        var alea = Math.floor(Math.random() * Math.floor(2)) - 1
        if(alea < 0){
            deplacement = -deplacement
        }
        Plateau.message = "Déplacement de " + deplacement + " cases"
        console.log('afficher');//Plateau.afficherMessage()
        Plateau.caseEffect(joueur, deplacement)
    }

    getImage(){
        inc=(inc+1)%3;
        return "chance"+inc+".png";
    }
}