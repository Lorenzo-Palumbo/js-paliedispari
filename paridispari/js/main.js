var pariDispari = prompt('Scegli pari o dispari');
var numeroScelto = parseInt(prompt('Inserire numero da 1 a 5'));
var numero = generaRandom();
console.log(numero);

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


//funzione per pari e dispari

/*
function pariDispari(val){
    if (val % 2 === 0) {
        return 'pari';
    }                     non c'è bisogno dell'else quando ci sono solo due ipotesi
    return 'dispari'
}
*/
