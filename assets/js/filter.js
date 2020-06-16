---
---
var list_div = document.getElementsByClassName("list_div");
var list_button = document.getElementsByClassName("list_button");

function filterFunction(input) {
  var input, filter, ul, li, a, i, alpha;
  input = document.getElementById("filterInput");
  filter = input.value.toUpperCase();
	// Remove alpha headers
  alpha = document.getElementsByClassName("abc");
  filterbye = document.getElementsByClassName("filterbye");
  if (filter.length > 1) {
	    // make extra page stuff disappear
	    for (var j=0;j<alpha.length;j+=1){
               alpha[j].style.display = 'none';
               filterbye[j].style.display = 'none';
             }
  } else {
	    // make extra page stuff reappear
	    for (var j=0;j<alpha.length;j+=1){
               alpha[j].style.display = 'block';
               filterbye[j].style.display = 'block';
             }
  }
  for (i = 0; i < list_button.length; i++) {
    txtValue = list_button[i].textContent || list_button[i].innerText;
    caretid = document.getElementById("caret" + j);
    // indexOf = -1 if value never occurs, otherwise, gives position in text, including 0.
    // In other words, the next line is if there IS a text match 
    // (because the value is greater than -1)
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      list_button[i].style.display = "block";
      if (filter.length > 2 && list_div[i].className.indexOf("filterHide") > -1) {
	     toggleAccordion(i); 
      }
    } else {  // If no match
      if (list_div[i].className.indexOf("filterShow") > -1) {
	     toggleAccordion(i); 
      }
        list_button[i].style.display = "none";
      }
    }
  }

// These are the open all / close all buttons
function openAll() {
  for (i = 0; i < list_button.length; i++) {
    if (list_div[i].className.indexOf("filterHide") > -1) {
          toggleAccordion(i); 
    }
  }
}
function closeAll() {
  for (i = 0; i < list_button.length; i++) {
    if (list_div[i].className.indexOf("filterShow") > -1) {
           toggleAccordion(i); 
    }
  }
}

// All the code below is about accessing elements one at a time, essentially by counter.
// First the random button
function randomEntry() {
  var num = Math.floor(Math.random() * ({{ site.data.glossary.size }} - 1 + 1));
	var randLink = '#button' + num;
	  window.open(randLink,"_self");
	if (list_div[num].className.indexOf("filterHide") > -1) {
		toggleAccordion(num);
	}
}

function randomEntry_fran() {
  var num = Math.floor(Math.random() * ({{ site.data.glossaire.size }} - 1 + 1));
	var randLink = '#button' + num;
	  window.open(randLink,"_self");
	if (list_div[num].className.indexOf("filterHide") > -1) {
		toggleAccordion(num);
	}
}
// This code reverses the current state.
function toggleAccordion(id) {
  var x = document.getElementById("div" + id);
  var y = document.getElementById("button" + id);
  var caretid = document.getElementById("caret" + id);
  if (x.className.indexOf("filterShow") == -1) {
    x.className = x.className.replace("filterHide", "filterShow");
    y.classList.toggle("color-1-light");
    y.classList.toggle("buttonyellow");
    y.classList.toggle("textwhite");
    caretid.className = "fas fa-caret-down bit_left";
  } else {
    x.className = x.className.replace("filterShow", "filterHide");
    y.classList.toggle("color-1-light");
    y.classList.toggle("buttonyellow");
    y.classList.toggle("textwhite");
    caretid.className = "fas fa-caret-right";
  }
}
