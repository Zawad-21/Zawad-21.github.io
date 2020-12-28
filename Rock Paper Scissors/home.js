function rpsGame(yourChoice){
var humanChoice, botChoice;
humanChoice = yourChoice.id;
botChoice = randomChoice(someNum());
result = decideWinner(yourChoice.id, botChoice);
message = finalMessage(result)
finished = rpsFrontEnd(yourChoice.id, botChoice, message)
}

function someNum() {
    return Math.floor(Math.random() * 3);
}

function randomChoice(randNum) {
   return ['rock', 'paper', 'scissors'][randNum];
}

function decideWinner(manChoice, compChoice) {
    var possibleOutcomes = {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    }

manScore = possibleOutcomes[manChoice][compChoice]
return(manScore)
}

function finalMessage(humanScore) {
    if (humanScore===1) {
        return {'message':'You WON!'}
    }
    else if (humanScore===0.5) {
        return {'message':"It's a tie"}
    }
    else {
        return {'message':'You LOST!'}
    }
}

function rpsFrontEnd(humanImg, compImg, outcomeMessage) {
    var database = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

document.getElementById('container').remove();
document.getElementById('footer').remove();

var humanDiv = document.createElement('div')
humanDiv.setAttribute('class', 'humanDiv')
var compDiv = document.createElement('div')
compDiv.setAttribute('class', 'compDiv')
var msgDiv = document.createElement('div')
msgDiv.setAttribute('class', 'msgDiv')

humanDiv.innerHTML= "<img style width='120px' height='120px' src='" + database[humanImg] + "'>" + "<h1>You chose "+ humanImg +" </h1>";
compDiv.innerHTML= "<img width='120px' height='120px' src='" + database[compImg] + "'>" + "<h1>Bot chose "+ compImg +" </h1>";
msgDiv.innerHTML= "<h1>That means..." + outcomeMessage['message'] + " </h1>" + "<button onClick='history.go(0);' '><i class='fa fa-refresh' aria-hidden='true'> Play Again?</i></button>";


document.getElementById('flexBox').appendChild(humanDiv)
document.getElementById('flexBox').appendChild(compDiv)
document.getElementById('flexBox').appendChild(msgDiv)
}
