// Snack2
// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreCalcio = [

    { nome: 'Squadra 1', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Squadra 2', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Squadra 3', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Squadra 4', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Squadra 5', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Squadra 6', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Squadra 7', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Squadra 8', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Squadra 9', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Squadra 10', puntiFatti: 0, falliSubiti: 0 }
];

// settiamo array vuoto 
let nuovoArray = [];

for( let key in squadreCalcio){

    // aggiungiamo un numero random alle chiavi puntiFatti e falliSubiti
    squadreCalcio[key].puntiFatti = randomNumber(1, 50);
    squadreCalcio[key].falliSubiti = randomNumber(1, 50);

    // settiamo una variabile solo con le chiavi nome e falliSubiti
    let nomeEFalli = [squadreCalcio[key].nome, squadreCalcio[key].falliSubiti];
    
    // aggiungiamo la variabile all array vuoto
    nuovoArray.push(nomeEFalli);
    
}
console.log(squadreCalcio);
console.log(nuovoArray);


// funzione per numeri casuali
function randomNumber(min,max){
    let numeroCasuale = (Math.floor(Math.random() * (max - min + 1)) + min);
    return numeroCasuale;
}