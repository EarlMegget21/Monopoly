class Joueur{
var pseudo
var argent
var position
var prison

constructor(couleur, argent){
this.pseudo = couleur;
this.argent=argent;
position = 0;
prison = 0;
}

function lancerDe(){
let de1 = Math.floor(Math.random()*6)+1;
let de2 = Math.floor(Math.random()*6)+1;

if(de1 == de2){
de1+=lancerDe();
}

return de1+de2;
}


}
