var Plateau = function(){

    this.init = function(){
        this.currentPlayer = 0
        this.cases = new Array(40);
        var x = 0
        for(i=0; i < 40; i++){
            if(i == 0){
                this.cases[0] = new GainPerte(null, true, "Départ", null)
            }else if(i == 4 || i == 38){
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
                if(i%10===0 || j%10===0) { //si c'est une case jouable

                    let nom=document.createElement('p');
                    let prix=document.createElement('p');
                    let pions=document.createElement('div');
                    let p1=document.createElement('div');
                    p1.style.backgroundColor='red';
                    p1.setAttribute('id', 'p1');
                    let p2=document.createElement('div');
                    p2.style.backgroundColor='blue';
                    p1.setAttribute('id', 'p2');
                    let p3=document.createElement('div');
                    p3.style.backgroundColor='yellow';
                    p1.setAttribute('id', 'p3');
                    let p4=document.createElement('div');
                    p4.style.backgroundColor='green';
                    p1.setAttribute('id', 'p4');

                    if(i+j<=20){ //20 premières cases
                        box=this.cases[i+j];
                        nom.innerText=box.getNom();

                        if(box.hasOwnProperty('valeur')){ //tester les autres(montant, etc)
                            prix.innerText=box.getValeur();
                        }

                        col.appendChild(nom);
                        col.appendChild(prix);
                        col.appendChild(pions);
                        col.style.backgroundColor=box.getCouleur();
                        box.setNode(col);
                    }else{ //20 dernières
                        box=this.cases[40-i];
                        col.innerText=box.getNom();

                        if(box.hasOwnProperty('valeur')){ //tester les autres(montant, etc)
                            prix.innerText=box.getValeur();
                        }

                        col.appendChild(nom);
                        col.appendChild(prix);
                        col.appendChild(pions);
                        col.style.backgroundColor=box.getCouleur();
                        box.setNode(col);
                    }
                }

                if(i===8 && (j===3 || j===7)){ //cartes spéciales
                    if(j===3){
                        col.innerText="Caisse";
                    }
                    if(j===7){
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

}
var p=new Plateau();
//p.init()
p.initDisplay()
