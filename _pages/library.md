---
title: Books and Pamphlets
lang: en
translationID: library
og-title: Library
---
### Pamphlets
{% for each in site.data.pamphlets %}
* _{{ each.Title }}_, {{ each.Subtitle }} {{ each.Author }}, {{ each.Year }}  {{ each.Subject }}
{% endfor %}
### Films
{% for each in site.data.films %}
* _{{ each.Title }}_, {{ each.Author }}, {{ each.Year_of_publication }}  {{ each.Description }}
{% endfor %}
### Books
{% for each in site.data.books %}
* _{{ each.TITLE }}_, {{ each.AUTHOR }}, {{ each.PUBLISHED }}, {{ each.Language }}
{% endfor %}
