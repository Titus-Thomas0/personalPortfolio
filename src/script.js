//Script to apply for Titus Thomas Personal Portfolio

//Declare your gobal variables here=====>
const menuIcon = document.getElementById('menuIcon');//==========MenuIcon Toogle script==========
const navItem = document.getElementById('navItem');
const logoImg = document.getElementById('logoImg');
const logoText = document.getElementById('logoText');

navItem.style.maxHeight = '0px';

//Code here=====>
//==========Function for MenuIcon to Toogle the class to open==========
menuIcon.onclick = () => {
    menuIcon.classList.toggle('open');
    if (navItem.style.maxHeight == '0px') {
        navItem.style.maxHeight = '300px';
    }
    else {
        navItem.style.maxHeight = '0px';
    }
}

logoImg.addEventListener('mouseover', () => {
    logoImg.style.transform = 'rotate(30deg)';
    logoImg.style.transition = 'all 0.05s';
    logoText.style.color = '#6A0C0B';
});

logoImg.addEventListener('mouseout', () => {
    logoImg.style.transform = 'rotate(0deg)';
    logoImg.style.transition = 'all 0.05s';
    logoText.style.color = '';
});

logoText.addEventListener('mouseover', () => {
    logoImg.style.transform = 'rotate(30deg)';
    logoImg.style.transition = 'all 0.05s';
    logoText.style.color = '#6A0C0B';
});

logoText.addEventListener('mouseout', () => {
    logoImg.style.transform = 'rotate(0deg)';
    logoImg.style.transition = 'all 0.05s';
    logoText.style.color = '';
});