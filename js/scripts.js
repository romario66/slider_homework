'use strict';

const slides = [
    {
        city: 'Rostov-on-Don Admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request',
        url: '../images/rostov-admiral.jpg',
    },
    {
        city: 'Sochi Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request',
        url: '../images/sochi-thieves.jpg',
    },
    {
        city: 'Rostov-on-Don Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request',
        url: '../images/rostov-patriotic.jpg',
    },
];

let currentSlide = 0;
const slideImg = document.querySelector('.slider-image');
const bullits = document.querySelectorAll('.slider-bullit');
const tabs = document.querySelectorAll('.slider-tabs-link');
const slideCityInfo = document.querySelector('.slider-info-city');
const slideAreaInfo = document.querySelector('.slider-info-area');
const slideTimeInfo = document.querySelector('.slider-info-time');
const slideCostInfo = document.querySelector('.slider-info-cost');
const prevButton = document.querySelector('.slider-toggler-left');
const nextButton = document.querySelector('.slider-toggler-right');

const updateControls = () => {
    bullits.forEach(bullit => bullit.classList.remove('isActive'));
    tabs.forEach(tab => tab.classList.remove('isActive'));
    bullits[currentSlide].classList.add('isActive');
    tabs[currentSlide].classList.add('isActive');
}

const updateSlide = () => {
    updateControls();
    const slide = slides[currentSlide];
    slideCityInfo.textContent = slide.city;
    slideAreaInfo.textContent = slide.area;
    slideTimeInfo.textContent = slide.time;
    slideCostInfo.textContent = slide.cost;
    slideImg.setAttribute('src', slide.url);
}

const getPrevSlide = () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlide();
}

const getNextSlide = () => {
    currentSlide++;
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }   
    updateSlide();
}

bullits.forEach(bullit => { 
    bullit.addEventListener('click', function() {
        currentSlide = this.dataset.slide;
        updateSlide();
    })
})

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        currentSlide = this.dataset.slide;
        updateSlide();
    })
})

prevButton.addEventListener('click', getPrevSlide);
nextButton.addEventListener('click', getNextSlide);