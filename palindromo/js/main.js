var parolaInserita = prompt('Inserire parola');
var parolaPalindroma = invertiParola(parolaInserita);
console.log(parolaPalindroma);

if (parolaInserita == parolaPalindroma) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}

function invertiParola(parola){
    var parolaReverse = '';
    for (var i = parola.length - 1; i >= 0; i--) {
        parolaReverse += parola[i];
    }
    return parolaReverse;
}

//Altro modo per farlo

/*
var nomeInserito = prompt('Inserisci nome');
var checkPalindromo = palindromo(nomeInserito);

if (checkPalindromo) {
    console.log(nomeInserito + 'è palindromo');
} else {
    console.log(nomeInserito + 'non è palindromo');
}

function reverseString(str){
    return str.split("").reverse().join("");
}

function palindromo(stringa) {
    var nomeContrario = reverseString(stringa)
    if (stringa === nomeContrario) {
        return true;
    } else {
        return false;
    }
}
*/
