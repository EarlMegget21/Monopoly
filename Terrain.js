class Terrain extends Case{

    constructor(nom, couleur, prixAchat, loyer) {
        super(nom, couleur)
        this.valeur = valeur
        this.loyer = loyer
        this.propriétaire = null
    }

    function getValeur(){
        return this.valeur
    }

    function getLoyer(){
        return this.loyer
    }

    function getPropriétaire(){
        return this.propriétaire
    }

    function effect(joueur){
        if(this.propriétaire == null){
            this.acheterTerrain(joueur)
        }else{
            Console.log("Le joueur " + joueur.couleur + " doit " + this.loyer + "€ au joueur " +  this.propriétaire.couleur)
            joueur.argent -= this.loyer
            this.propriétaire.ajouterSous(this.loyer)
        }
    }

    function acheterTerrain(joueur){
        Console.log("Le terrain coûte " + this.valeur + "€")
        if(joueur.argent >= this.valeur) {
            Console.log("Voulez-vous l'acheter ?")
            //TODO: Faire apparaître 2 boutons "Oui" et "Non"
            if (true) {   //TODO: Remplacer "true" par le retour du clic bouton
                this.propriétaire = joueur
                joueur.retirerSous(valeur)
            }
        }else{
            Console.log("Vous ne pouvez pas l'acheter")
        }
    }
}