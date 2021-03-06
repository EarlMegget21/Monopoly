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

    getProprietaire(){
        return this.proprietaire
    }

    effect(joueur){ //affichage à l'arrivée sur un terrain
        if(this.proprietaire == null){
            if (joueur.getArgent() >= this.valeur) {
                Plateau.message += "\nVoulez-vous acheter le terrain ?";
            } else {
                Plateau.message += "\nVous n'avez pas assez d'argent pour acheter ce terrain.";
            }
        }else{
            if(this.proprietaire === joueur) {
                Plateau.message += "\nVous êtes chez vous";

            }else if (this.proprietaire.getPrison() !== 0) {
                Plateau.message += "\nLe joueur " + this.proprietaire.getCouleur() + " est en prison, vous ne devez rien.";

            } else {
                if(this.getImage() === "img/gare.gif"){
                    Plateau.message += "\nVous avez payé votre loyer de " + this.loyer * this.proprietaire.nbGares+ "€ au joueur " + this.proprietaire.getCouleur()+".";
                    joueur.retirerSous(this.loyer * this.proprietaire.nbGares);
                    this.proprietaire.ajouterSous(this.loyer * this.proprietaire.nbGares);
                }else {
                    Plateau.message += "\nVous avez payé votre loyer de " + this.loyer + "€ au joueur " + this.proprietaire.getCouleur() + ".";
                    joueur.retirerSous(this.loyer);
                    this.proprietaire.ajouterSous(this.loyer);
                }
            }
        }
    }

    acheterTerrain(){ //listener du bouton "acheter"
        var joueur=Plateau.getJoueurToPlay();
        Plateau.sound.pause()
        Plateau.sound = new Audio('son/SFB-caisse2.mp3');
        Plateau.sound.play();
        Plateau.message="L'achat a bien été clôturé.\nVous compte a été débité de "+this.valeur+" €";
        this.proprietaire = joueur;
        joueur.argent -= this.valeur;
        if(Plateau.cases[joueur.position].getImage() === "img/gare.gif"){
            joueur.nbGares += 1
        }
        Plateau.initDisplay(); //met à jour l'affichage pour confirmer l'achat
    }
}