function Plateau(){

    this.init = function(){
        this.currentPlayer = 0
        this.cases = new Array(40);
        var x = 0
        for(i=0; i <= 40; i++){
            if(i == 0){
                this.cases[0] = new GainPerte(null, true, "Départ", null)
            }else if(i == 4 || i == 39){
                this.cases[i] = new GainPerte(null, false, "Taxe", null)
            }else{
                this.cases[i] = new Terrain(null,200,50, "UneCouleur")
            }
        }
        this.tabjoueur = [new Joueur("rouge", 1500),new Joueur("noir", 1500),new Joueur("orange", 1500),new Joueur("bleu", 1500)];
        //appeler function Rudy

    }

    this.initDisplay = function() {

        var plateau=document.createElement('div');
        plateau.style.height='715px';
        plateau.style.width='715px';
        plateau.style.flexDirection='column';

        for(i=0;i<11;i++){ //Lignes

            ligne=document.createElement('div');
            plateau.style.display='flex';
            plateau.style.flexDirection='horizontal';
            ligne.style.backgroundColor='magenta';
            ligne.style.display='flex';
            ligne.style.alignItems='center';
            ligne.style.justifyContent='space-around';
            ligne.style.height='65px';

            for(j=0;j<11;j++){ //Cases

                col=document.createElement('div');
                plateau.style.display='flex';
                col.style.width='60px';
                col.style.height='60px';
                if(i%10==0 || j%10==0) { //si c'est une case jouable

                    if(i+j>13){
                        box=this.cases[i+j];
                        col.innerText=box.getNom();
                        col.style.backgroundColor=box.getCouleur();
                        box.setNode(col);
                    }
                    //// ajouter pour la moitié des cases restantes et ajouter couleurs joueurs puis gérer affichage des évènements
                }

                if(i==8 && (j==3 || j==7)){ //cartes spéciales
                    if(j==3){
                        col.innerText="Caisse";
                    }
                    if(j==7){
                        col.innerText="Chance";
                    }
                    col.style.border="dotted";
                }


                ligne.appendChild(col);

            }

            plateau.appendChild(ligne);

        }

        document.getElementsByTagName('body')[0].appendChild(plateau);

    }

    this.init()
    this.initDisplay()
}