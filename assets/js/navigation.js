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
  /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
  function responsiveClick(id) {
   document.getElementById(id).classList.toggle("show_block");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
     var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show_block')) {
      openDropdown.classList.remove('show_block');
    }
   }
  }
 }
}

var y = document.getElementById("myNavbar");
var sticky = y.offsetTop;
var btn = document.getElementById("searchbutton");
var media = document.getElementById("media");
function scrollBar() {
  if ((window.pageYOffset > sticky)) {
          y.classList.remove("return_color");
	  y.classList.add("sticky");
  } else {
    if (y.classList.contains("sticky")) {
	  y.classList.add("return_color");
          y.classList.remove("sticky");
    }
 }
}
function respondBar() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// Return to top button, shown lower than 400px:
var mybutton = document.getElementById("myBtn");
function buttonAppear() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function flipIcon () {
	var i = document.getElementById("flippy");
	var i2 = document.getElementById("flippy2");
	if (i2.classList.contains("searchy")) {
	i.classList.add("rotate-hor-center");
        		
        const parsedUrl = new URL(window.location.href);
        var newstring = parsedUrl.pathname + "?q=";
        var newurl = new URL(i2.href);
        var param = parsedUrl.searchParams.get("q");
        newurl.searchParams.set('q',param);
        i2 = newurl;
        console.log(newurl); // "hi"
	setTimeout(function clicky() {window.location.replace(i2);}, 145);
	} else {
	i.classList.add("rotate-hor-center");
	setTimeout(function clicky() {window.location.replace(i2);}, 145);
	}
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
   inp.classList.remove("input_narrow");
   inp.classList.remove("input_hide");
    }
   sub.classList.add("show");
   inp.classList.add("input_show");
   inp.focus();
}
function foldSearch () {
	setTimeout(function foldy() {
    if (sub.classList.contains("show")) {
   sub.classList.remove("show");
   inp.classList.remove("input_show");
   unf.classList.remove("hide");
    }
   unf.classList.add("show");
   sub.classList.add("hide");
   inp.classList.add("input_narrow");
     setTimeout(function () {
        inp.classList.add("input_hide");
     }, 350);
 }, 100);
}
