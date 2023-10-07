const music = document.querySelector('audio')
const prevbtn = document.getElementById('prev')
const nextbtn = document.getElementById('next')
const playbtn = document.getElementById('play')
const changeimg = document.querySelector('img')
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const progress = document.getElementById('progress')
const currentTimeEl = document.getElementById('current-time')
const durationEl = document.getElementById('duration')
const replay = document.querySelector('.fa-recycle')
const progresscontainer = document.getElementById('progress-container')
const heart = document.querySelector('.fa-heart')


//check if playing
let isPlaying = false;

const songs = [
    {
        name: 'Ali Zafar  Danny Zee  Sushi  Woofer Paar De feat Mykko Montana',
        displayName: 'Ali Zafar New Song',
        artist: 'Ali Zafar',
    },
    {
        name: 'jacinto-1',
        displayName: 'Jacinto',
        artist: 'Underground',
    },
    {
        name: 'jacinto-2',
        displayName: 'jacinto-V2',
        artist: 'Underground',
    },
    {
        name: 'KSHMR Raftaar  Legacy Official Lyric Video',
        displayName: 'Lagacy',
        artist: 'Raftaar',
    }

]




//Play music

function playSong() {
    isPlaying = true
    playbtn.classList.replace('fa-play', 'fa-pause')
    playbtn.setAttribute('title', 'Pause')
    music.play();
}

//Pause

function pauseSong() {
    music.pause()
    playbtn.classList.replace('fa-pause', 'fa-play')
    playbtn.setAttribute('title', 'Play')
    isPlaying = false
}




playbtn.addEventListener('click', () => {
    activeimganimation()
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

function activeimganimation() {
    changeimg.classList.toggle('active')
    if (changeimg.classList.contains('active')) {
        changeimg.classList.add('activeimgs')
        changeimg.classList.remove('activeimgs2')
    } else {
        changeimg.classList.add('activeimgs2')
        changeimg.classList.remove('activeimgs')

    }
}

function loadsongs(song) {
    title.textContent = song.displayName,
        artist.textContent = song.artist
    music.src = `music/${song.name}.mp3`
    changeimg.src = `img/${song.name}.jpg`
}

let songsidx = 0
function nxtsong() {
    songsidx++
    if (songsidx > songs.length - 1) {
        songsidx = 0
    }
    loadsongs(songs[songsidx])
    playSong()
    console.log(songsidx, 'Song')

}

function prevsong() {
    songsidx--
    if (songsidx < 0) {
        songsidx = songs.length - 1
    }
    loadsongs(songs[songsidx])
    playSong()
    console.log(songsidx, 'Song')
}

function updateprogressBar(e) {
    if (isPlaying) {
        const { duration, currentTime } = e.srcElement
        //Update the music progress bar
        const progresssPercent = (currentTime / duration) * 100
        progress.style.width = `${progresssPercent}%`
        const durationMinstes = Math.floor(duration / 60)

        let durationsec = Math.floor(duration % 60)
        if (durationsec < 10) {
            durationsec = `0${durationsec}`
        }
        //Deplay Switching duration Element to avoide NaN
        if (durationsec) {
            durationEl.innerText = `${durationMinstes}:${durationsec}`
        }

        //Calculate display for currentTime
        let currentseconds = Math.floor(currentTime % 60)
        const currentMuins = Math.floor(currentTime / 60)
        console.log(`Song Progress Time (mins ${currentMuins} | sec ${currentseconds})`)

        if (currentseconds < 10) {
            currentseconds = `0${currentseconds}`
        }
        // console.log('sec', currentseconds)
        currentTimeEl.innerText = `${currentMuins} : ${currentseconds}`
    }
}

function setprogreebar(e) {
    const width = this.clientWidth

    const clickx = e.offsetX

    const { duration } = music

    music.currentTime = (clickx / width) * duration
}



// EVENT LISTINERS
nextbtn.addEventListener('click', nxtsong)
replay.addEventListener('click', updateprogressBar)
prevbtn.addEventListener('click', prevsong)
music.addEventListener('timeupdate', updateprogressBar)
progresscontainer.addEventListener('click', setprogreebar)
heart.addEventListener('click', () => {
    heart.classList.toggle('active-likebtn')
    if (heart.classList.contains('active-likebtn')) {
        heart.classList.add('liked') 
        heart.classList.remove('likest')
    } else {
        heart.classList.remove('liked')
        heart.classList.add('likes')
    }
})


loadsongs(songs[songsidx])