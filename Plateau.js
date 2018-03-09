class Plateau{
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
Plateau.initDisplay();alert('oui');