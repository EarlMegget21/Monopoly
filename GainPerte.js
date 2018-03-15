class GainPerte extends Case{

    constructor(nom, couleur, valeur) {
        this.nom = nom
        this.couleur = couleur
        this.valeur = valeur
    }

    function effect(joueur){
        joueur.argent += this.valeur
    }
}
