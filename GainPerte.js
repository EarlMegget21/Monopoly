class GainPerte extends Case{

    effect(joueur){
        console.log("Vous êtes sur la case " + this.nom)
        Plateau.sound.pause()
        Plateau.sound = new Audio('Sans-titre.mp3');
        Plateau.sound.play();
        if(this.valeur < 0){
            Plateau.message += "\nVous payez vos taxes à l'état s'élevant à " + (-this.valeur) + " € ...";
            joueur.retirerSous(this.valeur * -1);
            Plateau.cagnotte += -this.valeur
        }else{
            Plateau.message += "\nVous tombez sur la case départ et touchez " + this.valeur + " € !!";
            joueur.ajouterSous(this.valeur);
        }
    }

    getValeur(){
        return this.valeur;
    }

    getImage(){
        return this.img;
    }
}
