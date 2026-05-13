const spanEl = document.querySelector('h2 span');
const textArr = ['Front-End Developer', 'Designer', 'Freelancer'];
let index = 0;
let currentText = textArr[index].split('');

function writeText() {
    spanEl.textContent += currentText.shift();
    if (currentText.length !== 0) {
        setTimeout(writeText, Math.floor(Math.random() * 100));
    } else {
        currentText = spanEl.textContent.split('');
        setTimeout(deleteText, 3000);
    }
}

writeText();

function deleteText() {
    currentText.pop();
    spanEl.textContent = currentText.join('');  
    if (currentText.length !== 0) {
        setTimeout(deleteText, Math.floor(Math.random() * 100));
    } else {
        index = (index + 1) % textArr.length;
        currentText = textArr[index].split('');
        writeText();
    }
}


const headerEl = document.querySelector('header');
window.addEventListener('scroll', function() {
    const browserScrollY = window.pageYOffset;
    if(browserScrollY > 0) {
        headerEl.classList.add('active');
    } else {
        headerEl.classList.remove('active');
    }
});

const animationMove = function(selector) {
    const targetEl = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    console.log("찍히고 있나");
    window.scrollTo({top: targetScrollY, behavior: 'smooth'});
};

const scrollMoveEl = document.querySelectorAll('[data-animation-scroll="true"]');
for(let i = 0; i < scrollMoveEl.length; i++) {
    scrollMoveEl[i].addEventListener('click', function(e) {
        const target = this.dataset.target;
        console.log("target======="+ target);
        animationMove(target);
    });
}