const teamInput = document.getElementById('inp')

//const form = document.querySelector('.form')
//const teami = teamInp.value
const searchBtn = document.querySelector('.btn')
searchBtn.addEventListener('click', bringLogo)

async function bringLogo(event) {
    event.preventDefault()
    const team = teamInput.value
    const teamSrc = await getSrc(team)
    const logoSrc = teamSrc.teams[0].strTeamBadge
    createLogo(logoSrc)
}

async function getSrc(team) {
    try {
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${team}`)
        const data = await response.json()
        return data
    }
    catch(err) {
        console.error('err')
    }
    
}

function createLogo(logoSrc) {
    const logoContainer = document.querySelector('.logo-div')
    const logoDiv = document.createElement('div')
    const logo = document.createElement('img')
    logo.src = logoSrc
    logoDiv.appendChild(logo)
    logoContainer.appendChild(logoDiv)
}