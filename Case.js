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
        if(this.getImage() === "parc.jpg"){
            if(Plateau.cagnotte != 0) {
                Plateau.message += "\nVous récupérez la cagnotte d'une valeur de " + Plateau.cagnotte + "€ !"
                Plateau.cagnotte = 0
            }else{
                Plateau.message += "\nLa cagnotte est vide..."
            }
        }else {
            Plateau.message += "\nVous pouvez vous reposer à ce tour.";
        }
    }

    getImage(){
        return this.img;
    }

    getValeur(){
        return this.valeur;
    }
}
