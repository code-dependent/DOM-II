// Your code goes here
function getAll(element){
    return document.querySelectorAll(element);
};
function get(element){
    return document.querySelector(element);
};
let bodyTag = get('body');
let night = get('#nightMode');
let funInSun = get('#sunFun');
let island = get('#island');
let mountainClimb = get('#mountain');
let links = getAll('.nav-link');
let home = get('div.container');
let boat = get('#boat')
let boat2 = get('#boat');
let bus = get('.bus')





function funBtn(){
    return alert('Redirecting you to sign up form');
};
funInSun.addEventListener('click', funBtn);
mountainClimb.addEventListener('click', funBtn);
island.addEventListener('click', funBtn);




function scrollyColoredFont() {
  let r = Math.random()*255;
  let g = Math.random()*255;
  let b = Math.random()*255;
  bodyTag.style.color = `rgb(${r}, ${g}, ${b})`;
  
//   link.children(0).style.color = `rgb(${r}, ${g}, ${b})`;

  
}
document.addEventListener('scroll', scrollyColoredFont)
function nightMode(){
    
    bodyTag.classList.toggle('nightMode');

    if(night.textContent == 'nightMode'){
        night.textContent = 'DayMode';
    

    }else if(night.textContent == 'DayMode'){
        night.textContent = 'nightMode';
    };
    
};
night.addEventListener('click', nightMode);


function rescue(event){
    if(event.keyCode == 70){
    boat.style.transform = 'rotate(360deg)'
        
    }
}
document.addEventListener('keydown', rescue)
function rockTheBoat2(){
    boat.style.transform = 'rotate(180deg)'
    alert(`You just had to test it didn't you (press 'f' for a rescue)`)
}
boat.addEventListener('click', rockTheBoat2)



function whatADrag(){
    
    bodyTag.style.fontFamily = 'Rock Salt, cursive'
    
}
boat.addEventListener('mouseover', whatADrag)

function dropOff(){
    
    bodyTag.style.fontFamily = 'Roboto, sans-serif'

    
}
boat.addEventListener('mouseout', dropOff)



function linkChange(event){
    event.preventDefault();
    
    links.forEach(link => link.style.fontFamily ='Parisienne, cursive')
}
links.forEach(link => link.addEventListener('mousedown',linkChange))




function linkChange2(event){
    event.preventDefault();
    
    links.forEach(link => link.style.fontFamily ='Roboto, sans-serif')
}

links.forEach(link => link.addEventListener('mouseup',linkChange2))



function prevent(event){
    event.preventDefault();
}
links.forEach(link => link.addEventListener('click',prevent))



function busChance(event){
    event.preventDefault()
    if(event.keyCode == 16){
    alert(`Please Dont't Rock the Boat`)}
}
document.addEventListener('keydown', busChange)