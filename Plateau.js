class Plateau{


     static init(){
        Plateau.currentPlayer = 0
        Plateau.cases = new Array(40);
        Plateau.tabjoueur = [new Joueur("rouge", 1500),new Joueur("noir", 1500),new Joueur("orange", 1500),new Joueur("bleu", 1500)];

        for(var i=0; i < 40; i++){
            if(i === 0){
                Plateau.cases[i] = new GainPerte("Départ","White",200)
            }else if ( i === 4 || i === 17 || i === 33){//Trésors
                Plateau.cases[i] = new Tresors("Trésor","none")
            }else if( i === 12 || i === 21 || i === 28){//Taxe
                Plateau.cases[i] = new GainPerte("Taxe","none",-200)
            }else if ( i === 38 || i === 22 || i === 7){//Chance
                Plateau.cases[i] = new Chance("Chance")
            }else if (i === 30){//Prison
                Plateau.cases[i] = new Prison("Allez en prison","none")
            }else if (i === 10){//Visit prison
                Plateau.cases[i] = new Case("Visit en Prison","none")
            }else if (i === 5 || i === 15 || i === 25 || i === 35){//Gare
                Plateau.cases[i] = new Terrain("Gare","Black",200,100)
            }else if (i<10){
                Plateau.cases[i] = new Terrain("Terrain "+(i+1),"blue",100+((i+1)*20),((i+1)*20))
            }else if (i<20){
                Plateau.cases[i] = new Terrain("Terrain "+(i+1),"orange",100+((i+1)*20),((i+1)*20))
            }else if (i<30){
                Plateau.cases[i] = new Terrain("Terrain "+(i+1),"yellow",100+((i+1)*20),((i+1)*20))
            }else{
                Plateau.cases[i] = new Terrain("Terrain "+(i+1),"red",100+((i+1)*20),((i+1)*20))
            }
        }

        //TODO: appeler function Rudy

    }

    static initDisplay(){

        var plateau=document.createElement('div');
        plateau.style.height='715px';
        plateau.style.width='715px';
        plateau.style.flexDirection='column';

        for(let i=0;i<11;i++){ //Lignes

            let ligne=document.createElement('div');
            plateau.style.display='flex';
            plateau.style.flexDirection='horizontal';
            ligne.style.backgroundColor='magenta';
            ligne.style.display='flex';
            ligne.style.alignItems='center';
            ligne.style.justifyContent='space-around';
            ligne.style.height='65px';

            for(let j=0;j<11;j++){ //Plateau.cases

                let col=document.createElement('div');
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

                    if(i+j<=20){ //20 premières Plateau.cases
                        let box=Plateau.cases[i+j];

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
                        let box=Plateau.cases[40-i];
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

Plateau.init()
Plateau.initDisplay()