class Terrain extends Case{

    constructor(node, prixAchat, loyer, couleur){
        this.node = node
        this.prixAchat = prixAchat
        this.loyer = loyer
        this.couleur = couleur
        this.propriétaire = null
        this.nom = nom
        this.couleur = couleur
    }

    effect(joueur){
        if(this.propriétaire == null){
            acheterTerrain(joueur)
        }else{
            Console.log("Le joueur " + joueur.couleur + " doit " + this.loyer + "€ au joueur " +  this.propriétaire.couleur)
            joueur.argent -= this.loyer
            this.propriétaire.argent += this.loyer
        }
    }

    acheterTerrain(joueur){
        Console.log("Le terrain coûte " + this.prixAchat + "€")
        if(joueur.argent >= this.prixAchat) {
            Console.log("Voulez-vous l'acheter ?")
            //TODO: Faire apparaître 2 boutons "Oui" et "Non"
            if (true) {   //TODO: Remplacer "true" par le retour du clic bouton
                this.propriétaire = joueur
                joueur.argent -= this.prixAchat
            }
        }else{
            Console.log("Vous ne pouvez pas l'acheter")
        }
    }
}