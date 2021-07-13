---
---
const MediaQuery = window.matchMedia( "(min-width: {{ site.breakpoint }})" );
var IntersectionObserver1 = document.getElementById("intersectionObserver1");
var target1 = document.getElementById("StickyScrollBegin");
var target2 = document.getElementById("StickyScrollBeginPadding");
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
      // Show button
      ScrollToTopBtn.style.display = "none";
    } else {
      // Hide button
      ScrollToTopBtn.style.display = "block";
    }
  });
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Sticky navbar on widescreens
if (MediaQuery.matches) {
  let observer2 = new IntersectionObserver(callback2);
  observer2.observe(target1);

  function callback2(entries, observer2) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (NavBar.classList.contains("sticky")) {
  	NavBar.classList.add("return_color");
          NavBar.classList.remove("sticky");
  	target2.classList.remove("stickyOffset");
        }
      } else {
          NavBar.classList.remove("return_color");
  	NavBar.classList.add("sticky");
  	target2.classList.add("stickyOffset");
      }
    });
  }
}
else {
  // When the user clicks on the button, toggle between hiding and showing the dropdown content
  function responsiveClick(id) {
   var clickedID = document.getElementById(id);

   clickedID.classList.toggle("show_block");
// Tests whether the caret is already right
   var caretRight = clickedID.previousElementSibling.firstChild.classList.contains('fa-caret-right')

   if (caretRight) {
      clickedID.previousElementSibling.firstChild.className = "fa fa-caret-down";
   }
   if (!caretRight) {
      clickedID.previousElementSibling.firstChild.className = "fa fa-caret-right";
   }
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
      openDropdown.previousElementSibling.firstChild.className = "fa fa-caret-right";
      NavBar = openDropdown.previousElementSibling.firstChild.className;
    }
   }
  }
 }
}


function respondBar() {
  if (NavBar.className === "navbar") {
    NavBar.className += " responsive";
  } else {
    NavBar.className = "navbar";
  }
}

function flipIcon () {
  var twoArrowIcon = document.getElementById("twoArrowIcon");
  var translationAnchor = document.getElementById("translationURL");
  // Clear automatic routing of the homepage to a language
  var choice = null;
	// default timeout is 145 ms
  var timeout = 145
  localStorage.setItem('lang',choice)
  if (translationAnchor.classList.contains("searchy")) {
	  // This class list includes search terms in the new URL when switching from French to English from the search page
    twoArrowIcon.classList.add("rotate-hor-center"); // This makes the two arrow icon start to spin until the page moves away
    const parsedUrl = new URL(window.location.href);
    var newstring = parsedUrl.pathname + "?q=";
    var newurl = new URL(translationAnchor.href);
    var searchParameter = parsedUrl.searchParams.get("q");
    newurl.searchParams.set('q',searchParameter);
    translationAnchor = newurl;
    console.log(newurl);
    setTimeout(function clicky() {window.location.href = translationAnchor;}, timeout);
  } else {
    twoArrowIcon.classList.add("rotate-hor-center");
    setTimeout(function clicky() {window.location.href = translationAnchor;}, timeout);
  }
}

var unfoldField = document.getElementById("unfold");
var searchSubmit = document.getElementById("searchsubmit");
var searchInput = document.getElementById("inputsearch");
var form = document.getElementById("searchForm");
function unfoldSearch () {  // unhide search fields and input form upon click
  unfoldField.classList.add("hide");
   if (searchSubmit.classList.contains("hide")) {
  unfoldField.classList.remove("show");
  searchSubmit.classList.remove("hide");
  searchInput.classList.remove("input_narrow");
  searchInput.classList.remove("input_hide");
   }
  searchSubmit.classList.add("show");
  searchInput.classList.add("input_show");
  searchInput.focus();
}

function foldSearch () { // rehide search fields and input form when clicking outside of the search
  setTimeout(function foldy() {
    if (searchSubmit.classList.contains("show")) {
      searchSubmit.classList.remove("show");
      searchInput.classList.remove("input_show");
      unfoldField.classList.remove("hide");
    }
    unfoldField.classList.add("show");
    searchSubmit.classList.add("hide");
    searchInput.classList.add("input_narrow");
    setTimeout(function () {
      searchInput.classList.add("input_hide");
    }, 350);
  }, 100);
}

// function ShowMoreCards() {
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("MoreBtn");
// 
//     btnText.style.display = "none";
//     moreText.style.display = "inline";
// }
