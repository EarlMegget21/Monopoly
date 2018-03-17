class Joueur{

    constructor(couleur, argent){
        this.couleur = couleur;
        this.argent=argent;
        this.position = 0;
        this.prison = 0;
        this.aPerdu = false
    }

    lancerDe(){
        return Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1   //Décompose le lancé en 2 lancés de dés de 6 car comme ça on a plus de chance de tomber sur 7 et sur 12 par ex
    }

    retirerSous(valeur){
        this.argent -= valeur;
        if(this.argent <= 0){
            this.argent = 0;
            this.aPerdu = true;
            this.position = null;
            Plateau.nbJoueurPerdu += 1;
            Plateau.message += "\nVous n'avez plus d'argent, vous avez perdu.";
            for(var i=0; i<40; i++){
                if((Plateau.cases[i] instanceof Terrain == true) && (Plateau.cases[i].proprietaire != null) && (Plateau.cases[i].proprietaire.getCouleur() == this.getCouleur())){
                    Plateau.cases[i].proprietaire = null
                }
            }
        }
    }

    ajouterSous(valeur){
        if(!this.aPerdu){
            this.argent += valeur;
        }
    }

    testSortirDePrison(){
        let de1 = Math.floor(Math.random()*6)+1
        let de2 = Math.floor(Math.random()*6)+1
        Plateau.message = "Votre lancé de dés: " + de1 + " et " + de2 +"\n"
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

    getPrison(){
        return this.prison;
    }

    decPrison(){
        this.prison--;
    }

    setPrison(pris){
        this.prison=pris;
    }

    setPosition(pos){
        this.position=pos;
    }
}
