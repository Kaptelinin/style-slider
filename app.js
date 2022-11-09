const upBtn = document.querySelector('.up-button');
const dwnBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
const slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
   changeSlide('up'); 
})

dwnBtn.addEventListener('click', () => {
    changeSlide('down');
})

document.addEventListener('keydown', event => {
    if(event.key === 'ArrowUp') {
       changeSlide('up');
    }
    else if(event.key === 'ArrowDown') {
       changeSlide('down');
    }
})

function changeSlide(direction) {
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0;
        }
    }
        else if(direction === 'down') {
            activeSlideIndex--;
            if(activeSlideIndex < 0) {
                activeSlideIndex = slidesCount -1;
            }
    }
    const heigth = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * heigth}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * heigth}px)`;
}