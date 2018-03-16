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
        Plateau.message +="\nVous pouvez vous reposer à ce tour.";
    }

    getImage(){
        return this.img;
    }

    getValeur(){
        return this.valeur;
    }
}
