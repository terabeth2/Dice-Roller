const rollButton = document.querySelector('#roll-button')
let dieRoll = []
const numOfDice = document.querySelector('#number-of-dice')
const total = document.querySelector('#Total')
rollButton.addEventListener("click", function () {

    let numberOfRolledDice = numOfDice.value
    console.log(numberOfRolledDice)

    let dice = 0
    while (dice < numberOfRolledDice) {

        dieRoll.push(Math.floor(Math.random() * 6 + 1));
        dice += 1

    }
    console.log(dieRoll)

    // i got this from https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php

    let sum = dieRoll.reduce(function (a, b){
     
        return a + b;
    
    }, 0);
    console.log(sum) 
    total.innerHTML = "Total:" +sum
})

const showAllRolls = document.querySelector('#Show-all-Rolls')
const allRollsList = document.querySelector ('#All-Rolls')
showAllRolls.addEventListener("click", function () {
  
    for (let i=0; i < dieRoll.length; i++) {
        
        allRollsList.innerHTML += "<li class='dice'>"+ dieRoll[i] +"</li>"

      
   }
})

const resetButton = document.querySelector ("#reset-button")
resetButton.addEventListener("click", function() {
    
 numOfDice.value = ''
 allRollsList.innerHTML = ''
 total.innerHTML = ''
 dieRoll =[]
})
