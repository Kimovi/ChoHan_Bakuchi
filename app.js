let dice0, dice1, score, evenOdd;
let userMoney = [0,0];
let diceDOM0 = document.querySelector('.dice0');
let diceDOM1 = document.querySelector('.dice1');
document.querySelector(".even").addEventListener('click', ()=>{evenOdd = 2});
document.querySelector(".odd").addEventListener('click', ()=>{evenOdd = 1});

document.querySelector(".btn-roll").addEventListener('click', function rollDice(){
    if(evenOdd === undefined){
        alert("you need to decide even or odd")
    }else{
    dice0 = Math.floor(Math.random() * 6) + 1;
    dice1 = Math.floor(Math.random() * 6) + 1;
    console.log(dice0,dice1)

    diceDOM0.src = 'dice'+ dice0+'.png';    
    diceDOM1.src = 'dice'+ dice1+'.png';

    score = dice0 + dice1;
    if(score % 2 === 0 && evenOdd == 2) {
        alert('You are right +100円')
        userMoney[1] += 100;
        let x = document.getElementById("score-1");
        x.innerHTML = userMoney[1];
    } else if(score % 2 === 1 && evenOdd == 1) {
        alert('You are right +100円')
        userMoney[1] += 100;
        let x = document.getElementById("score-1");
        x.innerHTML = userMoney[1];
    }else { 
        alert('You are wrong +100円 for player1');
        userMoney[0] += 100;
        let y = document.getElementById("score-0");
        y.innerHTML = userMoney[0];
    }
    
    endGame();
    }
    
});

function endGame (){
    if(userMoney[0] == 1000 || userMoney[1] == 1000) {
        alert('Game over')
        window.location.reload(true)
    }
    // const button = document.querySelector('button')
    // button.disabled = true
}


