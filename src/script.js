//Script to apply for Titus Thomas Personal Portfolio

//==========JavaScript for Pre-loader to load==========
const progress = document.getElementById("loaderProgress");
let value = 0;

// fake smooth progress until real load finishes
const interval = setInterval(() => {
  if (value < 90) {
    value += 1;
    progress.style.width = value + "%";
  }
}, 20);

window.addEventListener("load", () => {
  clearInterval(interval);

  progress.style.width = "100%";

  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 400);
  }, 300);
});


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

//==========JavaScript for changing navbar background on scroll==========
const navbar = document.getElementById("navigationBar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


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

window.onload = greetings();



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

//==========JavaScript for updating carousal in certificate section==========

const tracker = document.querySelector('.Carousal-Tracker');
const slides = Array.from(tracker.children);

const nextButton = document.querySelector('.carouselButton-Right');
const prevButton = document.querySelector('.carouselButton-Left');

const text = document.querySelector('.carousalText');
const captions = Array.from(text.children);

const navIndicator = document.querySelector('.carousalNav');
const indicators = Array.from(navIndicator.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//Arrange the slides next to each other

const setSlidePosition = (slides, index) => {
    slides.style.left = slideWidth * index +'px';
};

slides.forEach(setSlidePosition);

//Function to move slide

const moveSlide = (tracker, currentSlide, targetSlide) => {
    tracker.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

//Function to update caption

const updateCaption = (currentCaption, targetCaption) => {
    currentCaption.classList.remove('current-slide');
    targetCaption.classList.add('current-slide');
};

//Function to update indicator

const updateIndicator = (currentIndicator, targetIndicator) => {
    currentIndicator.classList.remove('current-slide');
    targetIndicator.classList.add('current-slide');
};

//Function to hide and show arrow buttons
const hideShowArrow = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
};

//When clicking prevButton, move the slide to left

prevButton.addEventListener('click', e => {
    const currentSlide = tracker.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentIndicator = navIndicator.querySelector('.current-slide');
    const prevIndicator = currentIndicator.previousElementSibling;
    const currentCaption = text.querySelector('.current-slide');
    const prevCaption = currentCaption.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    //Move to next slide

    moveSlide(tracker, currentSlide, prevSlide);

    //update caption
    
    updateCaption(currentCaption, prevCaption);

    //update indicator

    updateIndicator(currentIndicator, prevIndicator);

    //hide and arrow buttons

    hideShowArrow(slides, prevButton, nextButton, prevIndex);
});

//When clicking nextButton, move the slide to right

nextButton.addEventListener('click', e => {
    const currentSlide = tracker.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentIndicator = navIndicator.querySelector('.current-slide');
    const nextIndicator = currentIndicator.nextElementSibling;
    const currentCaption = text.querySelector('.current-slide');
    const nextCaption = currentCaption.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    //Move to next slide

    moveSlide(tracker, currentSlide, nextSlide);

    //update caption

    updateCaption(currentCaption, nextCaption);

    //update indicator

    updateIndicator(currentIndicator, nextIndicator);

    //hide and arrow buttons

    hideShowArrow(slides, prevButton, nextButton, nextIndex);
});

//When clicking navIndicator, move to that slide

navIndicator.addEventListener('click', e => {
    const targetIndicator = e.target.closest('button');

    if (!targetIndicator) return;

    const currentSlide = tracker.querySelector('.current-slide');
    const currentIndicator = navIndicator.querySelector('.current-slide');
    const targetIndex = indicators.findIndex(indicator => indicator === targetIndicator);
    const targetSlide = slides[targetIndex];
    const currentCaption = text.querySelector('.current-slide');
    const targetCaption = captions[targetIndex];

    //Move to target slide

    moveSlide(tracker, currentSlide, targetSlide);

    //update caption

    updateCaption(currentCaption, targetCaption);

    //update indicator

    updateIndicator(currentIndicator, targetIndicator);

    //hide and arrow buttons

    hideShowArrow(slides, prevButton, nextButton, targetIndex);
});



//==========JavaScript for remembering the theme user selected==========
const colorThemes = document.querySelectorAll('[name="themePicker"]');

//Store theme setting
const storeTheme = function(theme) {
    localStorage.setItem("theme", theme);
}

colorThemes.forEach((themeOption) => {
    themeOption.addEventListener('click', () =>{
        storeTheme(themeOption.value);
    });
});

//apply saved theme
const retrieveTheme = function() {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption) => {
        if (themeOption.value !== activeTheme) {
            themeOption.value = activeTheme;
        }
    });
}

document.onload = retrieveTheme();