class Case{

    constructor(nom, couleur) {
        this.nom = nom
        this.couleur = couleur
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
}
