class Prison extends Case{

    effect(joueur){
        Plateau.message += "\nHalte! Vous allez en prison.\nNe passez pas par la case départ, ne touchez pas 200 € !";
        Plateau.sound.pause()
        Plateau.sound = new Audio('son/sf_sifflet_07.mp3');
        Plateau.sound.play();
        joueur.prison = 3
    }

    getImage(){
        return "img/prison.gif"
    }
}