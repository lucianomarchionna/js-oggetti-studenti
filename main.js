// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
let studente = {
    nome : "Luciano",
    cognome : "Marchionna",
    eta : 20
};
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(let key in studente){
    console.log(key + " : " + studente[key]);
}
// Creare un array di oggetti di studenti.
let studenti = [
    {
        nome : "Mario",
        cognome : "Draghi",
        eta : 30
    },
    {
        nome : "Giorgio",
        cognome : "Bianchi",
        eta : 23
    },
    {
        nome : "Francesco",
        cognome : "Pizzulli",
        eta : 24
    },
    {
        nome : "Chiara",
        cognome : "Bitetti",
        eta : 19
    },
    {
        nome : "Sofia",
        cognome : "Esposito",
        eta : 28
    },
];
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.