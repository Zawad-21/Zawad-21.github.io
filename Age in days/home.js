function ageInDays() {
    var birthyear = prompt('What year were you born...Good friend?');
    var ageInDayss = (2020-birthyear);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are " + ageInDayss + " years old buddy")
    console.log(textAnswer)
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}