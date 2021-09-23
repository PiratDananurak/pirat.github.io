const left=document.getElementById('left');
const right1=document.getElementById('right1');
const right2=document.getElementById('right2');
const right3=document.getElementById('right3');
const right4=document.getElementById('right4');
// const card=document.querySelector('.card');
// const box=document.querySelector('.box');

function addDarkmode(){
    // boxx.classList.add("darkmode");
    // boxx.setAttribute('class','darkmode');
    // card.classList.add("darkmode");
    // card.setAttribute('class','darkmode');
    left.classList.add("darkmode");
    left.setAttribute('class','darkmode');
    right1.classList.add("darkmode");
    right1.setAttribute('class','darkmode');
    right2.classList.add("darkmode");
    right2.setAttribute('class','darkmode');
    right3.classList.add("darkmode");
    right3.setAttribute('class','darkmode');
    right4.classList.add("darkmode");
    right4.setAttribute('class','darkmode');
}

function removeDarkmode(){
    // boxx.classList.remove("darkmode");
    // boxx.setAttribute('class','card');
    // card.classList.remove("darkmode");
    // card.setAttribute('class','card');
    left.classList.remove("darkmode");
    left.setAttribute('class','card');
    right1.classList.remove("darkmode");
    right1.setAttribute('class','card');
    right2.classList.remove("darkmode");
    right2.setAttribute('class','card');
    right3.classList.remove("darkmode");
    right3.setAttribute('class','card');
    right4.classList.remove("darkmode");
    right4.setAttribute('class','card');
}


