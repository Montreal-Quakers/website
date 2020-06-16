---
layout: default
permalink: /_pages/where-we-meet.html
title: Where We Meet
lang: en
trans: system_where-we-meet
type: system_grid
exclude_from_search: true
---
<section class="cards" id="cards">
  <ul>
{% for item in site.data.navigation.en %}
  {% if item.title == "Where We Meet" %}
   {% for subitem in item.submenu %}<a href="{{ subitem.sublink }}"><li>
  <h3>{{ subitem.subtitle }}</h3>
</li></a>
   {% endfor %}</ul>
 {% endif %}
{% endfor %}
</section>
