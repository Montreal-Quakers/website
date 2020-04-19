---
layout: default
title: Site translation health
description: This page helps show the health of translations on the website
lang: en
exclude_from_search: true
---
What the script on this page does is print out all of the pages and posts on the website, their language indicated (some will be blank) and their translation code. If a code appears three times, that could be the problem!

# All the pages

{% for each in site.pages %}
     title: {{ each.title }} url: {{ each.url }} lang: {{ each.lang }} trans: {{ each.trans }}
{% endfor %}

# Now let's look at the posts

{% for each in site.posts %}
    title: {{ each.title }} url: {{ each.url }} lang: {{ each.lang }} trans: {{ each.trans }}
{% endfor %}
