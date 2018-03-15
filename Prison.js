class Prison extends Case{

    effect(joueur){
        console.log("Vous être sur la case: " + this.nom + ". Vous allez en Prison")
        joueur.prison = 3
    }
}