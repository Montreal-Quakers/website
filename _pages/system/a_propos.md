---
layout: default
permalink: /_pages/a_propos.html
title: À propos
lang: fr
trans: system_about-us
type: system_grid
exclude_from_search: true
---
<section class="cards" id="cards">
  <ul>
{% for item in site.data.navigation.fr %}
  {% if item.title == "À propos" %}
   {% for subitem in item.submenu %}<a href="{{ subitem.sublink }}"><li>
  <h3>{{ subitem.subtitle }}</h3>
</li></a>
   {% endfor %}</ul>
 {% endif %}
{% endfor %}
</section>
