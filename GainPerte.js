class GainPerte extends Case{

    effect(joueur){
        if(this.valeur < 0){
            Plateau.message = "Vous perdez " + (-this.valeur) + "€"
            console.log('afficher');//Plateau.afficherMessage()
            joueur.retirerSous(this.valeur * -1)
        }else{
            Plateau.message = "Vous gagnez " + this.valeur + "€"
            console.log('afficher');//Plateau.afficherMessage()
            joueur.ajouterSous(this.valeur)
        }
    }

    getValeur(){
        return this.valeur
    }

    getImage(){
        return this.img;
    }
}
