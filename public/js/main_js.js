let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


let SlideIndex = 0;
ShowSlides();

function ShowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    SlideIndex++;
    if (SlideIndex > slides.length) {
        SlideIndex = 1
    }
    slides[SlideIndex - 1].style.display = "block";
    setTimeout(ShowSlides, 4000); // Change image every 2 seconds
}


let SlideIndeX = 0;
ShowSlideS();

function ShowSlideS() {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    SlideIndeX++;
    if (SlideIndeX > slides.length) {
        SlideIndeX = 1
    }
    slides[SlideIndeX - 1].style.display = "block";
    setTimeout(ShowSlideS, 5000); // Change image every 2 seconds
};