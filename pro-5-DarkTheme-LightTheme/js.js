const toggle = document.querySelector('input')
const slider = document.querySelector('slider')
const toggleIcon = document.getElementById('toggle-icon')
const toogletxt = document.querySelector('toggle-text')

function dark() {
    nav.style.backgroundColor = "rgba(0 0 0 / 50%)"
   
    toggleIcon.children[0].innerText = 'Dark Theme'
    toggleIcon.children[1].classList.remove('fa-sun')
    toggleIcon.children[1].classList.add('fa-moon')
}

function light() {
    toggleIcon.children[0].innerText = 'Light Theme'
    toggleIcon.children[1].classList.add('fa-sun')
    toggleIcon.children[1].classList.remove('fa-moon')
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
}



function switchtheme(event) {

    if (event.target.checked) {
        dark()
        
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        light()
        document.documentElement.setAttribute('data-theme', 'light')
    }
}



toggle.addEventListener('click', switchtheme)