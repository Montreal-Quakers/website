---
---
var checkbox = document.getElementById("wholecheck");
  let istrue = localStorage.getItem('istrue');
  if (typeof istrue === 'undefined') {istrue = 'false'};
  if (istrue === "true") {
          var istruebool = true;
  } else {
          var istruebool = false;
  }
  if (istruebool === true) {
         checkbox.checked = true;
  };

document.addEventListener('DOMContentLoaded', function () {

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
            localStorage.setItem('istrue','true');
            istrue = localStorage.getItem('istrue');
            istruebool = true;
    } else {
      // do that
         localStorage.setItem('istrue','false');
         istrue = localStorage.getItem('istrue');
         istruebool = false;
    }
  });
});

$(document).ready(function() {
        $('#tipue_search_input').tipuesearch({
         'wholeWords': istruebool,
         'minimumLength': 2
   });
});
