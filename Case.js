var Case = function(node, nom, couleur){

    this.node = node
    this.nom = nom
    this.couleur = couleur

    this.getNode = function(){
        return this.node;
    }

    this.setNode = function(node){
        this.node = node;
    }

    this.getNom = function(){
        return this.nom;
    }

    this.getCouleur = function(){
        return this.couleur;
    }
}
