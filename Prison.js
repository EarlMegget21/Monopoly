class Prison extends Case{

    effect(joueur){
        Plateau.message = "Vous allez en prison"
        console.log('afficher');//Plateau.afficherMessage()
        joueur.prison = 3
    }

    getImage(){
        return "prison.gif"
    }
}