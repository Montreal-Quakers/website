---
---
const MediaQuery = window.matchMedia( "(min-width: {{ site.breakpoint }})" );
var IntersectionObserver1 = document.getElementById("intersectionObserver1");
var target1 = document.getElementById("intersectionObserver2");
var ScrollToTopBtn = document.getElementById("topBtn");
var NavBar = document.getElementById("myNavbar");
  // var btn = document.getElementById("searchbutton");

// Instead of using a calculation on scroll, this new backend (2021) uses intersectionObserver
let IntersectionObserverResult = new IntersectionObserver(callback1);
// start observing the target element
IntersectionObserverResult.observe(IntersectionObserver1);

// Scroll to top button
function callback1(entries, IntersectionObserverResult) {
	entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Hide button
      ScrollToTopBtn.style.opacity = "0";
      ScrollToTopBtn.style.pointerEvents = "none";
    } else {
      // Show button
      ScrollToTopBtn.style.opacity = "0.6";
      ScrollToTopBtn.style.pointerEvents = "all";
    }
  });
}

// Sticky navbar on widescreens
if (MediaQuery.matches) {

  // var dropdowns = document.querySelector('.dropdownElements');
  
  // dropdowns.addEventListener('mouseover', responsiveClick);
  // dropdowns.addEventListener('mouseout', responsiveClick);

  let observer2 = new IntersectionObserver(callback2);
  observer2.observe(target1);

// IntersectionObserverResult.observe(IntersectionObserver2);

  function callback2(entries, observer2) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        NavBar.classList.remove("change_nav_color");
      } else {
  	NavBar.classList.add("change_nav_color");
       }
     });
  // }
  }
}

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function responsiveClick(id, cancel, hover) {
  if (!MediaQuery.matches && hover === "hover") {return}
  var dropdownID = document.getElementById("dropdown_" + id);
  var dropdownID_height = document.getElementById("dropdown_" + id).scrollHeight;
 //     var dropdownIDChildren = dropdownID.children;
 // 	  console.log(dropdownIDChildren);
     var caretID = document.getElementById("caret_" + id);
 	  var i;
 
     if (dropdownID.style.maxHeight) {
       dropdownID.style.maxHeight = null;
       dropdownID.previousElementSibling.classList.remove("active");
       caretID.style.transform = null;
     } else {
       if (cancel === 1) {return}
       dropdownID.style.maxHeight = dropdownID_height + "px";
       dropdownID.previousElementSibling.classList.add("active");
       caretID.style.transform = "rotate(90deg)";
     }
   }

// This code flips the language changer icon 
// and then returns the new URL
function flipIcon() {
  var twoArrowIcon = document.getElementById("twoArrowIcon");
  var translationAnchor = document.getElementById("languageChanger");
  var newBaseURL = translationAnchor.dataset.newurl;
	// Start the icon spinning while javascript works
  twoArrowIcon.classList.add("rotate-hor-center");

  // By default, when users browse to the homepage, they are asked to choose a language once (see index.html)
  // From then on, going to the homepage goes to the preferred language homepage (e.g. /home)
  // Pressing this language changer button clears that preference
  // allowing the user to choose a new default language from the root URL.
  var choice = null;
    localStorage.setItem('lang',choice)

  // This part only applies to the search page. 
  // It finds the search query string and transfers over the search query too
  if (translationAnchor.classList.contains("searchy")) {
 
    // This class list includes search terms in the new URL when switching from French to English from the search page
	  // First get the current URL
    const currentURL = new URL(window.location.href);
	  // Extract the search query from the current URL
    var searchParameter = currentURL.searchParams.get("q");
	  if (searchParameter == null) 
	    {
	      var searchParameter = '';
	    }
	  // Build the new URL
    var newurl = newBaseURL + "?q=" + searchParameter;
	  // Run the animation and return the new URL with search terms.
//     setTimeout(function onclicky() {window.location.href = newurl;}, timeout);
    spinAndGiveNewURL(newurl) 
    return;
  } 

  // Else. For every other page but search, 
  // the animation runs and the new URL is displayed.
    spinAndGiveNewURL(newBaseURL) 
}

function spinAndGiveNewURL(newlink) {
  var timeout = 255
  setTimeout(function onclicky() {window.location.href = newlink;}, timeout);
  return;
}

// function ShowMoreCards() {
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("MoreBtn");
// 
//     btnText.style.display = "none";
//     moreText.style.display = "inline";
// }
