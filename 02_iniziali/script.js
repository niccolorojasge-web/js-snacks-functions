/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui. i==1
function get1letter (nameList){

// define new array for the first letters []
const array1letter =[];

for (let i=0 ; i < nameList.length; i++){
    console.log(nameList[i])
    const firstLetter = nameList[i].charAt(0)
    console.log(firstLetter);

    // add inital char to a new array
    array1letter.push(firstLetter)
}

// return out the new array with initials
return array1letter
}

// Invoca la funzione qui e stampa il risultato in console
get1letter(names)

console.log(get1letter(names))
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]