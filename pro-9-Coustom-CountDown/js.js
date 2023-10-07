const inputcontainer = document.getElementById('input-container')
const countdownform = document.getElementById('countdownForm')
const dataEL = document.getElementById('date-picker')

const countdownEl = document.getElementById('countdown')
const countdownElTitle = document.getElementById('countdown-title')
const countdownBtn = document.getElementById('countdown-button')
const timeElements = document.querySelectorAll('span')
const completeinfo = document.getElementById('complete-info')
const complete = document.getElementById('complete')
const completebtn = document.getElementById('complete-button')


let countdownTitle = ''
let countdownDate = ''
let countdownValue = Date;
let countTimeActive;

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

//set date input min with today, daete

const today = new Date().toISOString().split('T')[0]

dataEL.setAttribute('min', today)


//FUNCTIONS


//Populate Countdown
function updateDOM() {
    countTimeActive = setInterval(() => {
        const now = new Date().getTime()
        const distance = countdownValue - now
        console.log(distance)

        const days = Math.floor(distance / day)
        const hours = Math.floor((distance % day) / hour)
        const minutes = Math.floor((distance % hour) / minute)
        const seconds = Math.floor((distance % minute) / second)
        console.log(days, hours, seconds, minutes)

        //Hide input
        inputcontainer.hidden = true

        //if countdown is has ended
        if (distance < 0) {
            countdownEl.hidden = true
            complete.hidden = false
            clearInterval(countTimeActive)
            completeinfo.textContent = `${countdownTitle} Finished ${countdownDate}`
        } else {
            //Populate CountDown
            countdownElTitle.textContent = `LATEST | ${countdownTitle}`
            timeElements[0].textContent = `${days}`
            timeElements[1].textContent = `${hours}`
            timeElements[2].textContent = `${minutes}`
            timeElements[3].textContent = `${seconds}`

            complete.hidden = true
            countdownEl.hidden = false
        }

    }, second)

}

function updatecountdown(e) {
    e.preventDefault()
    countdownTitle = e.srcElement[0].value
    countdownDate = e.srcElement[1].value
    console.log(countdownDate, countdownTitle)
    // Get Number of crrunt date , updateDom
    if (countdownDate === '') {
        alert('Enter date please')
    } else {
        countdownValue = new Date(countdownDate).getTime()
        console.log('Count Down Value', countdownValue)
        updateDOM()
    }

}

//reset all values
function resetFun() {
    countdownEl.hidden = true
    inputcontainer.hidden = false
    //stop countdown
    clearInterval(countTimeActive)
    countdownTitle = ''
    countdownDate = ''
    complete.hidden = true

}



//Event listiner
countdownform.addEventListener('submit', updatecountdown)
countdownBtn.addEventListener('click', resetFun)
completebtn.addEventListener('click', resetFun)