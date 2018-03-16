class Joueur{

    constructor(couleur, argent){
        this.couleur = couleur;
        this.argent=argent;
        this.position = 0;
        this.prison = 0;
        this.aPerdu = false
    }

    lancerDe(){
        let de = Math.floor(Math.random()*10)+2;
        return de
    }

    retirerSous(valeur){
        this.argent -= valeur
        if(this.argent <= 0){
            this.argent = 0
            this.aPerdu = true
            this.position = null
            Plateau.nbJoueurPerdu += 1
            for(let i=0;i<40;i++){
                let proprioCase = Plateau.cases[i].proprietaire
                if(proprioCase != null){
                    if(proprioCase.couleur = this.couleur){
                        Plateau.cases[i].proprietaire = null
                    }
                }
            }
            Plateau.message = "Vous n'avez plus d'argent, vous avez perdu"
            console.log('afficher');//Plateau.afficherMessage()
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
        Plateau.message = "Votre lancé: " + de1 + " et " + de2
        console.log('afficher');//Plateau.afficherMessage()
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

    getArgent(){
        return this.argent;
    }
}
