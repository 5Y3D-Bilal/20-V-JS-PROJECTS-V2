const { body } = document

function changeBackground(number){
    let prevBackground
    if (body.className) {
        prevBackground = body.className
    }
    body.className = ''
    switch (number) {
        case '1':
           return (prevBackground === 'background-1' ? false : body.classList.add('background-1'))
        case '2':
            return (prevBackground === 'background-2' ? false : body.classList.add('background-2'))
        case '3':
            return (prevBackground === 'background-3' ? false : body.classList.add('background-3'))
        default:
            break;
    }
}