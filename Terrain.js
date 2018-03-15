var Terrain = function(node, nom, prixAchat, loyer, couleur){

    this.prototype = new Case(node, nom, couleur)
    this.loyer = loyer
    this.prixAchat = prixAchat
    this.propriétaire = null

    this.effect = function(joueur){
        if(this.propriétaire == null){
            this.acheterTerrain(joueur)
        }else{
            Console.log("Le joueur " + joueur.couleur + " doit " + this.loyer + "€ au joueur " +  this.propriétaire.couleur)
            joueur.argent -= this.loyer
            this.propriétaire.argent += this.loyer
        }
    }

    this.acheterTerrain = function(joueur){
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