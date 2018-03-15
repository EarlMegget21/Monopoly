class Prison extends Case{

    effect(joueur){
        console.log("Vous être sur la case: " + this.nom + ". Vous allez en Prison")
        //TODO déplacer le joueur à la prison
        joueur.prison = 3
    }
}