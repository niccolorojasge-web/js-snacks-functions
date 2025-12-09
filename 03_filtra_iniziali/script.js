/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */



// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Funzione che filtra le parole che iniziano con una lettera
function searchNamesByLetter(array, letter) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][0].toLowerCase() === letter.toLowerCase()) {
            result.push(array[i]);
        }
    }
    return result;
}

// Invocazione della funzione
const namesA = searchNamesByLetter(names, "A");
console.log(namesA); 
// Output: ["Anna", "Adele", "Alessandra"]
