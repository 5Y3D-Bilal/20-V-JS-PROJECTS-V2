        const localq = [
            { text: 'You can observe a lot just by watching.', author: 'Yogi Berra, type.fit' },


            { text: 'A house divided against itself cannot stand.', author: 'Abraham Lincoln, type.fit' },


            { text: 'Difficulties increase the nearer we get to the goal.', author: 'Johann Wolfgang von Goethe, type.fit' },


            { text: 'Fate is in your hands and no one elses', author: 'Byron Pulsifer, type.fit' },

            { text: 'Be the chief but never the lord.', author: 'Lao Tzu, type.fit' },


            { text: 'Nothing happens unless first we dream.', author: 'Carl Sandburg, type.fit' },


            { text: 'Well begun is half done.', author: 'Aristotle, type.fit' },


            { text: 'Life is a learning experience, only if you learn.', author: 'Yogi Berra' },

            { text: 'Self-complacency is fatal to progress.', author: 'Margaret Sangster, type.fit' },

            { text: 'Peace comes from within. Do not seek it without.', author: 'Buddha, type.fit' },

            { text: 'What you give is what you get.', author: 'Byron Pulsifer, type.fit' },

            { text: 'We can only learn to love by loving.', author: 'Iris Murdoch, type.fit' },

            { text: 'Life is change. Growth is optional. Choose wisely.', author: 'Karen Clark, type.fit' }

        ]
        let data = []
        const quotecon = document.getElementById('quote-container')
        const quoteText = document.getElementById('quote')
        const twitter = document.getElementById('twitter')
        const authorText = document.getElementById('author')
        const newQuotebtn = document.getElementById('new-quote')
        const loader = document.getElementById('loading')
        const loaderText = document.querySelector('.lodingtext')

        //LOCALWAY

        // function newQuote(){
        //     const quote = localq[Math.floor(Math.random() * localq.length )]
        //     console.log(quote)    
        // }

        //API-WAY

        function loading() {
            loader.hidden = false
            loaderText.hidden = false
            quotecon.hidden = true
        }

        function complete(){
            quotecon.hidden = false  
            loader.hidden = true
            loaderText.hidden = true
        }

        function newQuote() {
            loading()
            const quote = data[Math.floor(Math.random() * data.length)]

            if (!quote.author) {
                authorText.innerText = 'unknown'
            } else {
                authorText.innerText = quote.author;
            }

            if (quote.text.length > 50) {
                quoteText.classList.add('long-quote')
            } else {
                quoteText.classList.remove('long-quote')

            }
            quoteText.innerText = quote.text
            complete()
        }

        newQuotebtn.addEventListener('click', () => newQuote())

        async function getQuotes() {
            loading()
            const apiUrl = ` https://type.fit/api/quotes`
            try {
                const res = await fetch(apiUrl)
                data = await res.json();
                newQuote()
            } catch (error) {

            }
        }

        twitter.addEventListener('click', () => tweetQuote())

        getQuotes()
        // loading()

        // newQuote()


        function tweetQuote() {
            const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`
            window.open(twitterURL, '_blank')
        }








//EASY WAY


// Get quote Form APi
// async function getQuotes(){
//     //proxyurl  not working "Expired or something" 
//     // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
//     const aipUrl = `https://api.forismatic.com/api/1.0./?method=getQuote&lang=en&format=json`
//     try {
//         const res = await fetch(proxyUrl + aipUrl);
//         const  data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log('You are doing something worng something' , error)
//     }
// }


// //On Load

// getQuotes()