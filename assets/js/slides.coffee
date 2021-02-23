---
---
slideIndex = 1;
showSlides(slideIndex);

# Next/previous controls
plusSlides = (n) -> showSlides(slideIndex += n)

# Thumbnail image controls
currentSlide = (n) -> showSlides(slideIndex = n)


showSlides = (n) -> 
  slides = document.getElementsByClassName("mySlides")
  dots = document.getElementsByClassName("dot")
  slideIndex = 1 if (n > slides.length) 
  slideIndex = slides.length if (n < 1)
  none = slide -> style.display = none
  none for slide in slides
#  for (i = 0; i < slides.length; i++) {
#      slides[i].style.display = "none";
#  }
  active = dot -> className.replace(" active", "")
  active for dot in dots
#  for (i = 0; i < dots.length; i++) {
#      dots[i].className = dots[i].className.replace(" active", "");
#  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
