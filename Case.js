class Case{

    constructor(nom, couleur, img, valeur) {
        this.nom = nom;
        this.couleur = couleur;
        this.img=img;
        this.valeur=valeur;
    }

    getNom(){
        return this.nom;
    }

    getCouleur(){
        return this.couleur;
    }

    effect(joueur){

    }

    getImage(){
        return this.img;
    }

    getValeur(){
        return this.valeur;
    }
}
