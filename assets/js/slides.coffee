---
---
slideIndex = 1;
showSlides = (n) -> 
  slides = document.getElementsByClassName("mySlides")
  dots = document.getElementsByClassName("dot")
  slideIndex = 1 if (n > slides.length) 
  slideIndex = slides.length if (n < 1)
  for slide in slides
    slide.style.display = "none"
  for dot in dots
    dot.className.replace(" active", "")
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

showSlides(slideIndex);

# Next/previous controls
@plusSlides = (n) -> showSlides(slideIndex += n)

# Thumbnail image controls
@currentSlide = (n) -> showSlides(slideIndex = n)
