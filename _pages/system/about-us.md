---
layout: default
permalink: /_pages/about-us.html
title: About Us
lang: en
translationID: system_about-us
type: system_grid
exclude_from_search: true
---
<section class="cards" id="cards">
  <ul>
{% for item in site.data.navigation.en %}
  {% if item.title == "About Us" %}
   {% for subitem in item.submenu %}<a href="{{ subitem.sublink }}"><li>
  <h3>{{ subitem.subtitle }}</h3>
</li></a>
   {% endfor %}</ul>
 {% endif %}
{% endfor %}
</section>
