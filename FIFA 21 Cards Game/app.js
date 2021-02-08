//database of player-stats
let fifaCardsGame = {
    'cards' : ['messi', 'ronaldo', 'neymar', 'mbappe', 'ramos', 'stegen', 'casemiro', 'dijk', 'courtois', 'koulibaly', 'neuer', 'bruyne', 'kante', 'kroos', 'kimmich', 'alisson', 'oblak', 'robertson', 'arnold', 'lewandowski'],
    'cradsMap' : {'messi':93, 'ronaldo':92, 'neymar':91, 'mbappe':90, 'ramos':89, 'stegen':90, 'casemiro':89, 'dijk':90, 'courtois':89, 'koulibaly':88, 'neuer':89, 'bruyne':91, 'kante':88, 'kroos':88, 'kimmich':88, 'alisson':90, 'oblak':91, 'robertson':87, 'arnold':87, 'lewandowski':91}
}

const CARDS = fifaCardsGame['cards']

//event listeners


const start = document.querySelector('.start')
start.addEventListener('click', removeIntro)

//functions
function removeIntro() {
    document.querySelector('.intro').remove()
    let shuffleDiv = document.createElement('div')
    let shuffleBtn = document.createElement('button')
    shuffleBtn.classList.add('shuffle')
    shuffleBtn.innerHTML = 'SHUFFLE'
    shuffleDiv.appendChild(shuffleBtn)
    let addingShuffle = document.querySelector('.shuffleDiv')
    addingShuffle.appendChild(shuffleDiv)

    var startBtn = document.querySelector('.shuffle')
    startBtn.addEventListener('click', shuffleCards)
}
//using a random index to generate players for the player
function shuffleCards() {
    var startBtn = document.querySelector('.shuffle')
    startBtn.remove()
    let cardIndex = randomNums()
    let fifaCards = []
    for (i = 0; i < cardIndex.length; i++) {
        let cardsI = cardIndex[i]
        var card = CARDS[cardsI]
        fifaCards.push(card)
    }
    //getting the div to display player cards
    let playerCardsDiv = document.querySelector('.player-div') 
    //showing cards on the screens
    for (let i = 0; i < fifaCards.length; i++) {
        let playerCard = document.createElement('img')
        playerCard.src = `cards/${fifaCards[i]}.png`
        
        playerCardsDiv.appendChild(playerCard)
    }
}

//getting a random index for the player
function randomNums() {
    var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    ranNums = [],
    i = nums.length,
    r = 0;
    while(i-- && ranNums.length < 10) {
        r = Math.floor(Math.random() * i);
        ranNums.push(nums[r]);
        nums.splice(r,1);
    }
    return ranNums
}