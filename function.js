const slider = document.querySelector(".slider");
let slidersection = document.querySelectorAll(".slider-section");
let slidersectionlast = slidersection[slidersection.length -1];

const btnizq = document.querySelector(".btn-izq");
const btnder = document.querySelector(".btn-der");

slider.insertAdjacentElement('afterbegin', slidersectionlast);

function Next(){
    let slidersectionfirst=document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.2s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', slidersectionfirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
function Prev(){
    let slidersection = document.querySelectorAll(".slider-section");
    let slidersectionlast = slidersection[slidersection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.2s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', slidersectionlast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnder.addEventListener('click', function(){
    Next();
});
btnizq.addEventListener('click', function(){
    Prev();
});

const slider2 = document.querySelector(".slider2");
let slidersection2 = document.querySelectorAll(".slider-section2");
let slidersectionlast2 = slidersection2[slidersection2.length -1];

const btnizq2 = document.querySelector(".btn-izq2");
const btnder2 = document.querySelector(".btn-der2");

slider2.insertAdjacentElement('afterbegin', slidersectionlast2);

function Next2(){
    let slidersectionfirst2=document.querySelectorAll(".slider-section2")[0];
    slider2.style.marginLeft = "-200%";
    slider2.style.transition = "all 0.2s";
    setTimeout(function(){
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('beforeend', slidersectionfirst2);
        slider2.style.marginLeft = "-100%";
    }, 500);
}
function Prev2(){
    let slidersection2 = document.querySelectorAll(".slider-section2");
    let slidersectionlast2 = slidersection2[slidersection2.length -1];
    slider2.style.marginLeft = "0";
    slider2.style.transition = "all 0.2s";
    setTimeout(function(){
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('afterbegin', slidersectionlast2);
        slider2.style.marginLeft = "-100%";
    }, 500);
}
btnder2.addEventListener('click', function(){
    Next2();
});
btnizq2.addEventListener('click', function(){
    Prev2();
});


const slider3 = document.querySelector(".slider3");
let slidersection3 = document.querySelectorAll(".slider-section3");
let slidersectionlast3 = slidersection3[slidersection3.length -1];

const btnizq3 = document.querySelector(".btn-izq3");
const btnder3 = document.querySelector(".btn-der3");

slider3.insertAdjacentElement('afterbegin', slidersectionlast3);

function Next3(){
    let slidersectionfirst3=document.querySelectorAll(".slider-section3")[0];
    slider3.style.marginLeft = "-200%";
    slider3.style.transition = "all 0.2s";
    setTimeout(function(){
        slider3.style.transition = "none";
        slider3.insertAdjacentElement('beforeend', slidersectionfirst3);
        slider3.style.marginLeft = "-100%";
    }, 500);
}
function Prev3(){
    let slidersection3 = document.querySelectorAll(".slider-section3");
    let slidersectionlast3 = slidersection3[slidersection3.length -1];
    slider3.style.marginLeft = "0";
    slider3.style.transition = "all 0.2s";
    setTimeout(function(){
        slider3.style.transition = "none";
        slider3.insertAdjacentElement('afterbegin', slidersectionlast3);
        slider3.style.marginLeft = "-100%";
    }, 500);
}
btnder3.addEventListener('click', function(){
    Next3();
});
btnizq3.addEventListener('click', function(){
    Prev3();
});