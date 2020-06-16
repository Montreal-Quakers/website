---
layout: default
permalink: /_pages/sitemap-fr.html
title: Site Map en français
lang: fr
trans: system_sitemap
type: system_grid
exclude_from_search: true
---
<ul>
{% for item in site.data.navigation.fr %}
{% unless item.title == "Programmation" or item.submenu[0] %}<li><a href="{{ item.link }}">{{ item.title }}</a></li>{% endunless %}
{% if item.submenu[0] %}<li>{{ item.title }}</li><ul>
   {% for subitem in item.submenu %}<li><a href="{{ subitem.sublink }}">{{ subitem.subtitle }}</a></li>
   {% endfor %}</ul>
{% endif %}
  {% if item.title == "Programmation" %}
     <li><a href="{{ item.link }}">{{ item.title }}</a></li>
     <li><a href="/new_attender">Next Steps for New Attenders</a></li>
     <ul>
      {% for item in site.data.newcomer_cards.fr %}<li><a href="{{ item.link }}">{{ item.title }}</a></li>
         {% if item.submenu[0] %}<ul>
           {% for subitem in item.submenu %}
             <li><a href="{{ subitem.sublink }}">{{ subitem.subtitle }}</a></li>
         {% endfor %}</ul>
      {% endif %}
    {% endfor %}</ul>
  {% endif %}
{% endfor %}
