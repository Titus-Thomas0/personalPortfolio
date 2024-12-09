//Script to apply for Titus Thomas Personal Portfolio

//Declare your global variables here=====>
const menuIcon = document.getElementById('menuIcon');//==========MenuIcon Toggle script==========
const navItem = document.getElementById('navItem');

navItem.style.maxHeight = '0px';

//Code here=====>
//==========Function for MenuIcon to Toggle the class to open==========
menuIcon.onclick = () => {
    menuIcon.classList.toggle('open');
    if (navItem.style.maxHeight == '0px') {
        navItem.style.maxHeight = '300px';
    }
    else {
        navItem.style.maxHeight = '0px';
    }
}

let greetIndex = 0;
let greetText = '<Hello, World!>';
const speed = 150;

function greetings() {
    if (greetIndex < greetText.length) {
        document.getElementById('greetings').innerHTML += greetText.charAt(greetIndex);
        greetIndex++;
        setTimeout(greetings, speed);
    }
}

greetings();