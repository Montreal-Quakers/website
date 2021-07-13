---
layout: default
permalink: /_pages/sitemap.html
title: English Site Map
lang: en
translationID: system_sitemap
type: system_grid
exclude_from_search: true
---
<ul>
{% for item in site.data.navigation.en %}
{% unless item.title == "Calendar" or item.submenu[0] %}<li><a href="{{ item.link }}">{{ item.title }}</a></li>{% endunless %}
{% if item.submenu[0] %}<li>{{ item.title }}</li><ul>
   {% for subitem in item.submenu %}<li><a href="{{ subitem.sublink }}">{{ subitem.subtitle }}</a></li>
   {% endfor %}</ul>
{% endif %}
  {% if item.title == "Calendar" %}
     <li><a href="{{ item.link }}">{{ item.title }}</a></li>
     <li><a href="/new_attender">Next Steps for New Attenders</a></li>
     <ul>
      {% for item in site.data.newcomer_cards.en %}<li><a href="{{ item.link }}">{{ item.title }}</a></li>
         {% if item.submenu[0] %}<ul>
           {% for subitem in item.submenu %}
             <li><a href="{{ subitem.sublink }}">{{ subitem.subtitle }}</a></li>
         {% endfor %}</ul>
      {% endif %}
    {% endfor %}</ul>
  {% endif %}
{% endfor %}
