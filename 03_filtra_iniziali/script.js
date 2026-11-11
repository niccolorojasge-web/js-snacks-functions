/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */



// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

function searchLetter(array , letter){
    const arrayNew = [];
    for (let i=0 ; i < array.length ; i++ ){
       if (array[i][0] === letter){
        arrayNew.push(array[i])}
    }
    return arrayNew
}
 const lettera = searchLetter(names , "A")
// Funzione che filtra le parole che iniziano con una lettera


// Invocazione della funzione

// Output: ["Anna", "Adele", "Alessandra"]

//1. Parole che finiscono con una lettera
//Scrivi una funzione che restituisca solo le parole che finiscono con una lettera data.

const letterLast2 = (last , letter) => {
const arrayLast2 = [];
for (let i=0 ; i < last.length ; i++ ){
     const ultima = last[i][last[i].length - 1];
    if(ultima === letter ){
        arrayLast2.push(last[i])
    }
}
return arrayLast2
}

letterLast2(names ,'a')
/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocali = 'aeiou'
 
// Dichiara la funzione qui.
const vocali2 = (parola) =>{
    //cosa cercare dentro le tonde
  if (vocali.includes(parola[i])){
   console.log(parola[i])
 
}
return counter}
 vocali2(word)
// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)


/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name5 = 'Mario';


// Dichiara la funzione qui.
const ore = (nome) =>{
    const ora = new Date().getHours();
    if (ora <= 13){
        return 'buongiorno ' + nome 
    }
    else if (ora <= 17) {
    return 'buon pomeriggio ' + nome 
    }
    else{
       return'buona sera ' + nome
    }
}

ore(name5)
// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario




// 2. Parole più lunghe di N caratteri

// Scrivi una funzione che prende:

// array di parole
// numero N

// e restituisce solo le parole con lunghezza maggiore di N.

const n = 5 ; 

const maggioredin = (arraymaggiore)=>{
const arrayPiu5 = [];
 for(let i=0; i< arraymaggiore.length ; i++){
    if(arraymaggiore[i].length > n){
        arrayPiu5.push(arraymaggiore[i])
    }
 }
 return arrayPiu5
}

maggioredin(names)
// 3. Conta parole che iniziano con vocale

// Scrivi una funzione che conta quante parole iniziano con:
// A, E, I, O, U
//variabile di stato
const startVocali = (arrayy)=>{
   const vocaliCount = 'AEIOU' 
    let contatoreVocali = 0;
    //xciclo array 
    for(let i=0; i<arrayy.length ; i++){
        
        if(vocaliCount.includes(arrayy[i][0])){
            contatoreVocali++
        }
    }
    return contatoreVocali
}

//Filtra parole palindrome

// Scrivi una funzione che restituisce solo le parole che si leggono uguali al contrario.


const palindrome = (array)=>{
    const arrayPalindome=[];
 for(let i=0;i<array.length;i++ ){
    
     const parolaReverse = array[i].split('').reverse().join('');
    if(array[i]=== parolaReverse){
     arrayPalindome.push(array[i])
    }
    
 }
 return arrayPalindome
}
palindrome(names)


//Scrivi una funzione che sostituisce tutte le lettere "a" con "*"

// "anna" → "*nn*"

const noAa = (arrayNoa)=>{
   const arraySenza = [];
for (let i=0; i<arrayNoa.length;i++){
   arraySenza.push(arrayNoa[i].replace(a/x'*'))
}
return arraySenza
}
// Scrivi una funzione che restituisce un array con:

// parola
// numero di vocali
let numero = 'aeiou'
const aeiou = (arrayyys)=>{
    
    let contatoreeee = 0
 for (let i=0; i< arrayyys.length; i++){
    if(numero.includes(arrayyys[i])){
        contatoreeee++
        
    }
 }
 return [arrayyys , contatoreeee]
}


// Prima e ultima lettera

// Restituisci:

// ["ciao", "c", "o"]

const contareee = (parola)=>{
 
  const prima = parola[0];
  const ultimaa = parola[parola.length-1]
  return [ parola ,prima, ultimaa]
 
 
}