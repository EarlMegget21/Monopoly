var Joueur = function(couleur, argent){

    this.couleur = couleur;
    this.argent=argent;
    this.position = 0;
    this.prison = 0;

    this.lancerDe = function(){
        let de1 = Math.floor(Math.random()*6)+1;
        let de2 = Math.floor(Math.random()*6)+1;
        if(de1 == de2){
            de1+=lancerDe();
        }
        return de1+de2;
    }
}
