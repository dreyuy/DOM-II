//1. Fun Bus goes orange when
const funBus = document.querySelector('.logo-heading')

funBus.addEventListener('mouseenter', function (event){
    event.target.style.color = "orange";
    setTimeout(function(){
        event.target.style.color = '';
    }, 400);
},false)

//2. Nav Links background orange when clicked
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(function (event){
    event.addEventListener ('click', function(event){
        event.target.style.backgroundColor = 'orange'
    })
});

//3. Pictures get borders
const picSize = document.querySelectorAll('img');
picSize.forEach(function (event){
    event.addEventListener('dblclick', function(event){
        event.target.style.border = '5px solid black'
    })
});
//4. Loaded in footer
const log = document.querySelector('.footer p');
window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
})
document.addEventListener('readystatechange', (event) => {
    log.textContent = log.textContent + `Fully Loaded ${document.readyState}\n`;
});
document.addEventListener('DOMContentLoaded', (event) => {
    log.textContent = log.textContent + ` || Charged and\n`;
});
//5. Focus on button
const buttonFocus = document.querySelectorAll('.btn');
buttonFocus.forEach(function (event){
    event.addEventListener('click', function(event){
        event.target.style.backgroundColor = 'orange'
    })
})
let scale = 1;
const el = document.querySelector('img');
el.onwheel = zoom;
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}
//links from resetting page
$("a").click(function(event){
    event.preventDefault();
});