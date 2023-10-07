const form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')
const messagecontainer = document.querySelector('.message-container')
const message = document.getElementById('message')

let isValid = false

function ValidateForm(){
    //using contraint AIP
    isValid = form.checkValidity()
    console.log(isValid)
}

function processFormdata(e){
    e.preventDefault()
    // validate form
    ValidateForm()
}

form.addEventListener('submit' , processFormdata)