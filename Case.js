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
}
