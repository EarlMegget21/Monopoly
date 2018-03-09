class Terrain extends Case{

    constructor(node, prixAchat, loyer, couleur){
        this.node = node
        this.prixAchat = prixAchat
        this.loyer = loyer
        this.couleur = couleur
        this.propriétaire = null
    }
}