// Code your solutions in this file

function writeCards(names, eventName) {
    const thankYouMessages = [];
    
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
    
    return thankYouMessages;
  }
  
  function countDown(startingNumber) {
    let count = startingNumber;
    
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  const thankYouMessages = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
  console.log(thankYouMessages);
  
  countDown(10);