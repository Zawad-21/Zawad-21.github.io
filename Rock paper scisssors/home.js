function rpsGame(yourChoice) {
console.log(yourChoice);
var humanChoice, botChoice;
humanChoice = yourChoice.id;
botChoice = numberToChoice(randToRpsInt());
console.log(botChoice);
results = decideWinner(humanChoice, botChoice);
console.log(results);
message = finalMessage(results)
rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() *3);
}

function numberToChoice(num) {
    return['rock', 'paper', 'scissors'][num]
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper':0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return[yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': "You LOST!", 'color': 'red' };
}        
    else if (yourScore === 0.5) {
        return {'message': "It's a TIE!", 'color': 'darkgreen'};}
    
    else {
        return {'message': 'You WON!', 'color': 'blue'}
    }
    

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
}


document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();


var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');

humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "' height=150px width= 150px style='box-shadow: 5px 5px 5px blue'>";
messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color']+ "'>" + finalMessage['message'] + "</h1>"
botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "' height=150px width= 150px style='box-shadow: 5px 5px 5px red'>";

document.getElementById('flexBox').appendChild(humanDiv);
document.getElementById('flexBox').appendChild(botDiv);
document.getElementById('flexBox').appendChild(messageDiv)
}
