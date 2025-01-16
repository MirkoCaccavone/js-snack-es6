// traccia
// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti,
//  un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori compresi tra i due numeri.

let numeri = [];

// ciclo per inserire dei numeri da 1 a 100 nella variabile
for (let i = 1; i <= 100; i++){
    numeri.push(i);
}

console.log(numeri);


// funzione con array e due numeri
function numbersInTheMiddle (array, a, b){

    // se a e maggiore di b invertiamo i numeri
    if (a > b){
        [a, b] = [b, a];
    }

    // ci ritorna gli elementi nell'array solo se rispetta i nostri parametri
    return array.filter(element => element > a && element < b);
};

console.log(numbersInTheMiddle(numeri, 30, 10));

