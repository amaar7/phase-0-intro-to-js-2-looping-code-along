// Code your solutions in this file
function writeCards(names, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const eventName = "birthday";
  const thankYouMessages = writeCards(names, eventName);
  
  console.log(thankYouMessages);
  
  function countDown(startingNumber) {
    let i = startingNumber;
  
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  
  countDown(10); // Call the function to count down from 10
  