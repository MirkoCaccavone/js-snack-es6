// Snack 1
// Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.


// dichiarazione oggetto

const biciDaCorsa = [
    {
        'nome': 'bici#1',
        'peso': 10,
    },

    {
        'nome': 'bici#2',
        'peso': 20,
    },

    {
        'nome': 'bici#3',
        'peso': 30,
    },

    {
        'nome': 'bici#4',
        'peso': 7,
    },

    {
        'nome': 'bici#5',
        'peso': 55,
    }
];

// bisogna estrapolare la chiave peso
let pesoSingolo;
let nomeBici;
let pesoMinore = Infinity;

// non funziona se il peso più basso è il primo peso
// let pesoMinore = biciDaCorsa[0].peso;


// ciclo per trovare la chiave 'peso'
for (let key in biciDaCorsa){
    
    pesoSingolo = biciDaCorsa[key].peso;
    console.log(pesoSingolo);    

    // confronto i vari pesi
    if (pesoSingolo < pesoMinore) {

        pesoMinore = pesoSingolo;
        nomeBici = biciDaCorsa[key].nome;

    }
}

// stampare l'oggetto con il peso minore
console.log(pesoMinore, nomeBici);



 





