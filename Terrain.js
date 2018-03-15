class Terrain extends Case{

    constructor(nom, couleur, prixAchat, loyer) {
        this.nom = nom
        this.couleur = couleur
        this.prixAchat = prixAchat
        this.loyer = loyer
        this.propriétaire = null
    }

    function effect(joueur){
        if(this.propriétaire == null){
            this.acheterTerrain(joueur)
        }else{
            Console.log("Le joueur " + joueur.couleur + " doit " + this.loyer + "€ au joueur " +  this.propriétaire.couleur)
            joueur.argent -= this.loyer
            this.propriétaire.argent += this.loyer
        }
    }

    function acheterTerrain(joueur){
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