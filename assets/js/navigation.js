---
---
const mq = window.matchMedia( "(min-width: 1313px)" );

if (mq.matches) {
window.onscroll = function() {
	scrollBar();
        buttonAppear();
  }
} else {
	window.onscroll = function() {buttonAppear();}
}


var y = document.getElementById("myNavbar");
var sticky = y.offsetTop;
var btn = document.getElementById("searchbutton");
var media = document.getElementById("media");

// Gonna try adding some code to make it stop sticking while responsive  && (y.className = !y.className.includes(" responsive"))
function scrollBar() {
  if ((window.pageYOffset > sticky)) {
          y.classList.remove("return_color");
	  y.classList.add("sticky");
          media.classList.add("media_sticky");
    
  } else {
    if (y.classList.contains("sticky")) {
	  y.classList.add("return_color");
          y.classList.remove("sticky");
          media.classList.remove("media_sticky");
    }
 }
}

/* window.addEventListener('scroll', stickyNavigation); */

function respondBar() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

//
//function changePlaceholder(){
//  document.getElementById('input').placeholder = "{% if page.lang == "fr" %}Recherchez...{% else %}Search...{% endif %}";
//}

// Return to top button:
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 400px from the top of the document, show the button
// now this is above
// window.onscroll = function() {buttonAppear()};

function buttonAppear() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function flipIcon () {
	var i = document.getElementById("flippy");
	var i2 = document.getElementById("flippy2");
	i.classList.add("rotate-hor-center");
	setTimeout(function clicky() {window.location.replace(i2);}, 145);
}

	var unf = document.getElementById("unfold");
	var sub = document.getElementById("searchsubmit");
	var inp = document.getElementById("inputsearch");
	var form = document.getElementById("formy");

function unfoldSearch () {
   unf.classList.add("hide");
    if (sub.classList.contains("hide")) {
   unf.classList.remove("show");
   sub.classList.remove("hide");
   inp.classList.remove("input_hide");
//   form.classList.remove("hide");
    }
   sub.classList.add("show");
//   form.classList.add("show");
   inp.classList.add("input_show");
   inp.classList.add("searchopen");
   inp.focus();
}

function foldSearch () {
	setTimeout(function foldy() {
    if (sub.classList.contains("show")) {
   sub.classList.remove("show");
   inp.classList.remove("input_show");
//   form.classList.remove("show");
   unf.classList.remove("hide");
//   form.classList.remove("show");
    }
   unf.classList.add("show");
   sub.classList.add("hide");
//   form.classList.add("hide");
   inp.classList.add("input_hide");
   inp.classList.remove("searchopen");
  }, 100);
}
