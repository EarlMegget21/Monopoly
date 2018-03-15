class GainPerte extends Case{

    constructor(nom, couleur, valeur) {
        super(nom, couleur)
        this.valeur = valeur
    }

    function effect(joueur){
        joueur.argent += this.valeur
    }

    function getValeur(){
        return this.valeur
    }
}
