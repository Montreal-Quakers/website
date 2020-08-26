<hr style="height:10px;visibility:hidden;margin:0"/>

## {{ site.title }}

Sundays, 11 AM, Greene Centre<br>

[{{ site.address }}](https://montreal.quaker.ca/directions.html)

{% for each in site.data.navigation.footer-en %}[{{ each.title }}](https://montreal.quaker.ca{{ each.link }}){% unless forloop.last == true %} &ensp;{% endunless %}{% endfor %}
