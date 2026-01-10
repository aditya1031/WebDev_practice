//DICE ROLLER PROGRAM

function rollDice() {
     const numOfDice = Number(document.getElementById("numOfDice").value);
     const diceResult = document.getElementById("diceResult");
     const diceImage = document.getElementById("diceImage");

     const values = [];
     const image = [];

     for (let i = 0; i < numOfDice; i++) {
          const value = Math.floor(Math.random() * 6) + 1;
          values.push(value);
          image.push(`<img src="imgs/${value}.png" alt="Dice ${value}">`);
     }
     diceResult.textContent = `dice :-  ${values.join(', ')}`;

     diceImage.innerHTML = image.join('');
}