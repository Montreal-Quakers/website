---
title: Books and Pamphlets
lang: en
translationID: library
og-title: Library
---
* This markdown unordered list (```* ```) will be replaced with an automatically generated Table of Contents, excluding any headers above. The line below ```{% raw %}{:toc}{% endraw %}``` indicates that this unordered list will be replace by the ToC 
{:toc}

### Pamphlets
{% for each in site.data.pamphlets %}
* _{{ each.Full_Title }}_, {{ each.Author }}{% if each.Author  %},{% endif %} {{ each.Year }}  {{ each.Subject }}
{% endfor %}
### Films
{% for each in site.data.films %}
* _{{ each.Title }}_, {{ each.Author }}{% if each.Year_of_publication %},{% endif %} {{ each.Year_of_publication }}{% if each.Description %}:{% endif %} {{ each.Description }}
{% endfor %}
### Books
{% for each in site.data.books %}
* _{{ each.TITLE }}_{% if each.AUTHOR %},{% endif %} {{ each.AUTHOR }}{% if each.PUBLISHED %},{% endif %} {{ each.PUBLISHED_YEAR }}
{% endfor %}
