class Prison extends Case{

    effect(joueur){
        Plateau.message += "\nHalte! Vous allez en prison.\nNe passez pas par la case départ, ne touchez pas 200 € !";
        joueur.prison = 3
    }

    getImage(){
        return "prison.gif"
    }
}