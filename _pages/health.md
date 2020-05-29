---
layout: default
title: Site translation health
description: This page helps show the health of translations on the website
lang: en
exclude_from_search: true
permalink: /_pages/health.html
---
What the script on this page does is print out all of the pages and posts on the website, their language indicated (some will be blank) and their translation code. If a code appears three times, that could be the problem!
# All the pages

{% for each in site.pages %}{% assign ouch = each.url | replace: "%C3%A9", "é" | replace: "%C3%A0", "à" %}{% unless each.layout == "redirect" or each.trans == "blank" %}
* title: {{ each.title }} 
  * url: {{ ouch }}
  * lang: {{ each.lang }} 
  * trans: {{ each.trans }}
{% endunless %}{% endfor %}

# Now let's look at the posts

{% for each in site.posts %}
{% assign each.url = each.url | replace: "%C3%A9", "é" %}
* title: {{ each.title }} 
  * url: {{ each.url }} 
  * lang: {{ each.lang }} 
  * trans: {{ each.trans }}
{% endfor %}
