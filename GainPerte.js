class GainPerte extends Case{

    constructor(nom, couleur, valeur) {
        super(nom, couleur)
        this.valeur = valeur
    }

    effect(joueur){
        joueur.argent += this.valeur
    }

    getValeur(){
        return this.valeur
    }
}
