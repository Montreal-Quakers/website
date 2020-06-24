---
title: <i class="far fa-newspaper"></i> &nbsp;News and Updates &nbsp;<i class="fas fa-bullhorn"></i>
hovertitle: The Latest Updates
lang: en
trans: news
---
Our [calendar](/calendar) shows our upcoming events.

This page is for major events and updates that we announce more broadly to the public. 

More minor updates are sent to a listserv. If anyone is interested in being on this list, you can [contact us](/contact.html). 

<ul>
{% assign posty=site.posts | where:"lang","en" %}
  {% for post in posty %}
    <li>
      <a href="{{ post.url }}">{{ post.title }} — posted {{ post.date | date: "%B %-d, %Y" }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
