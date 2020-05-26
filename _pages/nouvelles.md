---
title: <i class="far fa-newspaper"></i> &nbsp;Nouvelles
lang: fr
trans: news
---
Nous avisons notre communauté des événements du mois d'habitude par une liste d'envoi, disponible pour ceux et celles qui s'y inscrivent à une de nos assemblées. Si quelqu'un aimerait s'ajouter à cette liste, il suffit de nous [contacter](contact-fr.html). Cette page, comme la [page Facebook(https://fb.com/MontrealQuakers/) (majoritairement en anglais), annonce des événements majeurs tenus par l'Assemblée Quaker de Montréal.

<ul>
{% assign posty = site.posts | where:"lang","fr" %}
  {% for post in posty %}

    <li>
      <a href="{{ post.url }}">{{ post.title }} — publié le 
<!-- Whitespace added for readability -->
{{ post.date | date: "%-d" }}
{% assign m = post.date | date: "%-m" %}
{% case m %}
  {% when '1' %}jan
  {% when '2' %}fév
  {% when '3' %}mar
  {% when '4' %}avr
  {% when '5' %}mai
  {% when '6' %}jun
  {% when '7' %}jul
  {% when '8' %}aoû
  {% when '9' %}sep
  {% when '10' %}oct
  {% when '11' %}nov
  {% when '12' %}dec
{% endcase %}
{{ post.date | date: "%Y" }}
</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
