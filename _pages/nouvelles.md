---
title: <i class="far fa-newspaper"></i> &nbsp;Nouvelles
lang: fr
trans: news
type: system_grid
---
Consultez notre [calendrier](/calendrier) d'événements.

Cette page, comme la [page Facebook](https://fb.com/MontrealQuakers/){: rel="noopener" target="_blank"} (majoritairement en anglais), annonce des mises à jour et des événements majeurs de notre communauté.

Les nouvelles plus mineures sont envoyés à une liste d'envoi. Pour vous y inscrire, il suffit de nous [contacter](/contact-fr.html).

<h2>Articles récents</h2>

<section class="cards" id="cards">
<ul>
{% assign posty = site.posts | where:"lang","fr" %}
 {% for post in posty %}
 <li>
  <a href="{{ post.url }}">
  <h3>{{ post.title }}</h3>
  </a>
<p> 
<!-- Whitespace added for readability -->
{{ post.date | date: "%-d" }}
{% assign m = post.date | date: "%-m" %}
{% case m %}
  {% when '1' %}janvier
  {% when '2' %}février
  {% when '3' %}mars
  {% when '4' %}avril
  {% when '5' %}mai
  {% when '6' %}juin
  {% when '7' %}juillet
  {% when '8' %}août
  {% when '9' %}septembre
  {% when '10' %}octobre
  {% when '11' %}novembre
  {% when '12' %}decembre
{% endcase %}
{{ post.date | date: "%Y" }}
</p>
 {{ post.excerpt }}
<a href="{{ post.url }}">lire la suite</a>
 </li>
 {% endfor %}
</ul>
