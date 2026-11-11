/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function saluto (nome){
    return `ciao ${nome}`
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(userName))

//Risultato atteso se si passa 'Mario': // ciao Mario


/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
//creo array da pushare
initialArray =[];
// Dichiara la funzione qui.
function initials (array){
    for (let i =0 ; i < array.length ; i++){
       initialArray.push(array[i][0])
    }
    return initialArray
}

// Invoca la funzione qui e stampa il risultato in console

console.log(initials(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


    /* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

    const names2 = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


    // creo un altro array 

    const letter = [];

    // Dichiara la funzione qui.
    function letterIni (array , lettera){
    for (let i = 0 ; i < array.length ; i++){
        //condizione che fa pushare la lettera invocata 
        if(array[i][0]=== lettera.toUpperCase()){
            letter.push(array[i])
        }
    }
    return letter
    }

    // Invoca la funzione qui e stampa il risultato in console
    console.log(letterIni(names2 , 'a'))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';




// Dichiara la funzione qui. faccio la funzione

const countVocal = (stringa) => {
    let count = 0
    const vocal = 'aeiou';

    for (let i = 0 ; i < stringa.length ; i++){
        if(vocal.includes(stringa[i])){
            count ++ 
        }
    }
    return count 
}




// Invoca la funzione qui e stampa il risultato in console

console.log(countVocal(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)


/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.