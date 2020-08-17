---
---
function chooseLang(lang) {
    let choice = lang;
    localStorage.setItem('lang',choice);
    {% for each in site.data.navigation.welcome %} if (choice === "{{ each.lang }}") {window.location.replace("{{ each.link }}");}{% endfor %}
}
