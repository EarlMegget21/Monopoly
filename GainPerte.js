class GainPerte extends Case{

    constructor(nom, couleur, img, valeur) {
        super(nom, couleur, img)
        this.valeur = valeur
    }

    effect(joueur){
        console.log("Vous êtes sur la case " + this.nom)
        if(this.valeur < 0){
            console.log("Vous perdez " + (-this.valeur) + "€")
            joueur.retirerSous(this.valeur * -1)
        }else{
            console.log("Vous gagnez " + this.valeur + "€")
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
