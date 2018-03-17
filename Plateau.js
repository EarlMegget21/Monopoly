class Plateau{

    /**
     * Initialise l'état du jeu (joueurs, cases, plateau)
     */
    static init(){
        Plateau.nbJoueurPerdu = 0;
        Plateau.currentPlayer = 0;
        Plateau.cases = new Array(40);
        Plateau.tabjoueur = [new Joueur("red", 1500),new Joueur("green", 1500),new Joueur("yellow", 1500),new Joueur("blue", 1500)];
        Plateau.message = "";

        for(var i=0; i < 40; i++){
            if(i === 0){
                Plateau.cases[i] = new GainPerte("", "none", "go.gif", 400)
            }else if ( i === 3 || i === 17 || i === 32){ //Caisse de Communauté
                Plateau.cases[i] = new Tresors("", "none", "caisse.gif", "")
            }else if( i === 12 || i === 28){ //Taxe
                Plateau.cases[i] = new GainPerte("", "none", "tax1.png", -150)
            }else if ( i === 38 || i === 22 || i === 7){ //Chance
                Plateau.cases[i] = new Chance("", "none", "", "")
            }else if (i === 30){//Prison
                Plateau.cases[i] = new Prison("", "none", "", "Allez\nen\nprison")
            }else if (i === 10){//Simple Visite
                Plateau.cases[i] = new Case("", "none", "visit.jpg", "Simple\nVisite")
            }else if (i === 20){//Parc Gratuit
                Plateau.cases[i] = new Case("", "none", "parc.jpg", "")
            }else if (i === 5 || i === 15 || i === 25 || i === 35){//Gare
                Plateau.cases[i] = new Terrain("", "none", "gare.gif", 200, 100)
            }else if (i<5){
                Plateau.cases[i] = new Terrain("Terrains 1", "#9e6235", "#", 100+((i+1)*20), ((i+1)*20))
            }else if (i<10){
                Plateau.cases[i] = new Terrain("Terrains 2", "#82fcff", "#", 100+((i+1)*20), ((i+1)*20))
            }else if (i<15){
                Plateau.cases[i] = new Terrain("Terrains 3", "#d972db", "#", 100+((i+1)*20), ((i+1)*20))
            }else if (i<20){
                Plateau.cases[i] = new Terrain("Terrains 4", "orange", "#", 100+((i+1)*20), ((i+1)*20))
            }else if (i<25){
                Plateau.cases[i] = new Terrain("Terrains 5", "#db7272", "#", 100+((i+1)*20), ((i+1)*20))
            }else if (i<30){
                Plateau.cases[i] = new Terrain("Terrains 6", "#dbd96b", "#", 100+((i+1)*20), ((i+1)*20))
            }else if (i<35){
                Plateau.cases[i] = new Terrain("Terrains 7", "#72db7f", "#", 100+((i+1)*20), ((i+1)*20))
            }else{
                Plateau.cases[i] = new Terrain("Terrains 8", "#8284ff", "#", 100+((i+1)*20), ((i+1)*20))
            }
        }
        Plateau.lancerScenario();
    }

    /**
     * Lance une nouvelle partie
     */
    static lancerScenario(){
        Plateau.message = "Début de la partie";
        Plateau.initDisplay();
        Plateau.currentPlayer=-1;
    }

    /**
     * Cette méthode rafraichit l'affichage du jeu, joue le rôle de Vue
     * Elle doit être lancée après chaque changement d'etat du jeu (tour)
     */
    static initDisplay(){
        document.getElementsByTagName("body")[0].innerHTML = ""; //Vide plateau

        //affichage des HUD
        var hud=document.createElement('div');
        hud.style.position="absolute";
        hud.style.top="10%";
        hud.style.left="10%";
        hud.style.height="25%";
        hud.style.width="80%";
        hud.style.display="flex";
        hud.style.justifyContent="space-around";
        hud.style.alignItems="center";
        //pour chaque joueur, on créer son HUD
        Plateau.tabjoueur.forEach(function (value) {
            var j1=document.createElement('div');
            j1.style.padding="0 10px 0 10px";
            j1.style.border=value===Plateau.tabjoueur[Plateau.currentPlayer]?"solid "+value.getCouleur():"solid transparent";
            var html="<h2>Joueur ";
            switch (value.getCouleur()){
                case "red":
                    html+="Rouge</h2>";
                    break;
                case "green":
                    html+="Vert</h2>";
                    break;
                case "yellow":
                    html+="Jaune</h2>";
                    break;
                case "blue":
                    html+="Bleu</h2>";
                    break;
                default:
                    html+="inconnu</h2>";
                    break;
            }
            html+="<p>Solde actuel: "+value.getArgent()+" €</p>";
            j1.innerHTML=html;

            hud.appendChild(j1);
        });
        //affichage des messages prompt
        var log=document.createElement('div');
        log.style.position="absolute";
        log.style.top="60%";
        log.style.left="10%";
        log.style.height="14%";
        log.style.width="80%";
        log.style.display="flex";
        log.style.justifyContent="space-around";
        log.style.alignItems="center";

        var mess=document.createElement('div');
        mess.innerText=Plateau.message;
        var b1=document.createElement('div');
        var b2=document.createElement('button');

        //créer les boutons nécessaires pour l'intéraction
        var joueur=Plateau.getJoueurToPlay();
        var actuelle=Plateau.cases[joueur.getPosition()];

        if(actuelle instanceof Terrain && actuelle.getProprietaire() == null && joueur.getArgent() >= actuelle.getValeur()){
            //si le joueur peut acheter le terrain
            b1=document.createElement('button');
            b1.innerText="Acheter";
            b1.addEventListener("click", function (e) {
                actuelle.acheterTerrain(); //Le click valide l'achat
            });
            b2.innerText="Passer";
        }else{
            b2.innerText="OK";
        }
        if(!Plateau.getJoueurToPlay().aPerdu && Plateau.nbJoueurPerdu>=3){
            b2.innerText="Rejouer";
            b2.addEventListener("click", Plateau.init);
        }else{
            b2.addEventListener("click", Plateau.jouerUnTour);
        }
        log.appendChild(mess);
        log.appendChild(b1);
        log.appendChild(b2);

        //plateau de jeu
        var plateau=document.createElement('div');
        plateau.style.display='flex';
        plateau.style.flexDirection='column';
        plateau.style.height="715px";
        plateau.style.backgroundColor='#b1ccba';
        plateau.style.backgroundImage="url(logo.png)";
        plateau.style.backgroundRepeat="no-repeat";
        plateau.style.backgroundSize="40%";
        plateau.style.backgroundPosition="center";

        for(let i=0;i<11;i++){ //pour chaque ligne
            //on la créer
            let ligne=document.createElement('div');
            ligne.style.display='flex';
            ligne.style.alignItems='stretch';
            ligne.style.height='9.1%';

            for(let j=0;j<11;j++){ //pour chaque case dans la ligne
                //on la créer
                let col=document.createElement('div');
                col.style.width='60px';
                col.style.flexGrow='1';
                col.style.border="solid";
                col.style.borderColor="transparent";
                col.style.display='flex';
                col.style.lineHeight="1em";


                if(i%10===0 || j%10===0) { //si c'est une case jouable
                    //on met le nom de la case, le prix et l'indication des pions
                    let nom=document.createElement('div');
                    nom.style.display="flex";
                    nom.style.alignItems="center";
                    nom.style.justifyContent="center";
                    nom.style.flexGrow='1';
                    nom.style.backgroundRepeat="no-repeat";
                    nom.style.backgroundSize="contain";
                    nom.style.backgroundPosition="center";

                    let prix=document.createElement('div');
                    prix.style.margin="0 5px 0 5px";
                    prix.style.display="flex";
                    prix.style.alignItems="center";
                    prix.style.justifyContent="center";

                    let pions=document.createElement('div');
                    pions.style.display='flex';
                    pions.style.flexDirection='column';
                    pions.style.height='100%';

                    col.appendChild(nom);
                    col.appendChild(prix);
                    col.appendChild(pions);

                    let indice;
                    if(i===0 || j===10){ //indice des 20 premières cases
                        indice=i+j;
                    }else{ //indice des 20 dernières
                        indice=40-(j+i);
                    }

                    let box=Plateau.cases[indice];
                    //on teste si chaque joueur est sur la case pour afficher son pion
                    Plateau.tabjoueur.forEach(function (value) {
                        if(value.getPosition()!=null && value.getPosition() === indice){
                            let p1=document.createElement('div');
                            p1.style.backgroundColor=value.getCouleur();
                            p1.style.flexGrow='1';
                            p1.style.width='9px';
                            pions.appendChild(p1);
                        }
                    });

                    //stylisation de l'affichage d'une case (bordures, couleur, image)
                    nom.style.backgroundColor=box.getCouleur();
                    nom.style.backgroundImage="url("+box.getImage()+")";
                    nom.innerHTML=box.getNom();

                    if(box instanceof Terrain === false){
                        col.style.borderColor="black";
                    }else{
                        if(box.getProprietaire() != null){
                            col.style.borderColor = box.getProprietaire().getCouleur()
                        }
                    }

                    if(box.hasOwnProperty('valeur')){
                        prix.innerText=box.getValeur();
                        if(typeof box.getValeur() === "number"){
                            prix.innerText+="€";
                        }
                    }

                }

                if(i===8 && (j===3 || j===7)){ //case des cartes (juste pour le style)
                    if(j===3){
                        col.style.backgroundImage="url(caisse.gif)"
                        col.style.backgroundRepeat="no-repeat";
                        col.style.backgroundSize="contain";
                        col.style.backgroundPosition="center";
                    }
                    if(j===7){
                        col.style.backgroundImage="url(chance0.png)"
                        col.style.backgroundRepeat="no-repeat";
                        col.style.backgroundSize="contain";
                        col.style.backgroundPosition="center";
                    }
                    col.style.border="dotted";
                }

                ligne.appendChild(col);

            } //END col

            plateau.appendChild(ligne);

        } //END ligne

        plateau.appendChild(hud);
        plateau.appendChild(log);
        document.getElementsByTagName('body')[0].appendChild(plateau);

    }

    /**
     * Lance un tour pour le joueur suivant(lancer dé, déplacer, appliquer effets de la case, choisir)
     * Met à jour l'état du jeu puis l'affichage
     */
    static jouerUnTour(){
        Plateau.currentPlayer = (Plateau.currentPlayer + 1) % 4;
        let joueur = Plateau.getJoueurToPlay(); //Get le joueur actuel
        while(Plateau.joueurAPerdu(joueur)){ //Teste si le joueur n'a pas perdu
            Plateau.currentPlayer = (Plateau.currentPlayer + 1) % 4;
            joueur = Plateau.getJoueurToPlay(); //Get le joueur actuel
        }
        if(Plateau.nbJoueurPerdu<3){ //Teste si la partie n'est pas terminée
            let peutJouer = true;
            Plateau.message = "";
            if(joueur.getPrison() > 0) { //Joueur en prison
                if (!joueur.testSortirDePrison()) { //N'arrive pas à sortir de prison
                    joueur.decPrison();
                    if (joueur.getPrison() === 0) { //On place le joueur sur la case visite
                        joueur.setPosition(10);
                        Plateau.message += "La tentative d'évasion a échoué mais vous serez libéré de prison au tour suivant.";
                    } else {
                        Plateau.message += "La tentative d'évasion a échoué.\nVotre peine se termine dans "+joueur.prison+" tours.";
                    }
                    peutJouer = false;
                    Plateau.initDisplay();
                } else { //On place le joueur sur la case visite
                    joueur.setPrison(0);
                    joueur.setPosition(10);
                    Plateau.message += "Vous vous êtes évadé de prison, vous jouez!\n";
                }
            }

            if(peutJouer){ //Joueur pas en prison ou vient d'en sortir
                let lancer = joueur.lancerDe(); //Fais le lancé de dés
                Plateau.message += "Votre lancé de dé: " + lancer;
                if ((joueur.position + lancer) > 40) { //Teste si passe case départ
                    Plateau.message += "\nVous passez par la case départ et touchez 200 €";
                    joueur.argent += 200;
                }
                Plateau.caseEffect(joueur, lancer)  //Déplacement du joueur sur case corresp et effet de la case
            }
        }else{
            Plateau.message="La partie est terminée!\nLe joueur "+joueur.getCouleur()+" a gagné et a le monopole. Félicitation à vous!";
            Plateau.initDisplay();
        }
    }

    /**
     * Cette méthode retourne le joueur qui joue son tour
     * @returns {Joueur} Le joueur qui joue le tout actuel.
     */
    static getJoueurToPlay() {
        return Plateau.tabjoueur[Plateau.currentPlayer]
    }

    /**
     * Indique si un joueur a perdu ou non
     * @param joueur Le joueur en question
     * @returns {boolean} vrai si perdu, faux sinon
     */
    static joueurAPerdu(joueur) {    //Return si le joueur a perdu ou pas
        return joueur.aPerdu
    }

    /**
     * Cette méthode déplace le joueur, applique les effets de la case et affiche le tout
     * @param joueur Le joueur en question
     * @param lancer La valeur obtenue au dé
     */
    static caseEffect(joueur, lancer) {
        //on change la position du joueur
        joueur.position = (joueur.position + lancer) % 40; //Set new position
        Plateau.cases[joueur.position].effect(joueur); //Les effets de la case sont appliqués

        Plateau.initDisplay(); //On rafraichit l'affichage
    }
}

Plateau.init();
