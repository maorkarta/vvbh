var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(num) {
    showSlides(slideIndex += num);
}


function currentSlide(num) {
    showSlides(slideIndex = num);
}

function showSlides(num) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (num > slides.length) { slideIndex = 1 }
    if (num < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
