class Case{

    constructor(nom, couleur) {
        this.nom = nom
        this.couleur = couleur
    }

    function getNode(){
        return this.node;
    }

   function setNode(node){
        this.node = node;
    }

    function getNom(){
        return this.nom;
    }

    function getCouleur(){
        return this.couleur;
    }

    function effect(joueur){
        //Do Nothing
    }
}
