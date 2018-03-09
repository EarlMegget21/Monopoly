class Plateau{
	static var current = 0
	static var cases
	static var tabjoueur


	static init(){
	cases = new Array(40);

	tabjoueur = [new Joueur("rouge", 1500),new Joueur("noir", 1500),new Joueur("orange", 1500),new Joueur("bleu", 1500)];
	//appeler function Rudy

	}

    static initDisplay(){
        var plateau=document.createElement('div');
        plateau.style.backgroundColor=red;
        for(let i=0;i<11;i++){
            let ligne=document.createElement('div');
            plateau.style.display='flex';
            plateau.style.flexDirection='horizontal';
            for(let j=0;j<11;j++){
                let col=document.createElement('div');
                plateau.style.display='flex';
                ligne.appendChild(col);
            }
        }
        document.getElementsByTagName('body')[0].appendChild(plateau);
    }
}