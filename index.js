// Code your solutions in this file
let arrayNames = ['Anissa', 'Paul', 'Camila', 'Chase'];



const writeCards = (array, occasion) => {
    let message = [];
    for (let i = 0; i < array.length; i++){  
        message.push(`Thank you, ${array[i]}, for the wonderful ${occasion} gift!`);
    }
    return message;
}

function countDown(num){
    while (num>=0){
      console.log(num--)
    }  
    }