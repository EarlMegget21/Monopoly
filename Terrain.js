class Terrain extends Case{

    constructor(nom, couleur, img, prixAchat, loyer) {
        super(nom, couleur, img)
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
        console.log("Vous êtes sur la case " + this.nom)
        if(this.proprietaire == null){
            this.acheterTerrain(joueur)
        }else{
            if(this.proprietaire === joueur) {
                console.log("Vous êtes chez vous")
            }else if (this.proprietaire.prison != 0) {
                console.log("Le joueur " + this.proprietaire.couleur + " est en prison, vous ne devez rien")
            } else {
                console.log("Le joueur " + joueur.couleur + " doit " + this.loyer + "€ au joueur " + this.proprietaire.couleur) //TODO afficher à l'écran avec un délai
                joueur.retirerSous(this.loyer)
                this.proprietaire.ajouterSous(this.loyer)
            }
        }
    }


    acheterTerrain(joueur){
        console.log("Le terrain coûte " + this.valeur + "€")
        if(joueur.argent >= this.valeur) {
            console.log("Voulez-vous l'acheter ?") //TODO afficher ça au centre de l'écran
            //TODO: Faire apparaître 2 boutons "Oui" et "Non"
            if (true) {   //TODO: Remplacer "true" par le retour du clic bouton
                console.log("Vous achetez " + this.nom)
                this.proprietaire = joueur
                joueur.argent -= this.valeur
            }
        }else{
            console.log("Vous ne pouvez pas l'acheter") //TODO afficher ça au centre de l'écran
        }
    }
}