class Joueur{

    constructor(couleur, argent){
        this.couleur = couleur;
        this.argent=argent;
        this.position = 0;
        this.prison = 0;
        this.aPerdu = false
    }

    lancerDe(){
        //TODO afficher un bouton "lancer"
        let de = Math.floor(Math.random()*10)+2;
        return de
    }

    retirerSous(valeur){
        this.argent -= valeur
        if(this.argent <= 0){
            this.argent = 0
            this.aPerdu = true
            Plateau.nbJoueurPerdu += 1
            console.log("Vous n'avez plus d'argent, vous avez perdu")
        }
    }

    ajouterSous(valeur){
        if(!this.aPerdu){
            this.argent += valeur
        }
    }

    testSortirDePrison(){
        let de1 = Math.floor(Math.random()*6)+1
        let de2 = Math.floor(Math.random()*6)+1
        console.log("Votre lancé: " + de1 + " et " + de2)
        if(de1 == de2){
            this.prison = 0
            return true
        }else{
            return false
        }
    }

    getPosition(){
        return this.position;
    }

    getCouleur(){
        return this.couleur;
    }
}
