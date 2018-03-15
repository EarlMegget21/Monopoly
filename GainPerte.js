class GainPerte extends Case{

    constructor(nom, couleur, valeur) {
        super(nom, couleur)
        this.valeur = valeur
    }

    function effect(joueur){
        if(this.valeur < 0){
            joueur.retirerSous(this.valeur * -1)
        }else{
            joueur.ajouterSous(this.valeur)
        }
    }

    function getValeur(){
        return this.valeur
    }
}
