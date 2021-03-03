
const btnDiv = document.querySelector('.btns')
const gameDiv = document.querySelector('.tetro-divs')
const startBtn = document.querySelector('#start')
const squares = Array.from(document.querySelectorAll('.tetro-divs div'))
const scoreSpan = document.querySelector('.score-span')
const score = document.querySelector('.score')
const width = 15
const randomColors = ['darkorange','lightgreen','skyblue','blueviolet','lightcoral']
//shaping the tetriminoes
const iTetromino = [
    [0,1,2,3],
    [0,width,width*2,width*3],
    [0,1,2,3],
    [0,width,width*2,width*3]
]
const lTetromino = [
    [0,width,width*2,width*2+1],
    [0,1,2,width],
    [0,1,width+1,width*2+1],
    [2,width+2,width,width+1]
]
const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
]
const tTetromino = [
    [0,1,2,width+1],
    [1,width+1,width*2+1,width],
    [1,width,width+1,width+2],
    [0,width,width*2,width+1]
]
const zTetromino = [
    [1,,2,width,width+1],
    [0,width,width+1,width*2+1],
    [1,,2,width,width+1],
    [0,width,width+1,width*2+1]
]

const allTetrominoes = [iTetromino,lTetromino,oTetromino,tTetromino,zTetromino]
let randomTetromino = Math.floor(Math.random() * allTetrominoes.length)
let randomRotation = Math.floor(Math.random() * iTetromino.length)
let colorIndex = Math.floor(Math.random() * randomColors.length)
let currentPosition = 6
let current = allTetrominoes[randomTetromino][randomRotation]
//event listeners
startBtn.addEventListener('click', removeIntro)

//removing the starting display
function removeIntro() {
    btnDiv.style.display = 'none'
    gameDiv.style.display = 'flex'
    setInterval(tetroDown,500)
}



function draw() { 
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino')
        squares[currentPosition + index].style.backgroundColor = randomColors[colorIndex]
})}

function unDraw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.remove('tetromino')
        squares[currentPosition + index].style.backgroundColor = ''
})}

function tetroDown() {
    unDraw()
    currentPosition += width
    draw()
    stop()
    gameOver()
}

function stop() {
    if (current.some(index =>
        squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            randomTetromino = Math.floor(Math.random() * allTetrominoes.length)
            randomRotation = Math.floor(Math.random() * iTetromino.length)
            colorIndex = Math.floor(Math.random() * randomColors.length)
            current = allTetrominoes[randomTetromino][randomRotation]
            currentPosition = 6
            draw()
    }
}

//controling the tetrominoes
document.addEventListener('keydown', control)
const mobileButtons = document.querySelector('.control-btns')
mobileButtons.addEventListener('click',checking)
function checking(event) {
    const itIs = event.target.nodeName === 'BUTTON'
    if (!itIs) {
        return
    }
    else {
        control(event)
    }
}

function rotate() {
    unDraw()
    const atRightEdge = current.some(index => (currentPosition+index + 1) % 15 === 0)
    if (atRightEdge) {
        currentPosition -= 1
    }
    if (randomRotation <3) {
        randomRotation += 1
    }
    else if (randomRotation === 3) {
        randomRotation -= 3
    }
    current = allTetrominoes[randomTetromino][randomRotation]
    draw()
}

const moveLeft = () => {
    unDraw()
    const atLeftEdge = current.some(index => (currentPosition+index) % 15 === 0)
    if (!atLeftEdge) {
        currentPosition -= 1
    }
    if (current.some(index => squares[currentPosition + index].contains('taken'))) {
        currentPosition += 1
    }
    draw()
}

const moveRight = () => {
    unDraw()
    const atRightEdge = current.some(index => (currentPosition+index + 1) % 15 === 0)
    if (!atRightEdge) {
        currentPosition += 1
    }
    if (current.some(index => squares[currentPosition + index].contains('taken'))) {
        currentPosition -= 1
    }
    draw()
}

function moveDown() {
    unDraw()
    currentPosition += width
    draw()
    stop()
    addScore
}

function control(e) {
    if (e.keyCode === 37 || e.target.classList.contains('left')) {
        moveLeft()
    }
    else if (e.keyCode === 39 || e.target.classList.contains('right')) {
        moveRight()
    }
    else if (e.keyCode === 38 || e.target.classList.contains('rotate')) {
        rotate()
    }
    else if (e.keyCode === 40 || e.target.classList.contains('down')) {
        moveDown()
    }
}

function gameOver() {
    const game = document.querySelector('.game')
    if (current.some(index => squares[currentPosition+index].classList.contains('taken'))) {
        game.style.display = 'none'
        console.log('over')
    }
}
let another = []
function gettingScoreArray() {
    let scoreArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    for (let n=0; n<scoreArray.length; n++) {
            let numList = []
            for (let i=15*n; i<(15*(n+1)); i++) {
                numList.push(i)
            }
        another.push(numList)
    }
}

gettingScoreArray()
let playerScore = 0
function addScore() {
    for (let i=0; i<another.length; i++) {
        if (another[i].forEach(index => squares[index].classList.contains('taken'))) {
            playerScore ++
            another.splice(i,1)
        }
    }
    scoreSpan.innerHTML = playerScore
}

