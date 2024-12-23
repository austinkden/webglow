// ------------------------------------------------------------------------------------------------------- vw/px Calculators
function calcVw(val, set) {
    let vwValue = val;
    let viewportWidth = 0;

    if ((set == null)) {
        viewportWidth = window.innerWidth;
    } else {
        viewportWidth = set;
    }

    let pixels = Math.round(((vwValue / 100) * viewportWidth) * 10) / 10;
    console.log(`${vwValue}vw = ${pixels}px`);
}

function calcPx(val) {
    let pixelValue = val;
    viewportWidth = window.innerWidth;
    let vw = Math.round(((pixelValue / viewportWidth) * 100) * 10) / 10;
    console.log(`${pixelValue}px = ${vw}vw`);
}

// ------------------------------------------------------------------------------------------------------- Scroll Event Listeners & Reminder
const learnMoreButton = document.querySelector('button.learn-more');
learnMoreButton.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
});

function scrollTimeout() {
    let scrollTimeout;
    let flashInterval;
    const downArrow = document.querySelector("button.learn-more i");

    window.onload = function() {
        scrollTimeout = setTimeout(function() {
            downArrow.style.transition = "color 0.1s linear";
            
            flashInterval = setInterval(function() {
                downArrow.style.color = downArrow.style.color === "black" ? "white" : "black";
            }, 750);
        }, 1500);
    };

    window.onscroll = function() {
        clearTimeout(scrollTimeout);
        clearInterval(flashInterval);
        downArrow.style.color = "";
    };

    const learnMoreButton = document.querySelector('button.learn-more');
    learnMoreButton.addEventListener('mouseover', () => {
        downArrow.style.transition = "color 0s";
        clearTimeout(scrollTimeout);
        clearInterval(flashInterval);
        downArrow.style.color = "";
    });
}

// ------------------------------------------------------------------------------------------------------- Initial Function Calls
scrollTimeout();

// ------------------------------------------------------------------------------------------------------- Get Started Button
const getStartedButtons = document.querySelectorAll('button.get-started');
getStartedButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLScIXyeQQh9uYaP4PNbv3SQ6CZrnMvLXRV62XudXpMfkmxIJYA/viewform", "_blank");
    });
});
