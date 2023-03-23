// Code your solutions in this file
let arrayNames = ['Anissa', 'Paul', 'Camila', 'Chase'];

function writeCards(array, event){
 let newArray = []
 for (let i =0; i<array.length; i++){
     newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
 }
     
     return newArray;
 }



writeCards(arrayNames, 'Birthday')
//for (let i = 0; i<10; i++){



function countDown(num){
    let i = 0;
    while(i<=10){
      console.log(num--);
      i++
    }
    return num;
   }
   
   countDown(10)