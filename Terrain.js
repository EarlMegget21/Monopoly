class Terrain extends Case{

    constructor(nom, couleur, prixAchat, loyer) {
        super(nom, couleur)
        this.valeur = prixAchat
        this.loyer = loyer
        this.proprietaire = null
    }

    getValeur(){
        return this.valeur
    }

    getLoyer(){
        return this.loyer
    }

    getProprietaire(){
        return this.proprietaire
    }

    effect(joueur){
        if(this.proprietaire == null){
            this.acheterTerrain(joueur)
        }else{
            Console.log("Le joueur " + joueur.couleur + " doit " + this.loyer + "€ au joueur " +  this.proprietaire.couleur)
            joueur.argent -= this.loyer
            this.proprietaire.argent += this.loyer
        }
    }

    acheterTerrain(joueur){
        Console.log("Le terrain coûte " + this.valeur + "€")
        if(joueur.argent >= this.valeur) {
            Console.log("Voulez-vous l'acheter ?")
            //TODO: Faire apparaître 2 boutons "Oui" et "Non"
            if (true) {   //TODO: Remplacer "true" par le retour du clic bouton
                this.proprietaire = joueur
                joueur.argent -= this.valeur
            }
        }else{
            Console.log("Vous ne pouvez pas l'acheter")
        }
    }
}