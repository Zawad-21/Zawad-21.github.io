function initialize() {
    var weight, height
    weight = document.querySelector('.weight').value;
    height = document.querySelector('.height').value / 100;
    
    result = calcBMI(weight, height)
    message = suggestion(result)
    finished = frontEnd(message)

    if (weight==="" || height=="" || weight==="0" || height=="0") {
        alert("Please enter a valid number :(")
        return
    }
}

function calcBMI(weight, height) {
    let result = weight / (height * height)
    result = result.toFixed(2)
    let resultH1 = document.querySelector('.resultBefore')
    let resultNUM = document.querySelector('.resultNum')
    resultH1.innerHTML = "<h1>And your BMI is...<h1/>"
    resultNUM.innerText = result
    resultH1.classList.toggle('result')
    resultNUM.classList.toggle('resultNUM')
    return(result)
}
   
function suggestion(result) {
        if (result < 18.5) {
           return {'message' : 'Mate, you are a bit underweight. Try changing your diet and gain some weight!.'}
        }
        else if (result >= 18.5, result<= 24.9) {
           return {'message' : 'Wow! Your BMI looks just perfect! What is the secret buddy?'}
        }
        else if (result >= 25, result <= 29.9) {
            return {'message' : 'Looks like your BMI is almost perfect. Just shed off those extra bit of fats. Maintain a diet and do some excercise!.'}
        }
        else if (result >= 30, result <= 34.9) {
            return {"message" : "Your BMI score is not that good :(. Don't worry, do a lot of excercise and avoid fast foods."}
        }
        else if (result >= 35, result <= 39.9) {
            return {'message' : 'Strictly avoid foods that contain a lot of fats! Otherwise you will suffer a lot.'}
        }
        else if (result > 40) {
            return {'message' : 'This is BMI score is something to be afraid of. Immediately consult a doctor to avoid serious problems'}
        }
}


function frontEnd(message){ 
    var msgDiv = document.createElement('div')
    msgDiv.innerHTML = "<h1>" + message ['message'] + "</h1>"

    document.querySelector('.final').appendChild(msgDiv)
    document.querySelector('.final').classList.toggle('finalMsg')

    document.querySelector('.weight').setAttribute('onClick', 'window.location.reload()')
    document.querySelector('.height').setAttribute('onClick', 'window.location.reload()')
    document.querySelector('.btn').remove();
}

