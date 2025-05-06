const userScoreElement = document.querySelector('#user-score')
const botScoreElement = document.querySelector('#bot-score')
const choicesBox = document.querySelector('#choices')
const resultText = document.querySelector('#result-text')
const resetBtn = document.getElementById('reset-btn')
userScoreElement.innerText = "0"
botScoreElement.innerText = "0"

const botChoices = ['R', 'P', 'S']

function choiceGenerator() {
    let rndIndex = Math.floor(Math.random() * botChoices.length)
    let botChoice = botChoices[rndIndex]
    return botChoice
}

function checkZeroZero(){
    if(userScoreElement.innerText != 0 || botScoreElement.innerText != 0){
        resetBtn.style.display = "block"
    }
}

choicesBox.addEventListener('click', e => {
    let userScore = Number(userScoreElement.innerText)
    let botScore = Number(botScoreElement.innerText)
    if (e.target.classList.contains("user-choice")) {
        if(e.target.id === "rock"){
            let botChoice = choiceGenerator()
            if(botChoice === 'R'){
                resultText.innerText = "No winner this time, you both choose rock."
                resultText.style.color = "gray"
            }
            else if(botChoice === 'P'){
                resultText.innerText = "Oof! BOT's paper covered your rock."
                resultText.style.color = "red"
                botScore++
                botScoreElement.innerText = botScore
                checkZeroZero()
            }
            else if(botChoice === 'S'){
                resultText.innerText = "Nice! Your rock smashed BOT's scissors."
                resultText.style.color = "green"
                userScore++
                userScoreElement.innerText = userScore
                checkZeroZero()
            }
        }
        else if(e.target.id === "paper"){
            let botChoice = choiceGenerator()
            if(botChoice === 'R'){
                resultText.innerText = "Nice! Your paper covered BOT's rock."
                resultText.style.color = "green"
                userScore++
                userScoreElement.innerText = userScore
                checkZeroZero()
            }
            else if(botChoice === 'P'){
                resultText.innerText = "No winner this time, you both choose paper."
                resultText.style.color = "gray"
            }
            else if(botChoice === 'S'){
                resultText.innerText = "Oof! BOT's scissors cut your paper."
                resultText.style.color = "red"
                botScore++
                botScoreElement.innerText = botScore
                checkZeroZero()
            }
        }
        else if(e.target.id === "scissors"){
            let botChoice = choiceGenerator()
            if(botChoice === 'R'){
                resultText.innerText = "Oof! BOT's rock smashed your scissors."
                resultText.style.color = "red"
                botScore++
                botScoreElement.innerText = botScore
                checkZeroZero()
            }
            else if(botChoice === 'P'){
                resultText.innerText = "Nice! Your scissors cut BOT's paper."
                resultText.style.color = "green"
                userScore++
                userScoreElement.innerText = userScore
                checkZeroZero()
            }
            else if(botChoice === 'S'){
                resultText.innerText = "No winner this time, you both choose scissors."
                resultText.style.color = "gray"
            }
        }
    }
})

resetBtn.addEventListener('click',() => {
    userScoreElement.innerText = "0"
    botScoreElement.innerText = "0"
})