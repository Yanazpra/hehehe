const typedTextSpan = document.querySelector(".typed.txt");

const textArray = ["all the best", "uji 1", "banyak kata kata"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay)
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else{
        textArrayIndex++;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoadded", function() {
    setTimeout(type, newTextDelay + 250);
})