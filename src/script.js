//Script to apply for Titus Thomas Personal Portfolio

//Declare your global variables here=====>
const menuIcon = document.getElementById('menuIcon');//==========MenuIcon Toggle script==========
const navItem = document.getElementById('navItem');
const navList = document.getElementsByClassName('navList');

//Code here=====>
//==========Function for MenuIcon to Toggle the id to open==========
navItem.style.maxHeight = '0px';
menuIcon.onclick = () => {
    menuIcon.classList.toggle('open');
    if (navItem.style.maxHeight == '0px') {
        navItem.style.maxHeight = '300px';
    }
    else {
        navItem.style.maxHeight = '0px';
    }
}

//==========Function for showing active item in Navbar==========


//==========Function for creating welcome message to appear==========
let greetIndex = 0;
let greetText = '<HELLO, WORLD!>';
const speed = 150;

function greetings() {
    if (greetIndex < greetText.length) {
        document.getElementById('greetings').innerHTML += greetText.charAt(greetIndex);
        greetIndex++;
        setTimeout(greetings, speed);
    }
}

greetings();