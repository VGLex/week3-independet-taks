const slides = document.getElementsByClassName('carousel__item');
const slideTotal = slides.length;
const nextButton = document.querySelector('#carusel__button--next');
const prevButton = document.querySelector('#carusel__button--prev');

let slidePosition = 0;

nextButton.addEventListener('click', () => {
   for(let slide of slides){
    slide.classList.remove('carousel__item--visible');
   } 

   if(slidePosition === slideTotal - 1) {
    slidePosition = 0;
   } else {
    slidePosition++;
   }

   slides[slidePosition].classList.add('carousel__item--visible');

});

prevButton.addEventListener('click', () => {
    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
       }
    if(slidePosition === 0) {
        slidePosition = slideTotal - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add('carousel__item--visible');
});