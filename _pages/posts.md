---
title: <i class="far fa-newspaper"></i> &nbsp;News and Updates &nbsp;<i class="fas fa-bullhorn"></i>
hovertitle: The Latest Updates
lang: en
trans: news
---
Our [calendar](/calendar) shows our upcoming events.

This page, like our [Facebook page](https://fb.com/MontrealQuakers/){: rel="noopener" target="_blank"}, is for major events and updates that we announce more broadly to the public. 

More minor updates are sent to a listserv. If anyone is interested in being on this list, you can [contact us](/contact.html). 

<ul>
{% assign posty=site.posts | where:"lang","en" %}
  {% for post in posty %}
    <li><span>
      <a href="{{ post.url }}"><h2>{{ post.title }} — posted {{ post.date | date: "%B %-d, %Y" }}</h2></a></span>
      {{ post.excerpt }}
      <div>&nbsp;</div>
    </li>
  {% endfor %}
</ul>
