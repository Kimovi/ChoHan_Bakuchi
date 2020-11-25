let dice0, dice1, score, evenOdd;
// maximum number for dice is 6
let diceDOM0 = document.querySelector('.dice0');
let diceDOM1 = document.querySelector('.dice1');
// User select Even/Odd from drop down box
// User click 'Roll dice' button
// Roll dice function => when roll button clicked, two dices will roll (dice0, dice1)
// Check the winner 
// Give the score to the winner

document.querySelector(".btn-roll").addEventListener('click', function rollDice(){
    dice0 = Math.floor(Math.random() * 6) + 1;
    dice1 = Math.floor(Math.random() * 6) + 1;
    console.log(dice0,dice1)

    diceDOM0.src = 'dice'+ dice0+'.png';    
    diceDOM1.src = 'dice'+ dice1+'.png';

    score = dice0 + dice1;
    if(score % 2 === 0 && evenOdd == 2) {
        console.log('You are right ')
    } else { 
        console.log('You are wrong ');
    }
    
});

document.querySelector(".even").addEventListener('click', evenOdd = 2);
document.querySelector(".odd").addEventListener('click', evenOdd =1);
    // check dice total
    // compare User input and dice total 
    // If User guessed dice total number correctly => User wins the game 


document.querySelector(".btn-new").addEventListener('click', function reSet(){
    //If user clicks 'new game' then reset score 
});