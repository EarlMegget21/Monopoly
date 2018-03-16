var inc=0;
class Chance extends Case{

    effect(joueur) {
        console.log("Vous êtes sur la case " + this.nom)
        var deplacement = Math.floor(Math.random() * Math.floor(3)) + 1
        var alea = Math.floor(Math.random() * Math.floor(2)) - 1
        if(alea < 0){
            deplacement = -deplacement
        }
        console.log("Déplacement de " + deplacement + " cases")
        Plateau.caseEffect(joueur, deplacement)
    }

    getImage(){
        inc++;
        return "chance"+inc+".png";
    }
}