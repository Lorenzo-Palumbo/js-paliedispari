var pariDispari = prompt('Scegli pari o dispari');
var numeroScelto = prompt('Inserire numero da 1 a 5');
var numero = generaRandom();

if (pariDispari !== 'pari' || !== 'dispari') {
    console.log('Inserire pari o dispari');
} else {

var numeriSommati = numeroScelto + numero;
if (numeriSommati % 2 == 0 && pariDispari == 'pari') {
    console.log('Hai vinto!');
} else if (numeriSommati % 2 !== 0 && pariDispari == 'dispari') {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}

function generaRandom() {
    var numeroRandom = Math.floor((Math.random() * 5) + 1);
    return numeroRandom;
}
}
