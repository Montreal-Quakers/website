---
---
{% if page.lang == "fr" %}{% assign fr = true %}{% endif %}
function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}

var copyMomismBtn = document.querySelector('.js-copy-momism');

//copyMomismBtn.addEventListener('click', function(event) {
function copyButton(id) {
    var x = document.getElementById(id).href;
    var copytext = document.getElementById("copied").textContent; 
    tooltipid="myTooltip_" + id;
    tooltip = document.getElementById(tooltipid);
    oldtext = tooltip.innerHTML;
    copyTextToClipboard(x);
    tooltip.innerHTML = copytext;
    setTimeout(function(){tooltip.innerHTML = oldtext;}, 8000);
};
