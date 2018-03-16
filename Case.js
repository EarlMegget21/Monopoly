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
        console.log("Vous être sur la case: " + this.nom)
    }

    getImage(){
        return this.img;
    }

    getValeur(){
        return this.valeur;
    }
}
