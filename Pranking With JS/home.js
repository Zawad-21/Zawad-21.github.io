document.querySelector('.prank').addEventListener('click', prank)

function prank() {
    setTimeout (function() {
        document.querySelector('.intro').remove()

        const scarySound = new Audio('images and sounds/scream.mp3');

        let prankImage = document.createElement('img')

        prankImage.src = 'images and sounds/prank image.jpg'

        prankImage.style.width = '100vw'
        prankImage.style.height = '100vh'

        scarySound.play()
        document.querySelector('.scary-box').appendChild(prankImage)
    }, 2000)
}