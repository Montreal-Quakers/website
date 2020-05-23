---
title: <i class="far fa-newspaper"></i> &nbsp;News and Updates &nbsp;<i class="fas fa-bullhorn"></i>
hovertitle: The Latest Updates
lang: en
trans: news
---
Many of our meeting's events are posted to a listserv available to folks who have attended meetings before and indicated interest in hearing about our events. If anyone is interested in being on this list without ever having attended meeting, you can [contact us](contact.html). This page is for major events that we announce more broadly to the public.

<ul>
{% assign posty=site.posts | where:"lang","en" %}
  {% for post in posty %}
    <li>
      <a href="{{ post.url }}">{{ post.title }} — posted {{ post.date | date: "%B %-d, %Y" }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
