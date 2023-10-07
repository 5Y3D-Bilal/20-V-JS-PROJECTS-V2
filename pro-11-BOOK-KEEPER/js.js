const modal = document.getElementById('modal')
const modalShow = document.getElementById('show-modal')
const modalClose = document.getElementById('close-modal')
const bookmarkForm = document.getElementById('bookmark-form')
const wedsiteNameEl = document.getElementById('website-name')
const websiteUrlelement = document.getElementById('website-url')
const bookmarkcontainer = document.getElementById('bookmarks-container')

let bookmarks = [];



function validate (namevalue , urlvalue){
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
    const regx = new RegExp(expression)
    if(!namevalue || !urlvalue){
        alert('Please Sumbit Both Values "NAME" And "URL"')
    }
    if(!urlvalue.match(regx)){
        alert('Please Provide a Vaild Web adress or (Try to Remove letter spacing)')
        return false
    }
    //valid
    return true
}

//show modal
function showModal() {
    modal.classList.add('show-modal')
    wedsiteNameEl.focus()
}


modalShow.addEventListener('click' , showModal)
modalClose.addEventListener('click' , ()=>{
    modal.classList.remove('show-modal')
})

window.addEventListener('click' , (e) =>{
     if (e.target === modal) {
        modal.classList.remove('show-modal')
     }else{
        false
     }
})

//build Booksmarks

function DeleteBookmark(url) {
    bookmarks.forEach((bookmark, i) =>{
        if (bookmark.url === url) {
            bookmarks.splice(i, 1)
        }
    })
    //update bookmarks arry in localstoarage
    localStorage.setItem('bookmarks' , JSON.stringify(bookmarks))
    fetchbooksmarsk()
}

function buildBooksMarks(){
    bookmarks.forEach((bookmark) =>{
        const {name, url} = bookmark
        // item
        const item = document.createElement('div')
        item.classList.add('item')
        //close item
        const closeIcon = document.createElement('i')
        closeIcon.classList.add('fas' , 'fa-times')
        closeIcon.setAttribute('title' , 'Delete Bookmark')
        closeIcon.setAttribute('onclick' , `DeleteBookmark('${url}')`)
        //favicon / Link Container
        const linkinfo = document.createElement('div')
        linkinfo.classList.add('name')

        const favicon = document.createElement('img')
        favicon.setAttribute('src' , `https://s2.googleusercontent.com/s2/favicons?domain=${url}`)
        favicon.setAttribute('alt', ' Favicon')
        
        const link = document.createElement('a')
        link.setAttribute('href' , `${url}`)
        link.setAttribute('traget' , '_blank')
        link.textContent = name

        //appendingin
        linkinfo.append(favicon, link)
        item.append(closeIcon , linkinfo)
        bookmarkcontainer.appendChild(item)
    })
}

function fetchbooksmarsk(){
    //Remove all bookmarks
    bookmarkcontainer.textContent= ''
    //get booksmarks if available
    if (localStorage.getItem('bookmarks')) {
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    }else{
        bookmarks = [{
            name:'567',
            url:'https://567.com',
        },
    ]
    localStorage.setItem('bookmarks' , JSON.stringify(bookmarks))
    }
    buildBooksMarks()
}

function storeBookmark(e){
    e.preventDefault()
    const namevalue = wedsiteNameEl.value
    let urlvalue = websiteUrlelement.value
    if (!urlvalue.includes('http://' , 'https://')) {
        urlvalue = `https://${urlvalue}`
    }
    if (!validate(namevalue , urlvalue)) {
        return false
    }
    const bookmark ={
        name : namevalue,
        url:urlvalue
    }
    bookmarks.push(bookmark)
    localStorage.setItem('bookmarks' , JSON.stringify(bookmarks))
    fetchbooksmarsk()
    bookmarkForm.reset()
    wedsiteNameEl.focus()
}

bookmarkForm.addEventListener('submit' , storeBookmark)

//on load

fetchbooksmarsk()