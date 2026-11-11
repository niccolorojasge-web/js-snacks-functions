/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui. i==1

function initial (){
const arrayFinal = [];
    for (let i = 0 ; i < names.length ; i++){
       const firsLetter = names [i][0]
       arrayFinal.push(firsLetter)

    }
    return arrayFinal
}
// define new array for the first letters []


// return out the new array with initials



// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

//Trasforma ogni iniziale in maiuscolo (anche se il nome è minuscolo)
9
function nameMaiuscola (arrayInitial){
        const arrayFinal = []
     for (let i = 0; i < arrayInitial.length ; i++){
        
       const maiuscol = arrayInitial[i].charAt(0).toUpperCase()+arrayInitial[i].slice(1)
        arrayFinal.push(maiuscol)
        
     }
     return arrayFinal;
}

result = nameMaiuscola(names)



    //3. Ultima lettera
    //Prendi l’ultima lettera di ogni parola

    const lastLetter = (lastLetterArray)=>{
    const letterArray = [];
    for(let i = 0 ; i < lastLetterArray.length ; i++){
        const ultima = lastLetterArray[i][lastLetterArray[i].length -1]
        letterArray.push(ultima)
    }
    return letterArray
    }

    lastLetter(names)

    //controllare se nomi iniziano con A 

    const aisInitial = (arrayAis) =>{
      const initialA = [];
      for(let i = 0 ; i < arrayAis.length ; i++){
        if (arrayAis[i][0] === "A"){
         initialA.push(arrayAis[i])
        }
      }
      return initialA
    }