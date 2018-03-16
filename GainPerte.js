class GainPerte extends Case{

    effect(joueur){
        if(this.valeur < 0){
            Plateau.message += "\nVous payez vos taxes à l'état s'élevant à " + (-this.valeur) + " € ...";
            joueur.retirerSous(this.valeur * -1);
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
