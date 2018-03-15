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
            this.aPerdu = true;
        }
    }

    ajouterSous(valeur){
        if(!aPerdu){
            this.argent += valeur
        }
    }

    testSortirDePrison(){
        let de1 = Math.floor(Math.random()*6)+1
        let de2 = Math.floor(Math.random()*6)+1
        if(de1 == de2){
            this.prison = 0
            return true
        }else{
            return false
        }
    }
}
