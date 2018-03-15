class Plateau{


    static init(){
        Plateau.nbJoueurPerdu = 0
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
        plateau.style.backgroundColor='#b1ccba';
        plateau.style.backgroundImage="url(logo.png)";
        plateau.style.backgroundRepeat="no-repeat";
        plateau.style.backgroundSize="40%";
        plateau.style.backgroundPosition="center";

        for(let i=0;i<11;i++){ //Lignes

            let ligne=document.createElement('div');
            ligne.style.display='flex';
            ligne.style.alignItems='stretch';
            ligne.style.flexGrow='1';

            for(let j=0;j<11;j++){ //cases

                let col=document.createElement('div');
                col.style.width='60px';
                col.style.flexGrow='1';
                col.style.border="solid";
                col.style.borderColor="transparent";
                col.style.display='flex';
                col.style.alignItems='center';

                if(i%10===0 || j%10===0) { //si c'est une case jouable

                    let nom=document.createElement('div');
                    nom.style.flexGrow='1';
                        let prix=document.createElement('div');
                    prix.style.flexGrow='1';

                    let pions=document.createElement('div');
                    pions.style.display='flex';
                    pions.style.flexDirection='column';
                    pions.style.height='100%';

                    let p1=document.createElement('div');
                    p1.style.backgroundColor='red';
                    p1.style.flexGrow='1';
                    p1.style.width='9px';

                    let p2=document.createElement('div');
                    p2.style.backgroundColor='blue';
                    p2.style.flexGrow='1';
                    p2.style.width='9px';

                    let p3=document.createElement('div');
                    p3.style.backgroundColor='yellow';
                    p3.style.flexGrow='1';
                    p3.style.width='9px';

                    let p4=document.createElement('div');
                    p4.style.backgroundColor='green';
                    p4.style.flexGrow='1';
                    p4.style.width='9px';

                    pions.appendChild(p1);
                    pions.appendChild(p2);
                    pions.appendChild(p3);
                    pions.appendChild(p4);


                    col.appendChild(nom);
                    col.appendChild(prix);
                    col.appendChild(pions);

                    let box;

                    if(i===0 || j===10){//20 premières cases
                        box=Plateau.cases[i+j];
                    }else{ //20 dernières
                        box=Plateau.cases[40-(j+i)];
                    }

                    nom.style.backgroundColor=box.getCouleur();
                    box.setNode(col);

                    nom.innerHTML="<div>"+box.getNom()+"</div>"; //TODO regler pb hauteur et images

                    if(box instanceof Terrain === false){
                        col.style.borderColor="black";
                    }

                    if(box.hasOwnProperty('valeur')){
                        prix.innerText=box.getValeur();
                    }

                }

                if(i===8 && (j===3 || j===7)){ //case des cartes
                    if(j===3){
                        col.style.backgroundImage="url(caisse.gif)"
                        col.style.backgroundRepeat="no-repeat";
                        col.style.backgroundSize="contain";
                        col.style.backgroundPosition="center";
                    }
                    if(j===7){
                        col.style.backgroundImage="url(chance.png)"
                        col.style.backgroundRepeat="no-repeat";
                        col.style.backgroundSize="contain";
                        col.style.backgroundPosition="center";
                    }
                    col.style.border="dotted";
                }

                ligne.appendChild(col);

            }

            plateau.appendChild(ligne);

        }

        document.getElementsByTagName('body')[0].appendChild(plateau);

    }

    static lancerScenario(){
        while(Plateau.nbJoueurPerdu < 3){
            Plateau.jouerUnTour()
        }
        //TODO: Endgame et afficher résultats des joueurs
    }

    static jouerUnTour(){
        let joueur = Plateau.getJoueurToPlay()  //Get le joueur actuel
        if(!Plateau.joueurAPerdu(joueur)){  //Teste si le joueur n'a pas perdu
            let peutJouer = true
            if(joueur.prison > 0){  //Joueur en prison
                if(!joueur.testSortirDePrison()){    //N'arrive pas à sortir de prison
                    joueur.prison -= 1
                    peutJouer = false
                }
            }
            if(peutJouer){ //Joueur pas en prison ou vient d'en sortir
                let lancer = joueur.lancerDe()  //Fais le lancé de dés
                if ((joueur.position + lancer) > 39) {    //Teste si passe case départ
                    joueur.argent += 200
                }
                Plateau.caseEffect(joueur, lancer)  //Déplacement du joueur sur case corresp et effet de la case
                Plateau.currentPlayer = (Plateau.currentPlayer + 1) % 4
            }
        }
    }

    static getJoueurToPlay(){
        return Plateau.tabjoueur[Plateau.currentPlayer]
    }

    static joueurAPerdu(joueur){    //Return si le joueur a perdu ou pas
        return joueur.aPerdu
    }

    static caseEffect(joueur, lancer){
        let oldPosition = joueur.position
        joueur.position = (oldPosition + lancer) % 40   //Set new position
        Plateau.majPosJoueur(joueur, oldPosition, Plateau.currentPlayer)   //MàJ visuelle du joueur sur plateau
        Plateau.cases[joueur.position].effect(joueur) //Effet du joueur
    }

    static majPosJoueur(joueur, oldPosition, indiceJoueur){
        //TODO: Rudy -> Mise à jour de la position du joueur sur le plateau (enlever le joueur de la case oldPosition et le mettre à la case joueur.position)
    }

}

Plateau.init();