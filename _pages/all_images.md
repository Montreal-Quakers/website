---
layout: default
lang: en
permalink: all_images.html
exclude_from_search: true
---

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files %}
  {{ myimage.path }}
  ![]({{ myimage.path }}){: class="img_center25}
{% endfor %}
