function get(element){
    return document.querySelector(element)
}


let green = getAll('block')
let gray = get('block--gray')
let pink = get('block--pink')
let blue = get('block--blue')
let red = get('block--red')
let blockSec = get('blocks')


function top(event){
    event.preventDefault()
    blockSec.prepend(pink)
}
pink.addEventListener('click',top)