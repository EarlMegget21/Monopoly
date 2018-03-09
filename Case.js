class Case{
	var nom
    var node

    constructor(node,nom,couleur){
        this.node = node
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
    return nom;
    }
    
    function getCouleur(){
    return couleur;
    }
}
