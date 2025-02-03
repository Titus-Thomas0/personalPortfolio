//Script to apply for Titus Thomas Personal Portfolio

//==========JavaScript for MenuIcon to Toggle the id to open==========
const menuIcon = document.getElementById('menuIcon');
const navItem = document.getElementById('navItem');

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



//==========JavaScript for creating typing effect on the welcome message==========
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



//==========JavaScript for scroll tracking and updating active class==========

const sections = document.querySelectorAll("section"); // Select all sections to track
const navItems = document.querySelectorAll("#navItem .navList");
  
function updateActiveNav() {
    let currentSection = "";
  
// Identify the current section in the viewport
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
    });
  
// Update the active class on navigation items
    navItems.forEach((navItem) => {
        navItem.classList.remove("active");
  
        if (navItem.getAttribute("href") === `#${currentSection}`) {
          navItem.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);



//==========JavaScript for Resume section scroll animation==========

var items = document.querySelectorAll('.timeline-item');

function elementInView(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function displayItems() {
    for (var i = 0; i < items.length; i++) {
        if (elementInView(items[i])) {
            items[i].classList.add('in-view');
        }
        else {
            items[i].classList.remove('in-view');
        }
    }
}

window.onload = displayItems;
window.onresize = displayItems;
window.onscroll = displayItems;
