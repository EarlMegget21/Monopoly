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
        if(this.proprietaire == null){
            //this.acheterTerrain(joueur)
            Plateau.message+="Voulez-vous acheter le terrain ?";
        }else{
            if(this.proprietaire === joueur) {
                Plateau.message += "Vous êtes chez vous"

            }else if (this.proprietaire.prison != 0) {
                Plateau.message += "Le joueur " + this.proprietaire.couleur + " est en prison, vous ne devez rien";

            } else {
                Plateau.message += "Le joueur " + joueur.couleur + " doit " + this.loyer + "€ au joueur " + this.proprietaire.couleur;

                joueur.retirerSous(this.loyer)
                this.proprietaire.ajouterSous(this.loyer)
            }
        }
    }

    acheterTerrain(){
        var joueur=Plateau.getJoueurToPlay();
        if(joueur.argent >= this.valeur) {
            Plateau.message="Le terrain coûte " + this.valeur + "€. Voulez-vous l'acheter ?"
            //console.log('afficher');//Plateau.afficherMessage()

                this.proprietaire = joueur
                joueur.argent -= this.valeur

        }else{
            Plateau.message = "Le terrain coûte " + this.valeur + "€. Vous ne pouvez pas l'acheter"
        }
        Plateau.initDisplay();
    }
}