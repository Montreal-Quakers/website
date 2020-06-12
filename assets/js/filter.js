---
---
function filterFunction(input) {
  var input, filter, ul, li, a, i, alpha;
  input = document.getElementById("filterInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("filterDropdown");
  button = div.getElementsByTagName("button");
	// Remove alpha headers
  alpha = document.getElementsByClassName("abc");
  filterbye = document.getElementsByClassName("filterbye");

  if (filter.length > 1) {
	    // make extra page stuff disappear
	    for (var j=0;j<alpha.length;j+=1){
               alpha[j].style.display = 'none';
             }
	    for (var k=0;k<filterbye.length;k+=1){
               filterbye[k].style.display = 'none';
             }
  } else {
	    // make extra page stuff reappear
	    for (var j=0;j<alpha.length;j+=1){
               alpha[j].style.display = 'block';
             }
	    for (var k=0;k<filterbye.length;k+=1){
               filterbye[k].style.display = 'block';
             }
  }
  for (i = 0; i < button.length; i++) {
    txtValue = button[i].textContent || button[i].innerText;
    var z = button[i].nextElementSibling;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      button[i].style.display = "block";
// 	  if (z === null) {} else {
//      z.className = z.className.replace(" filterHide", "filterShow");
// 	  }
    } else {
      button[i].style.display = "none";
    button[i].className = button[i].className.replace("color-1-light ", "buttonyellow ");
    button[i].className = button[i].className.replace("textwhite", "");
	  if (z === null) {} else {
    z.className = z.className.replace(" filterShow", "filterHide");
	  }
      }
    }
  }


function openAccordion(id) {
  var x = document.getElementById(id);
  var y = document.getElementById(id).parentElement;
  if (x.className.indexOf("filterShow") == -1) {
    x.className = x.className.replace("filterHide", " filterShow");
    x.previousElementSibling.classList.toggle("color-1-light");
    x.previousElementSibling.classList.toggle("buttonyellow");
    x.previousElementSibling.classList.toggle("textwhite");
  } else {
    x.className = x.className.replace(" filterShow", "filterHide");
    x.previousElementSibling.classList.toggle("color-1-light");
    x.previousElementSibling.classList.toggle("buttonyellow");
    x.previousElementSibling.classList.toggle("textwhite");
  }
}

function randomEntry() {
  var num = Math.floor(Math.random() * ({{ site.data.glossary.size }} - 1 + 1) + 1);
	var randLink = '#entry_id' + num;
	  window.open(randLink,"_self");
}

function randomEntry_fran() {
  var num = Math.floor(Math.random() * ({{ site.data.glossaire.size }} - 1 + 1) + 1);
	var randLink = '#entry_id' + num;
	  window.open(randLink,"_self");
}

