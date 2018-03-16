class Case{

    constructor(nom, couleur, img) {
        this.nom = nom;
        this.couleur = couleur;
        this.img=img;
    }

    getNode(){
        return this.node;
    }

    setNode(node){
        this.node = node;
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
}
