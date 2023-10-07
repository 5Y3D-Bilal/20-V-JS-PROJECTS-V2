const imgcontainer = document.getElementById('img-container')
const loader = document.getElementById('loader')
let photoary = []
let imgsloaded = 0
let totalimgs = 0
let ready = false
// SECOND KEY 4nUbOJrE7gwcFuE7a4SOFq_jnb4tpHnkBIgaKlWmADQ hcZyz6Rm8Oos2-8qIKuznOiOoxaMZxgDzehBfjrh49I
const apikey = 'TnIJG3trNbWIgAsJKd044c8M3sTP8I9QfCMDIjsySiA'
const count = 30
const aipurl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`



function imgloaded() {
    imgsloaded++
    console.log(imgsloaded)
    if (imgsloaded === totalimgs) {
        ready = true
        loader.hidden = true
        console.log('ready =', ready)
    }
    if (loader.hidden = true) {
        imgcontainer.hidden = false
    }
}


// Unsplash API


async function getPhotos() {
    try {
        const res = await fetch(aipurl)
        photoary = await res.json()
        displayphtos()
        // console.log(photoary)
    } catch (error) {
        console.log(error.message)
    }
}

function displayphtos() {
    totalimgs = photoary.length;
    console.log('total imgs', totalimgs);
    photoary.forEach((photo) => {
        imgsloaded = 0
        const item = document.createElement('a')
        item.setAttribute('href', photo.links.html)
        item.setAttribute('target', '_blank')
        item.innerText = (photo.likes)
        item.innerText = (photo.user.name)



        const img = document.createElement('img')
        img.setAttribute('src', photo.urls.regular)
        img.setAttribute('alt', photo.alt_description)
        img.setAttribute('title', photo.alt_description)

        img.addEventListener('load', imgloaded)

        item.appendChild(img)
        imgcontainer.appendChild(item)

    })
}
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos()
        ready = false
    }
})

getPhotos()