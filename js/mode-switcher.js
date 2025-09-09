// ============== Toggle mode switcher start ============

const modeSwitcherToggle = document.querySelector('.mode-swichter-toggler');
console.log(modeSwitcherToggle);

modeSwitcherToggle.addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.mode-switcher').classList.toggle('open');
});

//Hide Mode switcher on scroll

window.addEventListener('scroll', () => {
    if (document.querySelector('.mode-switcher').classList.contains('open')) {
        document.querySelector('.mode-switcher').classList.remove('open');
    }
});
// =============== color varients ============

const alternateStyle = document.querySelectorAll('.alternate-style');
console.log(alternateStyle);
function setActiveStyle(color) {


    console.log('clodfd');
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        }
        else {
            style.setAttribute('disabled', 'true');
        }
    }
    )
};
// theme light and dark mode 
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener("click", () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('light');
});
window.addEventListener('load', () => {
    if (document.body.classList.contains('light')) {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
    else {
        dayNight.querySelector('i').classList.add('fa-sun');
    }
});


