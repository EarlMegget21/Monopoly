class Plateau{


     static init(){
        Plateau.currentPlayer = 0
        Plateau.cases = new Array(40);
        Plateau.tabjoueur = [new Joueur("rouge", 1500),new Joueur("noir", 1500),new Joueur("orange", 1500),new Joueur("bleu", 1500)];

        for(var i=0; i < 40; i++){
            if(i === 0){
                Plateau.cases[i] = new GainPerte("Départ", "none",200)
            }else if ( i === 3 || i === 17 || i === 32){ //Caisse de Communauté
                Plateau.cases[i] = new Tresors("Caisse", "none")
            }else if( i === 12 || i === 28){ //Taxe
                Plateau.cases[i] = new GainPerte("Taxe", "none",-200)
            }else if ( i === 38 || i === 22 || i === 7){ //Chance
                Plateau.cases[i] = new Chance("Chance")
            }else if (i === 30){//Prison
                Plateau.cases[i] = new Prison("Allez en prison", "none")
            }else if (i === 10){//Simple Visite
                Plateau.cases[i] = new Case("Simple Visite", "none")
            }else if (i === 20){//Parc Gratuit
                Plateau.cases[i] = new Case("Parc Gratuit", "none")
            }else if (i === 5 || i === 15 || i === 25 || i === 35){//Gare
                Plateau.cases[i] = new Terrain("Gare", "grey", 200, 100)
            }else if (i<5){
                Plateau.cases[i] = new Terrain("Terrains 1", "#9e6235", 100+((i+1)*20), ((i+1)*20))
            }else if (i<10){
                Plateau.cases[i] = new Terrain("Terrains 2", "#82fcff", 100+((i+1)*20), ((i+1)*20))
            }else if (i<15){
                Plateau.cases[i] = new Terrain("Terrains 3", "#d972db", 100+((i+1)*20), ((i+1)*20))
            }else if (i<20){
                Plateau.cases[i] = new Terrain("Terrains 4", "orange", 100+((i+1)*20), ((i+1)*20))
            }else if (i<25){
                Plateau.cases[i] = new Terrain("Terrains 5", "#db7272", 100+((i+1)*20), ((i+1)*20))
            }else if (i<30){
                Plateau.cases[i] = new Terrain("Terrains 6", "#dbd96b", 100+((i+1)*20), ((i+1)*20))
            }else if (i<35){
                Plateau.cases[i] = new Terrain("Terrains 7", "#72db7f", 100+((i+1)*20), ((i+1)*20))
            }else{
                Plateau.cases[i] = new Terrain("Terrains 8", "#8284ff", 100+((i+1)*20), ((i+1)*20))
            }
        }

        Plateau.initDisplay();

    }

    static initDisplay(){

        var plateau=document.createElement('div');
        plateau.style.display='flex';
        plateau.style.flexDirection='column';
        plateau.style.height="715px";

        for(let i=0;i<11;i++){ //Lignes

            let ligne=document.createElement('div');
            ligne.style.backgroundColor='#b1ccba';
            ligne.style.display='flex';
            ligne.style.alignItems='stretch';
            ligne.style.flexGrow='1';

            for(let j=0;j<11;j++){ //cases

                let col=document.createElement('div');
                col.style.width='60px';
                col.style.flexGrow='1';
                col.style.border="solid";
                col.style.borderColor="transparent";

                if(i%10===0 || j%10===0) { //si c'est une case jouable

                    let nom=document.createElement('div');
                    let prix=document.createElement('div');
                    let pions=document.createElement('div');

                    let p1=document.createElement('div');
                    p1.style.backgroundColor='red';
                    //p1.setAttribute('id', 'p1');

                    let p2=document.createElement('div');
                    p2.style.backgroundColor='blue';
                    //p1.setAttribute('id', 'p2');

                    let p3=document.createElement('div');
                    p3.style.backgroundColor='yellow';
                    //p1.setAttribute('id', 'p3');

                    let p4=document.createElement('div');
                    p4.style.backgroundColor='green';
                    //p1.setAttribute('id', 'p4');

                    pions.appendChild(p1);
                    pions.appendChild(p2);
                    pions.appendChild(p3);
                    pions.appendChild(p4);


                    if(i===0 || j===10){//20 premières cases
                        let box=Plateau.cases[i+j];

                        if(box instanceof Terrain == false){
                            col.style.borderColor="black";
                        }

                        nom.innerText=box.getNom();

                        if(box.hasOwnProperty('valeur')){
                            prix.innerText=box.getValeur();
                        }

                        col.appendChild(nom);
                        col.appendChild(prix);
                        col.appendChild(pions);
                        col.style.backgroundColor=box.getCouleur();
                        box.setNode(col);
                    }else{ //20 dernières
                        let box=Plateau.cases[40-(j+i)];

                        if(box instanceof Terrain == false){
                            col.style.borderColor="black";
                        }

                        col.innerText=box.getNom();

                        if(box.hasOwnProperty('valeur')){
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

Plateau.init();